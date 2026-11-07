"use client";

import React, { useState } from "react";
import { Download, FileText, CheckCircle2, AlertCircle, X, ExternalLink } from "lucide-react";
import { personalData } from "@/data/personal";

interface ResumeButtonProps {
  variant?: "primary" | "secondary" | "outline" | "nav";
  className?: string;
}

export function ResumeDownloadButton({
  variant = "outline",
  className = "",
}: ResumeButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    // If it's a placeholder, open modal explaining where to place actual PDF
    if (personalData.resume.isPlaceholder) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const buttonClasses = {
    primary:
      "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-emerald-500 text-slate-950 hover:bg-emerald-400 font-semibold shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5",
    secondary:
      "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm bg-surface-muted border border-surface-border text-foreground hover:border-emerald-500/40 hover:text-emerald-400 transition-all duration-200",
    outline:
      "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-sm font-medium border border-surface-border text-foreground/90 hover:text-emerald-400 hover:border-emerald-500/50 bg-surface/50 backdrop-blur-sm transition-all duration-200",
    nav:
      "inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 transition-colors",
  };

  return (
    <>
      <a
        href={personalData.resume.path}
        download={personalData.resume.filename}
        onClick={handleClick}
        className={`${buttonClasses[variant]} ${className}`}
        aria-label="Download Resume PDF"
      >
        <Download className="w-4 h-4" />
        <span>Download Resume</span>
      </a>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md p-6 rounded-2xl bg-surface border border-surface-border shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-foreground/50 hover:text-foreground hover:bg-surface-muted transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-base">
                  Resume Specification
                </h3>
                <p className="text-xs text-foreground/60 font-mono">
                  {personalData.resume.filename}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-foreground/80 leading-relaxed mb-6">
              <div className="p-3 rounded-xl bg-surface-muted border border-surface-border">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">
                      Verified Placeholder Notice
                    </p>
                    <p className="text-xs text-foreground/70 mt-1">
                      As requested, no artificial or fake resume content has been generated. To make this button deliver your actual resume:
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-xs text-foreground/60">Expected File Path:</span>
                <div className="p-2.5 rounded-lg bg-surface-muted border border-surface-border font-mono text-xs text-emerald-400 break-all select-all">
                  public/documents/Sharat-S-Unnithan-Resume.pdf
                </div>
              </div>

              <p className="text-xs text-foreground/60">
                Once placed, set <code className="text-emerald-400 font-mono">isPlaceholder: false</code> in <code className="text-foreground font-mono">src/data/personal.ts</code> to enable direct one-click PDF downloading.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs bg-emerald-500 text-slate-950 font-semibold hover:bg-emerald-400 transition-colors"
              >
                <span>Request Resume on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium border border-surface-border text-foreground hover:bg-surface-muted transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
