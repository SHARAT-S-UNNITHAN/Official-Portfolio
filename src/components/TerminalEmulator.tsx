"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, CornerDownLeft } from "lucide-react";
import { personalData } from "@/data/personal";
import { projectsData } from "@/data/projects";

interface OutputLine {
  id: string;
  type: "command" | "output" | "error" | "system";
  text: string;
  links?: { label: string; href: string }[];
}

export function TerminalEmulator() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [lines, setLines] = useState<OutputLine[]>([
    {
      id: "init-1",
      type: "system",
      text: "⚡ SHARAT S UNNITHAN [Developer Console v2.4 - Ready]",
    },
    {
      id: "init-2",
      type: "system",
      text: 'Type "help" to inspect commands or click suggestions below.',
    },
  ]);

  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim();
    if (!trimmed) return;

    const cmdLower = trimmed.toLowerCase();
    const newLines: OutputLine[] = [
      ...lines,
      { id: `cmd-${Date.now()}`, type: "command", text: trimmed },
    ];

    setHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    switch (cmdLower) {
      case "help":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          text: `Available Commands:
  • whoami     - Developer profile & academic background
  • skills     - Python, Django, database & web competencies
  • projects   - Key software architectures & applications
  • services   - Freelance digital solutions & capabilities
  • contact    - Direct communication channels (WhatsApp/Email)
  • hire       - Instant project enquiry pipeline
  • clear      - Clear terminal screen`,
        });
        break;

      case "whoami":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          text: `SHARAT S UNNITHAN
Role: Software Developer | Independent Freelancer | Tech Enthusiast
Location: Kayamkulam, Kerala, India
Education: 
  - BCA (Completed, 2023-2026) - College of Applied Science (IHRD) Mavelikkara
  - MCA (Currently pursuing, July 2026) - IGNOU
Philosophy: Practical software solutions, resilient data schemas, modern digital UX.`,
        });
        break;

      case "skills":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          text: `[ENGINEERING MATRIX]
  • Backend: Python (Working Knowledge), Django (Working Knowledge), PHP (Familiar)
  • Frontend: JavaScript ES6+, HTML5, CSS3, Tailwind CSS, React (Learning)
  • Databases: MySQL, SQLite, Relational Schema Normalization
  • Tools: Git, GitHub, Visual Studio Code, Figma
  • Concepts: Machine Learning Fundamentals, Linear Regression, SDLC, REST Principles`,
        });
        break;

      case "projects":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          text: `PROJECT SHOWCASE:
  1. EXPENSE_SHA (Django ML Expense Forecasting & Anomaly Tracking)
  2. Intelligent Academic Ecosystem (Geofenced Attendance Concept)
  3. Smart Local Service Provider Platform (Marketplace Engine)
  4. Aether OS (Developer Productivity & AI Code Review Concept)
  5. Client Business Systems (Camera Repair & Gold-Loan Ledgers)`,
          links: projectsData.map((p) => ({
            label: `View ${p.title.split("—")[0].trim()}`,
            href: `/projects/${p.slug}`,
          })),
        });
        break;

      case "services":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          text: `INDEPENDENT DIGITAL SOLUTIONS & FREELANCE:
  1. Website Development (Business sites, Portfolios, Landing pages)
  2. Web Application Development (Custom platforms, Admin dashboards)
  3. Python & Django Systems (Backend, CRUD, Relational DBs)
  4. Business Digital Solutions (Workflows, Registers to digital tools)
  5. Website Maintenance (Performance optimization, Bug fixes, UI updates)`,
          links: [{ label: "Explore Services & Scope Estimator", href: "/services" }],
        });
        break;

      case "contact":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          text: `DIRECT CHANNELS:
  • Email: ${personalData.email}
  • WhatsApp: ${personalData.phone}
  • GitHub: ${personalData.githubUrl}
  • LinkedIn: ${personalData.linkedinUrl}`,
          links: [
            { label: "WhatsApp Chat", href: personalData.whatsappUrl },
            { label: "Send Email", href: `mailto:${personalData.email}` },
          ],
        });
        break;

      case "hire":
        newLines.push({
          id: `out-${Date.now()}`,
          type: "output",
          text: `Have an idea? Let's build something useful.
Forwarding you to the project enquiry interface...`,
          links: [{ label: "Open Project Enquiry Form", href: "/contact" }],
        });
        break;

      case "clear":
        setLines([]);
        setInput("");
        return;

      default:
        newLines.push({
          id: `err-${Date.now()}`,
          type: "error",
          text: `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`,
        });
        break;
    }

    setLines(newLines);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = historyIndex + 1 < history.length ? historyIndex + 1 : historyIndex;
        setHistoryIndex(nextIdx);
        setInput(history[history.length - 1 - nextIdx]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInput(history[history.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput("");
      }
    }
  };

  return (
    <div className="w-full rounded-2xl glass-panel border border-surface-border shadow-2xl overflow-hidden font-mono text-xs text-left">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-surface-border bg-foreground/[0.03]">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-subtle-foreground" />
          <div className="w-2.5 h-2.5 rounded-full bg-subtle-foreground" />
          <div className="w-2.5 h-2.5 rounded-full bg-subtle-foreground" />
          <span className="ml-2 text-[11px] text-muted-foreground flex items-center gap-1.5 font-medium">
            <TerminalIcon className="w-3.5 h-3.5 text-foreground/80" />
            <span>sharat@system:~ (zsh)</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-subtle-foreground">
          <span>interactive cli</span>
        </div>
      </div>

      {/* Terminal Log Canvas */}
      <div
        className="p-4 sm:p-5 h-72 sm:h-80 overflow-y-auto space-y-2.5 bg-surface-muted"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line) => (
          <div key={line.id} className="space-y-1">
            {line.type === "command" && (
              <div className="flex items-center gap-2 text-foreground font-medium">
                <span className="text-subtle-foreground">❯</span>
                <span>{line.text}</span>
              </div>
            )}
            {line.type === "system" && (
              <div className="text-muted-foreground text-[11px] leading-relaxed">
                {line.text}
              </div>
            )}
            {line.type === "output" && (
              <pre className="text-foreground/80 whitespace-pre-wrap leading-relaxed text-[11px] sm:text-xs">
                {line.text}
              </pre>
            )}
            {line.type === "error" && (
              <div className="text-danger text-[11px]">{line.text}</div>
            )}
            {line.links && (
              <div className="flex flex-wrap gap-2 pt-1">
                {line.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-foreground/5 border border-surface-border text-foreground hover:bg-foreground/10 text-[10px] transition-colors"
                  >
                    <span>{link.label}</span>
                    <span>→</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Prompt */}
      <div className="p-3 border-t border-surface-border bg-foreground/[0.03] flex items-center gap-2">
        <span className="text-foreground font-bold">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command ('help', 'projects', 'skills', 'hire')..."
          className="w-full bg-transparent text-foreground placeholder:text-subtle-foreground focus:outline-none text-xs"
        />
        <button
          onClick={() => handleCommand(input)}
          className="p-1 rounded text-subtle-foreground hover:text-foreground transition-colors"
          title="Execute"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Quick Suggestion Pills */}
      <div className="px-3 py-2 border-t border-surface-border/60 bg-foreground/[0.02] flex flex-wrap items-center gap-1.5 text-[10px]">
        <span className="text-subtle-foreground mr-1">Quick Run:</span>
        {["help", "whoami", "skills", "projects", "services", "contact", "clear"].map(
          (cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded border border-surface-border hover:border-accent/40 hover:text-foreground text-muted-foreground transition-colors"
            >
              {cmd}
            </button>
          )
        )}
      </div>
    </div>
  );
}
