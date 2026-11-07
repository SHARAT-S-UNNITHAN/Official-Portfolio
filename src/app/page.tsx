"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Sparkles,
  Terminal,
  Cpu,
  Database,
  Layers,
  GraduationCap,
  Briefcase,
  Code2,
  CheckCircle2,
  Compass,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { projectsData } from "@/data/projects";
import { servicesData } from "@/data/services";
import { ProfilePlaceholder } from "@/components/ProfilePlaceholder";
import { ResumeDownloadButton } from "@/components/ResumeModal";
import { LiveClock } from "@/components/LiveClock";
import { TerminalEmulator } from "@/components/TerminalEmulator";
import { PersonaSwitcher, PersonaProvider, usePersona } from "@/components/PersonaToggle";

function HomeContent() {
  const { mode } = usePersona();
  const featuredProject = projectsData[0]; // EXPENSE_SHA

  return (
    <div className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      {/* Background Aurora Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] aurora-glow pointer-events-none" />
      <div className="absolute inset-0 cyber-grid opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 sm:pt-8">
          {/* Left Column: Headline & Positioning */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Live Status & Persona Switcher */}
            <div className="flex flex-wrap items-center gap-3">
              <LiveClock />
              <PersonaSwitcher />
            </div>

            {/* Role & Name */}
            <div className="space-y-3">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-cyan-400 uppercase block">
                {mode === "developer"
                  ? "Software Developer & Systems Thinker"
                  : "Independent Freelance Solutions & Development"}
              </span>

              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.08]">
                {mode === "developer" ? (
                  <>
                    Engineering practical software that{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400">
                      solves real problems.
                    </span>
                  </>
                ) : (
                  <>
                    Turning ideas into reliable{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                      custom digital solutions.
                    </span>
                  </>
                )}
              </h1>
            </div>

            {/* Supporting Intro */}
            <p className="text-base sm:text-lg text-foreground/75 max-w-2xl leading-relaxed">
              {mode === "developer"
                ? "I'm Sharat S Unnithan — a software developer grounded in computer applications (BCA from University of Kerala, MCA pursuing at IGNOU). I specialize in robust Python & Django backends, predictive algorithms, and resilient database architectures."
                : "Offering direct, independent freelance engineering for businesses and individuals — modern responsive websites, tailored web applications, database-driven workflows, and long-term technical maintenance."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={mode === "developer" ? "/projects" : "/services"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{mode === "developer" ? "Explore All Projects" : "View Freelance Services"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold glass-panel border border-surface-border text-foreground hover:border-cyan-500/40 hover:text-cyan-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <ResumeDownloadButton variant="outline" className="py-3 px-4" />
            </div>

            {/* Direct Channel Badges */}
            <div className="pt-4 border-t border-surface-border/60 flex flex-wrap items-center gap-4 text-xs font-mono text-foreground/70">
              <span className="text-foreground/40 uppercase">Verified Channels:</span>
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-cyan-400" />
                <span>GitHub</span>
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Frame & Telemetry */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <ProfilePlaceholder size="hero" showBadge={true} />

            {/* Live Status Pill */}
            <div className="w-full max-w-sm rounded-2xl glass-panel p-4 border border-surface-border text-left space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-foreground/60 border-b border-surface-border/60 pb-2">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>Verified Identity Status</span>
                </span>
                <span className="text-emerald-400">● Active</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded-lg bg-surface-muted/50 border border-surface-border">
                  <span className="text-[10px] text-foreground/50 block">Primary Stack</span>
                  <span className="font-semibold text-foreground">Python &amp; Django</span>
                </div>
                <div className="p-2 rounded-lg bg-surface-muted/50 border border-surface-border">
                  <span className="text-[10px] text-foreground/50 block">Frontend</span>
                  <span className="font-semibold text-foreground">Next.js &amp; Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HIGH-TECH INTERACTIVE TERMINAL EMULATOR */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-left">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>Developer Interactive Console</span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                Inspect Codebase &amp; Profile via CLI
              </h2>
            </div>
            <span className="text-xs font-mono text-foreground/50">
              Try: &quot;whoami&quot;, &quot;skills&quot;, &quot;projects&quot;, &quot;hire&quot;
            </span>
          </div>

          <TerminalEmulator />
        </div>

        {/* BENTO GRID: SPOTLIGHT & CAPABILITIES */}
        <div className="space-y-6 text-left">
          <div className="flex items-center justify-between">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              Systems &amp; Architecture Spotlight
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>View All 5 Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1: Featured Project (EXPENSE_SHA) */}
            <div className="md:col-span-2 rounded-3xl glass-panel border border-surface-border p-6 sm:p-8 flex flex-col justify-between group hover:border-cyan-500/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    Featured Machine Learning System
                  </span>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Completed &amp; Functional</span>
                  </span>
                </div>

                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-foreground group-hover:text-cyan-400 transition-colors">
                  {featuredProject.title}
                </h3>

                <p className="text-sm text-foreground/75 leading-relaxed">
                  {featuredProject.tagline}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-muted border border-surface-border text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-surface-border/60 flex items-center justify-between">
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Explore Architectural Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl glass-panel border border-surface-border text-foreground/60 hover:text-foreground hover:border-cyan-500/40 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Bento Card 2: Academic & Foundations */}
            <div className="rounded-3xl glass-panel border border-surface-border p-6 sm:p-7 flex flex-col justify-between hover:border-indigo-500/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <h3 className="font-sans font-bold text-xl text-foreground">
                  Academic Foundation
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-surface-muted/60 border border-surface-border">
                    <span className="font-semibold text-foreground block">
                      BCA Completed (2023–2026)
                    </span>
                    <span className="text-foreground/60 leading-snug block mt-0.5">
                      College of Applied Science (IHRD), Mavelikkara • University of Kerala
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-surface-muted/60 border border-surface-border">
                    <span className="font-semibold text-foreground block">
                      MCA Student (July 2026)
                    </span>
                    <span className="text-foreground/60 leading-snug block mt-0.5">
                      Indira Gandhi National Open University (IGNOU)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-border/60">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  <span>View Credentials &amp; Certs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento Card 3: Freelance Offerings */}
            <div className="rounded-3xl glass-panel border border-surface-border p-6 sm:p-7 flex flex-col justify-between hover:border-purple-500/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Briefcase className="w-6 h-6" />
                </div>

                <h3 className="font-sans font-bold text-xl text-foreground">
                  Freelance Solutions
                </h3>

                <p className="text-xs text-foreground/75 leading-relaxed">
                  Independent web design, custom Python &amp; Django web applications, and business workflow systems under my own name.
                </p>

                <ul className="space-y-1.5 text-xs text-foreground/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Website &amp; Web App Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Database-Driven Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Digitizing Business Registers</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-surface-border/60">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Scope Estimator &amp; Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento Card 4: Technical Skills Radar */}
            <div className="md:col-span-2 rounded-3xl glass-panel border border-surface-border p-6 sm:p-8 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans font-bold text-xl text-foreground">
                    Core Technical Competencies
                  </h3>
                  <span className="text-xs font-mono text-cyan-400">Verified Proficiencies</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-surface-muted/50 border border-surface-border">
                    <span className="text-[10px] font-mono text-foreground/50 block">Backend</span>
                    <span className="font-semibold text-sm text-foreground block">Python</span>
                    <span className="font-semibold text-sm text-cyan-400 block">Django</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-muted/50 border border-surface-border">
                    <span className="text-[10px] font-mono text-foreground/50 block">Frontend</span>
                    <span className="font-semibold text-sm text-foreground block">JavaScript</span>
                    <span className="font-semibold text-sm text-cyan-400 block">React &amp; Tailwind</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-muted/50 border border-surface-border">
                    <span className="text-[10px] font-mono text-foreground/50 block">Databases</span>
                    <span className="font-semibold text-sm text-foreground block">MySQL</span>
                    <span className="font-semibold text-sm text-cyan-400 block">SQLite</span>
                  </div>
                  <div className="p-3 rounded-xl bg-surface-muted/50 border border-surface-border">
                    <span className="text-[10px] font-mono text-foreground/50 block">Tooling</span>
                    <span className="font-semibold text-sm text-foreground block">Git / GitHub</span>
                    <span className="font-semibold text-sm text-cyan-400 block">VS Code / Figma</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-surface-border/60 flex items-center justify-between">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>Read Full Philosophy &amp; Tooling</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-mono text-foreground/60 hover:text-foreground transition-colors"
                >
                  Enquire for Hire ❯
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM GATEWAY TO MULTI-PAGE ARCHITECTURE */}
        <div className="rounded-3xl glass-panel border border-surface-border p-8 sm:p-12 text-center relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Deep-Dive Navigation
            </span>
            <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-foreground tracking-tight">
              Explore Sharat&apos;s Full Digital Platform
            </h3>
            <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
              Navigate between dedicated project archives, client freelance offerings, career milestones, or transmit an enquiry directly.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/about"
                className="px-4 py-2 rounded-xl text-xs font-mono glass-panel border border-surface-border hover:border-cyan-500/40 text-foreground hover:text-cyan-400 transition-colors"
              >
                /about
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 rounded-xl text-xs font-mono glass-panel border border-surface-border hover:border-cyan-500/40 text-foreground hover:text-cyan-400 transition-colors"
              >
                /projects
              </Link>
              <Link
                href="/services"
                className="px-4 py-2 rounded-xl text-xs font-mono glass-panel border border-surface-border hover:border-cyan-500/40 text-foreground hover:text-cyan-400 transition-colors"
              >
                /services
              </Link>
              <Link
                href="/experience"
                className="px-4 py-2 rounded-xl text-xs font-mono glass-panel border border-surface-border hover:border-cyan-500/40 text-foreground hover:text-cyan-400 transition-colors"
              >
                /experience
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-xl text-xs font-mono bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 transition-colors shadow-md shadow-cyan-500/20"
              >
                /contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <PersonaProvider>
      <HomeContent />
    </PersonaProvider>
  );
}
