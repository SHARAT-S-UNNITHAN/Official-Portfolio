"use client";

import React, { useState } from "react";
import { Download, FileText, AlertCircle, X, ExternalLink } from "lucide-react";
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
    if (personalData.resume.isPlaceholder) {
      e.preventDefault();
      setIsOpen(true);
    }
  };

  const buttonClasses = {
    primary:
      "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-white text-black hover:bg-zinc-200 shadow-sm transition-all duration-200 hover:-translate-y-0.5",
    secondary:
      "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm glass-panel border border-white/10 text-white hover:border-white/20 transition-all duration-200",
    outline:
      "inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium border border-white/10 text-zinc-300 hover:text-white hover:border-white/25 glass-panel transition-all duration-200",
    nav:
      "inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium border border-white/15 text-white hover:bg-white/10 transition-colors",
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in text-left">
          <div className="relative w-full max-w-md p-6 rounded-3xl glass-panel border border-white/15 shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-base">
                  Resume Specification
                </h3>
                <p className="text-xs text-zinc-400 font-mono">
                  {personalData.resume.filename}
                </p>
              </div>
            </div>

            <div className="space-y-3 text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
              <div className="p-3 rounded-2xl bg-white/[0.03] border border-white/10">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-zinc-400 mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-white">
                      Verified Placeholder Notice
                    </p>
                    <p className="text-xs text-zinc-400 mt-1">
                      As requested, no artificial or fake resume content has been generated. To make this button deliver your actual resume:
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <span className="font-mono text-xs text-zinc-500">Expected File Path:</span>
                <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 font-mono text-xs text-white break-all select-all">
                  public/documents/Sharat-S-Unnithan-Resume.pdf
                </div>
              </div>

              <p className="text-xs text-zinc-400">
                Once placed, set <code className="text-white font-mono">isPlaceholder: false</code> in <code className="text-zinc-300 font-mono">src/data/personal.ts</code> to enable direct one-click PDF downloading.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs bg-white text-black hover:bg-zinc-200 transition-colors shadow-sm"
              >
                <span>Request on WhatsApp</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-medium border border-white/10 text-zinc-300 hover:text-white glass-panel transition-colors"
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
