import { NextResponse } from "next/server";

export const runtime = "nodejs";

/**
 * Project enquiry delivery endpoint.
 *
 * Sends contact-form submissions to a private Telegram chat using the Bot API.
 * Credentials live only in server-side environment variables, so nothing secret
 * is ever shipped to the browser.
 */

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;

const LIMITS = {
  name: 80,
  email: 160,
  service: 200,
  budget: 80,
  message: 4000,
} as const;

type RateLimitEntry = { count: number; resetAt: number };

// Best-effort in-memory limiter. Vercel may run several instances, so this is
// a spam deterrent rather than a hard guarantee.
const rateLimitStore = new Map<string, RateLimitEntry>();

function getClientIp(request: Request): string {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitStore.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitStore.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX_REQUESTS;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function readString(
  source: Record<string, unknown>,
  key: string,
  maxLength: number
): string {
  const value = source[key];
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatIds = (process.env.TELEGRAM_CHAT_ID || "")
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);

  if (!token || chatIds.length === 0) {
    console.error(
      "Contact endpoint is not configured: set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID."
    );
    return NextResponse.json(
      {
        success: false,
        message:
          "The enquiry channel is temporarily unavailable. Please reach out via WhatsApp or email instead.",
      },
      { status: 503 }
    );
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      {
        success: false,
        message:
          "Too many enquiries sent recently. Please wait a few minutes or contact me via WhatsApp.",
      },
      { status: 429 }
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  if (!payload || typeof payload !== "object") {
    return NextResponse.json(
      { success: false, message: "Invalid request body." },
      { status: 400 }
    );
  }

  const body = payload as Record<string, unknown>;

  // Honeypot: silently accept so bots think they succeeded.
  if (readString(body, "_honey", 200)) {
    return NextResponse.json({ success: true });
  }

  const name = readString(body, "name", LIMITS.name);
  const email = readString(body, "email", LIMITS.email);
  const service = readString(body, "service", LIMITS.service);
  const budget = readString(body, "budget", LIMITS.budget);
  const message = readString(body, "message", LIMITS.message);

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (name.length < 2) {
    return NextResponse.json(
      { success: false, message: "Please provide your full name (minimum 2 characters)." },
      { status: 422 }
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { success: false, message: "Please provide a valid email address." },
      { status: 422 }
    );
  }

  if (!service) {
    return NextResponse.json(
      { success: false, message: "Please select the service required for your project." },
      { status: 422 }
    );
  }

  if (message.length < 10) {
    return NextResponse.json(
      {
        success: false,
        message: "Please describe your project requirements (minimum 10 characters).",
      },
      { status: 422 }
    );
  }

  const receivedAt = new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());

  const text = [
    "<b>New Project Enquiry</b>",
    "",
    `<b>Name:</b> ${escapeHtml(name)}`,
    `<b>Email:</b> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`,
    `<b>Service:</b> ${escapeHtml(service)}`,
    `<b>Budget:</b> ${escapeHtml(budget || "Flexible / Not specified")}`,
    `<b>Received:</b> ${escapeHtml(receivedAt)} IST`,
    "",
    "<b>Project overview</b>",
    escapeHtml(message),
  ].join("\n");

  const results = await Promise.allSettled(
    chatIds.map(async (chatId) => {
      const response = await fetch(
        `https://api.telegram.org/bot${token}/sendMessage`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: chatId,
            text,
            parse_mode: "HTML",
            disable_web_page_preview: true,
          }),
          signal: AbortSignal.timeout(10_000),
        }
      );

      if (!response.ok) {
        const details = await response.text();
        throw new Error(`Telegram responded ${response.status}: ${details}`);
      }

      return true;
    })
  );

  const delivered = results.some((result) => result.status === "fulfilled");

  if (!delivered) {
    for (const result of results) {
      if (result.status === "rejected") {
        console.error("Telegram delivery failed:", result.reason);
      }
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "The enquiry could not be delivered right now. Please reach out via WhatsApp or email instead.",
      },
      { status: 502 }
    );
  }

  return NextResponse.json({ success: true });
}
