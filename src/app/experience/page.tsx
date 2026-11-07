import React from "react";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { educationData } from "@/data/education";
import { experienceData } from "@/data/experience";
import { certificationsData } from "@/data/certifications";
import { ResumeDownloadButton } from "@/components/ResumeModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Experience & Education — ${personalData.name}`,
  description:
    "Professional work history, business management experience with Supportta Solutions, BCA/MCA university education, and verified software engineering certifications of Sharat S Unnithan.",
};

export default function ExperiencePage() {
  return (
    <div className="min-h-screen pt-28 pb-20 relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-zinc-300 border border-white/10">
              <Award className="w-3.5 h-3.5 text-zinc-400" />
              <span>04 // Career &amp; Academic Timeline</span>
            </div>
            <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
              Experience, Education &amp; Credentials
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
              Verified commercial background, university computer science qualifications, and industry curriculum certifications.
            </p>
          </div>

          <div className="shrink-0">
            <ResumeDownloadButton variant="primary" />
          </div>
        </div>

        {/* Dual Track: Experience & Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Track 1: Professional Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
              <div className="p-2 rounded-xl bg-white/[0.04] text-white">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-sans font-bold text-xl text-white">
                  Professional Experience
                </h2>
                <span className="text-xs font-mono text-zinc-400">
                  Business Management &amp; Independent Practice
                </span>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
              {experienceData.map((exp) => (
                <div key={exp.id} className="relative pl-9 space-y-2 group">
                  <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white/40 bg-background group-hover:border-white transition-colors" />

                  <div className="p-6 rounded-2xl glass-panel border border-white/10 group-hover:border-white/20 transition-all duration-200 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/10">
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        {exp.location}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-sans font-bold text-lg text-white">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-zinc-300">
                        {exp.company}
                      </p>
                    </div>

                    {/* Business Areas */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.businessAreas.map((area) => (
                        <span
                          key={area}
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] text-zinc-400 border border-white/10"
                        >
                          {area}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {exp.verifiedResponsibilities.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Track 2: Formal Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2.5 pb-3 border-b border-white/10">
              <div className="p-2 rounded-xl bg-white/[0.04] text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h2 className="font-sans font-bold text-xl text-white">
                  Academic Timeline
                </h2>
                <span className="text-xs font-mono text-zinc-400">
                  University Computer Science Degrees
                </span>
              </div>
            </div>

            <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-white/10">
              {educationData.map((edu) => (
                <div key={edu.id} className="relative pl-9 space-y-2 group">
                  <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white/40 bg-background group-hover:border-white transition-colors" />

                  <div className="p-6 rounded-2xl glass-panel border border-white/10 group-hover:border-white/20 transition-all duration-200 space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-white/5 text-zinc-300 border border-white/10">
                        {edu.status}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        {edu.period}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-sans font-bold text-lg text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-sm font-semibold text-zinc-300">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-xs text-zinc-500 font-mono">
                          {edu.university}
                        </p>
                      )}
                    </div>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      {edu.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      {edu.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300 leading-snug">
                          <CheckCircle2 className="w-3.5 h-3.5 text-zinc-400 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Vault */}
        <div className="space-y-6">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <div>
              <h2 className="font-sans font-bold text-2xl text-white">
                Verified Certifications Vault
              </h2>
              <span className="text-xs font-mono text-zinc-400">
                Industry Curriculum Endorsements
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
              <ShieldCheck className="w-4 h-4 text-zinc-300" />
              <span>Verified Records</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-white/20 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-white/5 text-zinc-300 border border-white/10">
                      {cert.issuer}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-500">
                      {cert.issueDate}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-base text-white group-hover:text-zinc-200 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {cert.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skillsAcquired.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.03] text-zinc-400 border border-white/10"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1 text-zinc-300">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                  <span>{cert.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
