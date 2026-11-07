"use client";

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
  ArrowUpRight,
} from "lucide-react";
import { personalData } from "@/data/personal";

export function AboutSection() {
  const coreInterests = [
    { title: "Software Development", desc: "Building practical, structured applications with maintainable architecture.", icon: Code2 },
    { title: "Python & Django", desc: "Backend logic, robust ORM schemas, and automated business workflows.", icon: Workflow },
    { title: "Database Systems", desc: "ACID-compliant design, relational schemas, MySQL, and SQLite integration.", icon: Database },
    { title: "Machine Learning Fundamentals", desc: "Predictive algorithms, linear regression, and anomaly detection models.", icon: Brain },
  ];

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
              <span>01 // Professional Narrative</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              About Me &amp; Philosophy
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground/60 font-mono max-w-sm">
            Grounded in computer science theory, focused on reliable real-world software execution.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-foreground/80 leading-relaxed">
            {personalData.extendedBio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}

            {/* Credibility highlights */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-4 rounded-xl bg-surface border border-surface-border space-y-1">
                <span className="text-xs font-mono text-emerald-400 block font-semibold">
                  Foundation
                </span>
                <h4 className="font-semibold text-foreground text-sm">
                  BCA Graduate (2023–2026)
                </h4>
                <p className="text-xs text-foreground/60">
                  College of Applied Science (IHRD), Mavelikkara • University of Kerala
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-surface-border space-y-1">
                <span className="text-xs font-mono text-emerald-400 block font-semibold">
                  Postgraduate Journey
                </span>
                <h4 className="font-semibold text-foreground text-sm">
                  MCA Student (July 2026)
                </h4>
                <p className="text-xs text-foreground/60">
                  Indira Gandhi National Open University (IGNOU)
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Key Focus Areas */}
          <div className="lg:col-span-5 space-y-3.5">
            <span className="font-mono text-xs uppercase tracking-wider text-foreground/50 block mb-2">
              Core Technical Interests
            </span>

            {coreInterests.map((interest, idx) => {
              const Icon = interest.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-surface border border-surface-border hover:border-emerald-500/30 transition-all duration-200 group flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-surface-muted text-emerald-400 group-hover:scale-105 transition-transform mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-sm group-hover:text-emerald-400 transition-colors">
                      {interest.title}
                    </h4>
                    <p className="text-xs text-foreground/65 mt-0.5 leading-relaxed">
                      {interest.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Quick Freelance Teaser */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-surface to-surface-muted border border-emerald-500/25 mt-6">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  Freelance Availability
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              </div>
              <p className="text-xs text-foreground/80 leading-relaxed mb-3">
                Need a modern website, custom web application, or business workflow system?
              </p>
              <Link
                href="/#services"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>View Freelance Offerings</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

