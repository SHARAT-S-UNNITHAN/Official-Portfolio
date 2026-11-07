"use client";

import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Sparkles, CornerDownLeft, Maximize2, Minimize2 } from "lucide-react";
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
      text: "⚡ SHARAT S UNNITHAN [Aether Terminal v2.4 - Ready]",
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
  • whoami     - Display developer background & credentials
  • skills     - List backend, Python, Django & web proficiencies
  • projects   - Enumerate key software projects & architectures
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
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-surface-border bg-surface-muted/40">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-[11px] text-foreground/50 flex items-center gap-1.5 font-semibold">
            <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
            <span>sharat@core-aether:~ (zsh)</span>
          </span>
        </div>

        <div className="flex items-center gap-2 text-[10px] text-foreground/40">
          <span>interactive cli</span>
        </div>
      </div>

      {/* Terminal Log Canvas */}
      <div
        className="p-4 sm:p-5 h-72 sm:h-80 overflow-y-auto space-y-2.5 bg-black/40"
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line) => (
          <div key={line.id} className="space-y-1">
            {line.type === "command" && (
              <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                <span className="text-foreground/40">❯</span>
                <span>{line.text}</span>
              </div>
            )}
            {line.type === "system" && (
              <div className="text-foreground/50 text-[11px] leading-relaxed">
                {line.text}
              </div>
            )}
            {line.type === "output" && (
              <pre className="text-foreground/85 whitespace-pre-wrap leading-relaxed text-[11px] sm:text-xs">
                {line.text}
              </pre>
            )}
            {line.type === "error" && (
              <div className="text-rose-400 text-[11px]">{line.text}</div>
            )}
            {line.links && (
              <div className="flex flex-wrap gap-2 pt-1">
                {line.links.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/20 text-[10px] transition-colors"
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
      <div className="p-3 border-t border-surface-border bg-surface-muted/30 flex items-center gap-2">
        <span className="text-cyan-400 font-bold">❯</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command ('help', 'projects', 'skills', 'hire')..."
          className="w-full bg-transparent text-foreground placeholder:text-foreground/30 focus:outline-none text-xs"
        />
        <button
          onClick={() => handleCommand(input)}
          className="p-1 rounded text-foreground/40 hover:text-cyan-400 transition-colors"
          title="Execute"
        >
          <CornerDownLeft className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Quick Suggestion Pills */}
      <div className="px-3 py-2 border-t border-surface-border/40 bg-surface/50 flex flex-wrap items-center gap-1.5 text-[10px]">
        <span className="text-foreground/40 mr-1">Quick Run:</span>
        {["help", "whoami", "skills", "projects", "services", "contact", "clear"].map(
          (cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded border border-surface-border hover:border-cyan-500/40 hover:text-cyan-400 text-foreground/70 transition-colors"
            >
              {cmd}
            </button>
          )
        )}
      </div>
    </div>
  );
}
