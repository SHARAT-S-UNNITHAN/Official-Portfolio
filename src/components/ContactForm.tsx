"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare, Mail, ShieldAlert } from "lucide-react";
import { personalData } from "@/data/personal";
import { servicesData } from "@/data/services";

export function ContactForm() {
  const searchParams = useSearchParams();
  const initialService = searchParams ? searchParams.get("service") || "" : "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    budget: "",
    message: "",
    _honey: "", // Anti-spam honeypot
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Spam honeypot trap
    if (formData._honey) {
      setStatus("success");
      return;
    }

    // Validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setStatus("error");
      setErrorMessage("Please provide your full name (minimum 2 characters).");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setStatus("error");
      setErrorMessage("Please provide a valid email address where I can reply.");
      return;
    }

    if (!formData.service) {
      setStatus("error");
      setErrorMessage("Please select the service required for your project.");
      return;
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setStatus("error");
      setErrorMessage("Please describe your project requirements (minimum 10 characters).");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      // Submitting via FormSubmit AJAX endpoint to verified email
      const response = await fetch(`https://formsubmit.co/ajax/${personalData.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          _subject: `New Project Enquiry from ${formData.name.trim()} [Portfolio]`,
          name: formData.name.trim(),
          email: formData.email.trim(),
          service: formData.service,
          budget: formData.budget || "Flexible / Not specified",
          message: formData.message.trim(),
          _template: "table",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success !== "false") {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          service: "",
          budget: "",
          message: "",
          _honey: "",
        });
      } else {
        throw new Error(data.message || "Failed to transmit submission.");
      }
    } catch (err: any) {
      console.error("Form transmission error:", err);
      setStatus("error");
      setErrorMessage(
        "Direct API dispatch encountered an interruption. You can reach out immediately via WhatsApp or direct email below."
      );
    }
  };

  return (
    <div className="rounded-3xl glass-panel border border-surface-border p-6 sm:p-8 shadow-2xl">
      <div className="mb-6">
        <h3 className="font-sans font-bold text-2xl text-foreground tracking-tight">
          Project Enquiry
        </h3>
        <p className="text-xs sm:text-sm text-foreground/70 mt-1">
          Have an idea or requirement? Send me the details and I will reply within 24 hours.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-8 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-center space-y-4 animate-fade-in">
          <div className="w-12 h-12 rounded-full bg-cyan-500/20 text-cyan-400 mx-auto flex items-center justify-center">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h4 className="font-sans font-bold text-lg text-foreground">
            Enquiry Dispatched Successfully!
          </h4>
          <p className="text-xs sm:text-sm text-foreground/80 max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Your project brief has been forwarded directly to{" "}
            <span className="font-mono text-cyan-400 font-semibold">{personalData.email}</span>. I will review your requirements and respond promptly.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 transition-colors shadow-md shadow-cyan-500/20"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Connect on WhatsApp as well</span>
            </a>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="px-4 py-2.5 rounded-xl text-xs font-mono border border-surface-border text-foreground hover:bg-surface-muted transition-colors"
            >
              Send Another Note
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot field for anti-spam */}
          <input
            type="text"
            name="_honey"
            value={formData._honey}
            onChange={handleChange}
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-start gap-2.5 animate-fade-in">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-medium">{errorMessage}</p>
                <div className="pt-1 flex gap-3 text-[11px] font-mono">
                  <a
                    href={`mailto:${personalData.email}`}
                    className="underline hover:text-red-300"
                  >
                    Open Mail Client
                  </a>
                  <span>•</span>
                  <a
                    href={personalData.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-red-300"
                  >
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Name */}
            <div className="space-y-1.5 text-left">
              <label
                htmlFor="name"
                className="block text-xs font-mono font-medium text-foreground/80"
              >
                Your Name <span className="text-cyan-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Rahul Sharma"
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-muted/60 border border-surface-border text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5 text-left">
              <label
                htmlFor="email"
                className="block text-xs font-mono font-medium text-foreground/80"
              >
                Email Address <span className="text-cyan-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@domain.com"
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-muted/60 border border-surface-border text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Service Selection */}
            <div className="space-y-1.5 text-left">
              <label
                htmlFor="service"
                className="block text-xs font-mono font-medium text-foreground/80"
              >
                Service Required <span className="text-cyan-400">*</span>
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-muted/60 border border-surface-border text-sm text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
              >
                <option value="">Select a service...</option>
                {servicesData.map((svc) => (
                  <option key={svc.id} value={svc.title}>
                    {svc.number}. {svc.title}
                  </option>
                ))}
                <option value="General Consultation">General Project Consultation</option>
                <option value="Other">Other Software / Technical Need</option>
              </select>
            </div>

            {/* Optional Budget */}
            <div className="space-y-1.5 text-left">
              <label
                htmlFor="budget"
                className="block text-xs font-mono font-medium text-foreground/80"
              >
                Estimated Budget (Optional)
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-muted/60 border border-surface-border text-sm text-foreground focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors"
              >
                <option value="">Select budget range...</option>
                <option value="Under ₹15,000">Under ₹15,000 (Small Landing / Fixes)</option>
                <option value="₹15,000 - ₹35,000">₹15,000 — ₹35,000 (Standard Website)</option>
                <option value="₹35,000 - ₹75,000">₹35,000 — ₹75,000 (Custom Web App / Portal)</option>
                <option value="₹75,000+">₹75,000+ (Comprehensive Platform)</option>
                <option value="Flexible / To Discuss">Flexible / To Discuss</option>
              </select>
            </div>
          </div>

          {/* Project Description */}
          <div className="space-y-1.5 text-left">
            <label
              htmlFor="message"
              className="block text-xs font-mono font-medium text-foreground/80"
            >
              Project Overview &amp; Requirements <span className="text-cyan-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, target audience, specific features, or timeline..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-muted/60 border border-surface-border text-sm text-foreground placeholder:text-foreground/35 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-colors resize-y"
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Brief...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Project Enquiry</span>
                </>
              )}
            </button>

            <span className="text-[11px] font-mono text-foreground/50 text-center sm:text-right">
              Powered by secure FormSubmit • Zero spam guaranteed
            </span>
          </div>
        </form>
      )}
    </div>
  );
}
