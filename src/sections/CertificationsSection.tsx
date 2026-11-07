"use client";

import React, { useState } from "react";
import { Award, CheckCircle2, ExternalLink, ShieldCheck, Sparkles, AlertCircle } from "lucide-react";
import { certificationsData } from "@/data/certifications";
import { CertificationItem } from "@/types";

export function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

  const issuerBadges: Record<string, { bg: string; text: string }> = {
    Google: { bg: "bg-blue-500/10 border-blue-500/25", text: "text-blue-400" },
    IBM: { bg: "bg-indigo-500/10 border-indigo-500/25", text: "text-indigo-400" },
    Microsoft: { bg: "bg-teal-500/10 border-teal-500/25", text: "text-teal-400" },
  };

  return (
    <section id="certifications" className="py-20 sm:py-28 border-t border-surface-border relative bg-surface-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>06 // Credentials &amp; Verification</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              Professional Certifications
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground/60 font-mono max-w-sm">
            Curriculum credentials across core programming, software architecture, and system security.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {certificationsData.map((cert) => {
            const issuerStyle = issuerBadges[cert.issuer] || {
              bg: "bg-emerald-500/10 border-emerald-500/20",
              text: "text-emerald-400",
            };

            return (
              <div
                key={cert.id}
                className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-7 hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-mono border font-semibold ${issuerStyle.bg} ${issuerStyle.text}`}
                    >
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-mono text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="font-sans font-bold text-lg text-foreground tracking-tight group-hover:text-emerald-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-mono text-foreground/50 mt-1">
                      Issuer: {cert.issuer} • {cert.issueDate}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                    {cert.summary}
                  </p>

                  {/* Skills Acquired */}
                  <div className="space-y-2 pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-foreground/50 block">
                      Competencies Covered
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.skillsAcquired.map((skill, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-surface-muted border border-surface-border text-foreground/75"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-surface-border/60 flex items-center justify-between">
                  {cert.verificationUrl ? (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs font-mono text-foreground/50">
                      Certificate record verified
                    </span>
                  )}

                  {cert.credentialId && (
                    <span className="text-[10px] font-mono text-foreground/40">
                      ID: {cert.credentialId}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

