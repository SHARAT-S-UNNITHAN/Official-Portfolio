import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  Code2,
  Database,
  Brain,
  Workflow,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock,
  Terminal,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { ProfilePlaceholder } from "@/components/ProfilePlaceholder";
import { ResumeDownloadButton } from "@/components/ResumeModal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `About Me — ${personalData.name}`,
  description:
    "Professional narrative, academic background in computer applications, and software engineering philosophy of Sharat S Unnithan.",
};

export default function AboutPage() {
  const technicalPillars = [
    {
      title: "Backend & Systems Logic",
      desc: "Architecting modular, maintainable server-side logic in Python and Django with strict separation of concerns.",
      icon: Code2,
    },
    {
      title: "Relational Database Design",
      desc: "ACID-compliant schema design, normalization, foreign key constraints, and performance queries in MySQL and SQLite.",
      icon: Database,
    },
    {
      title: "Machine Learning Fundamentals",
      desc: "Supervised predictive regression and anomaly detection applied to practical domains like personal finance.",
      icon: Brain,
    },
    {
      title: "Clean Frontend Standards",
      desc: "Accessible HTML5 markup, responsive Tailwind CSS layouts, and modern Next.js/React component state.",
      icon: Workflow,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 relative text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <span>01 // Developer Identity</span>
          </div>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-foreground tracking-tight">
            About Sharat S Unnithan
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-3xl">
            Software developer, independent freelancer, and technology enthusiast based in Kayamkulam, Kerala, India.
          </p>
        </div>

        {/* Hero Bio Frame */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center rounded-3xl glass-panel border border-surface-border p-6 sm:p-10 shadow-xl">
          <div className="md:col-span-5 flex justify-center">
            <ProfilePlaceholder size="lg" showBadge={false} />
          </div>
          <div className="md:col-span-7 space-y-4">
            <h2 className="font-sans font-bold text-2xl text-foreground tracking-tight">
              A Practical Approach to Modern Software
            </h2>
            <div className="space-y-3 text-sm text-foreground/80 leading-relaxed">
              <p>
                My foundation lies in computer applications. I completed my Bachelor of Computer Applications (BCA) from <strong>College of Applied Science (IHRD), Mavelikkara (University of Kerala)</strong> between 2023 and 2026.
              </p>
              <p>
                To continuously deepen my theoretical and systems engineering knowledge, I am currently pursuing my <strong>Master of Computer Applications (MCA) at IGNOU</strong> (July 2026 cycle).
              </p>
              <p>
                I believe software should not simply look good in visual mockups — it must handle edge cases, store data reliably, load with high speed, and resolve concrete real-world problems for users and businesses.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-3">
              <ResumeDownloadButton variant="primary" />
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold glass-panel border border-surface-border text-foreground hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
              >
                <span>Initiate Contact</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Philosophy & Approach */}
        <div className="space-y-6">
          <div className="border-b border-surface-border pb-3">
            <h3 className="font-sans font-bold text-2xl text-foreground tracking-tight">
              Engineering Philosophy
            </h3>
            <span className="text-xs font-mono text-cyan-400">
              Core Principles Guiding Every Build
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {technicalPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl glass-panel border border-surface-border hover:border-cyan-500/30 transition-all duration-200 group flex items-start gap-3.5"
                >
                  <div className="p-2.5 rounded-xl bg-surface-muted text-cyan-400 group-hover:scale-105 transition-transform shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-sans font-semibold text-base text-foreground group-hover:text-cyan-400 transition-colors">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-foreground/70 leading-relaxed mt-1">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Academic Journey Detail */}
        <div className="space-y-6">
          <div className="border-b border-surface-border pb-3">
            <h3 className="font-sans font-bold text-2xl text-foreground tracking-tight">
              Academic Roadmap
            </h3>
            <span className="text-xs font-mono text-cyan-400">
              Rigorous University Qualifications
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl glass-panel border border-surface-border space-y-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                Completed (2023–2026)
              </span>
              <h4 className="font-sans font-bold text-lg text-foreground">
                Bachelor of Computer Applications (BCA)
              </h4>
              <p className="text-xs text-foreground/75 font-semibold">
                College of Applied Science (IHRD), Mavelikkara • University of Kerala
              </p>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Comprehensive 3-year undergraduate curriculum covering relational database structures, algorithms, procedural &amp; object-oriented programming, operating systems, and web technologies.
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-surface-border space-y-3">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                Currently Pursuing (July 2026 Cycle)
              </span>
              <h4 className="font-sans font-bold text-lg text-foreground">
                Master of Computer Applications (MCA)
              </h4>
              <p className="text-xs text-foreground/75 font-semibold">
                Indira Gandhi National Open University (IGNOU)
              </p>
              <p className="text-xs text-foreground/70 leading-relaxed">
                Postgraduate degree extending into advanced systems engineering, software architecture analysis, data modeling, and intelligent computing paradigms.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-8 rounded-3xl glass-panel border border-surface-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="font-sans font-bold text-xl text-foreground">
              Interested in collaborating or discussing an opportunity?
            </h4>
            <p className="text-xs sm:text-sm text-foreground/70 mt-1">
              Explore my technical projects or reach out directly for freelance contracts.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/projects"
              className="px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 transition-colors"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl text-xs font-medium glass-panel border border-surface-border text-foreground hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
