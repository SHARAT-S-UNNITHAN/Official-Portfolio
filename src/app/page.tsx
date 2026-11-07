"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Terminal,
  Cpu,
  GraduationCap,
  Briefcase,
  CheckCircle2,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { projectsData } from "@/data/projects";
import { ProfilePlaceholder } from "@/components/ProfilePlaceholder";
import { ResumeDownloadButton } from "@/components/ResumeModal";
import { LiveClock } from "@/components/LiveClock";
import { TerminalEmulator } from "@/components/TerminalEmulator";
import { PersonaSwitcher, PersonaProvider, usePersona } from "@/components/PersonaToggle";

function HomeContent() {
  const { mode } = usePersona();
  const featuredProject = projectsData[0]; // EXPENSE_SHA

  return (
    <div className="relative min-h-screen pt-28 pb-20 overflow-hidden text-left">
      {/* Restrained Subtle Vignette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] aurora-glow pointer-events-none" />
      <div className="absolute inset-0 beast-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        {/* HERO SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-4 sm:pt-8">
          {/* Left Column: Headline & Positioning */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Status & Persona Switcher */}
            <div className="flex flex-wrap items-center gap-3">
              <LiveClock />
              <PersonaSwitcher />
            </div>

            {/* Role & Name */}
            <div className="space-y-3">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-muted-foreground uppercase block">
                {mode === "developer"
                  ? "Software Developer & Systems Thinker"
                  : "Independent Freelance Solutions & Development"}
              </span>

              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.08]">
                {mode === "developer" ? (
                  <>
                    Engineering practical software that{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60">
                      solves real problems.
                    </span>
                  </>
                ) : (
                  <>
                    Turning ideas into reliable{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-foreground/60">
                      custom digital solutions.
                    </span>
                  </>
                )}
              </h1>
            </div>

            {/* Supporting Intro */}
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              {mode === "developer"
                ? "I'm Sharat S Unnithan — a software developer grounded in computer applications (BCA from University of Kerala, MCA pursuing at IGNOU). I specialize in robust Python & Django backends, predictive algorithms, and resilient database architectures."
                : "Offering direct, independent freelance engineering for businesses and individuals — modern responsive websites, tailored web applications, database-driven workflows, and long-term technical maintenance."}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href={mode === "developer" ? "/projects" : "/services"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent-secondary shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>{mode === "developer" ? "Explore All Projects" : "View Freelance Services"}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold glass-panel border border-surface-border text-foreground hover:border-accent/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </Link>

              <ResumeDownloadButton variant="outline" className="py-3 px-4 border-surface-border text-foreground/80 hover:text-foreground" />
            </div>

            {/* Direct Channel Badges */}
            <div className="pt-4 border-t border-surface-border flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
              <span className="text-subtle-foreground uppercase">Verified Channels:</span>
              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-muted-foreground" />
                <span>GitHub</span>
              </a>
              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-muted-foreground" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-muted-foreground" />
                <span>WhatsApp</span>
              </a>
              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-1.5 hover:text-foreground transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Frame & Telemetry */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            <ProfilePlaceholder size="hero" showBadge={true} />

            {/* Live Status Pill */}
            <div className="w-full max-w-sm rounded-2xl glass-panel p-4 border border-surface-border text-left space-y-2.5">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground border-b border-surface-border pb-2">
                <span className="flex items-center gap-1.5 text-foreground/80">
                  <Cpu className="w-3.5 h-3.5 text-muted-foreground" />
                  <span>Verified Identity Status</span>
                </span>
                <span className="text-success font-medium">● Active</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                <div className="p-2 rounded-lg bg-foreground/[0.04] border border-surface-border/70">
                  <span className="text-[10px] text-subtle-foreground block">Primary Stack</span>
                  <span className="font-semibold text-foreground">Python &amp; Django</span>
                </div>
                <div className="p-2 rounded-lg bg-foreground/[0.04] border border-surface-border/70">
                  <span className="text-[10px] text-subtle-foreground block">Frontend</span>
                  <span className="font-semibold text-foreground">Next.js &amp; Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HIGH-TECH INTERACTIVE TERMINAL EMULATOR */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-foreground/5 text-foreground/80 border border-surface-border mb-2">
                <Terminal className="w-3.5 h-3.5 text-muted-foreground" />
                <span>Developer Interactive Console</span>
              </div>
              <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
                Inspect Codebase &amp; Profile via CLI
              </h2>
            </div>
            <span className="text-xs font-mono text-subtle-foreground">
              Try: &quot;whoami&quot;, &quot;skills&quot;, &quot;projects&quot;, &quot;hire&quot;
            </span>
          </div>

          <TerminalEmulator />
        </div>

        {/* BENTO GRID: SPOTLIGHT & CAPABILITIES */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              Systems &amp; Architecture Spotlight
            </h2>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-xs font-mono text-foreground/80 hover:text-foreground transition-colors"
            >
              <span>View All 5 Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Bento Card 1: Featured Project (EXPENSE_SHA) */}
            <div className="md:col-span-2 rounded-3xl glass-panel border border-surface-border p-6 sm:p-8 flex flex-col justify-between group hover:border-accent/25 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-foreground/5 text-foreground/80 border border-surface-border">
                    Featured Machine Learning System
                  </span>
                  <span className="text-xs font-mono text-success flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-success" />
                    <span>Completed &amp; Functional</span>
                  </span>
                </div>

                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-foreground group-hover:text-foreground transition-colors">
                  {featuredProject.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {featuredProject.tagline}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featuredProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-foreground/[0.05] border border-surface-border text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-surface-border flex items-center justify-between">
                <Link
                  href={`/projects/${featuredProject.slug}`}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-foreground hover:text-foreground/80 transition-colors"
                >
                  <span>Explore Architectural Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {featuredProject.githubUrl && (
                  <a
                    href={featuredProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl glass-panel border border-surface-border text-muted-foreground hover:text-foreground hover:border-accent/30 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>

            {/* Bento Card 2: Academic & Foundations */}
            <div className="rounded-3xl glass-panel border border-surface-border p-6 sm:p-7 flex flex-col justify-between hover:border-accent/25 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-foreground/[0.05] border border-surface-border flex items-center justify-center text-foreground">
                  <GraduationCap className="w-6 h-6" />
                </div>

                <h3 className="font-sans font-bold text-xl text-foreground">
                  Academic Foundation
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-foreground/[0.04] border border-surface-border/70">
                    <span className="font-semibold text-foreground block">
                      BCA Completed (2023–2026)
                    </span>
                    <span className="text-muted-foreground leading-snug block mt-0.5">
                      College of Applied Science (IHRD), Mavelikkara • University of Kerala
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-foreground/[0.04] border border-surface-border/70">
                    <span className="font-semibold text-foreground block">
                      MCA Student (July 2026)
                    </span>
                    <span className="text-muted-foreground leading-snug block mt-0.5">
                      Indira Gandhi National Open University (IGNOU)
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-surface-border">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-foreground transition-colors"
                >
                  <span>View Credentials &amp; Certs</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento Card 3: Freelance Offerings */}
            <div className="rounded-3xl glass-panel border border-surface-border p-6 sm:p-7 flex flex-col justify-between hover:border-accent/25 transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-foreground/[0.05] border border-surface-border flex items-center justify-center text-foreground">
                  <Briefcase className="w-6 h-6" />
                </div>

                <h3 className="font-sans font-bold text-xl text-foreground">
                  Freelance Solutions
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  Independent web design, custom Python &amp; Django web applications, and business workflow systems under my own name.
                </p>

                <ul className="space-y-1.5 text-xs text-foreground/80">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    <span>Website &amp; Web App Development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    <span>Database-Driven Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    <span>Digitizing Business Registers</span>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-surface-border">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground/80 hover:text-foreground transition-colors"
                >
                  <span>Scope Estimator &amp; Services</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Bento Card 4: Technical Skills Radar */}
            <div className="md:col-span-2 rounded-3xl glass-panel border border-surface-border p-6 sm:p-8 flex flex-col justify-between hover:border-accent/25 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans font-bold text-xl text-foreground">
                    Core Technical Competencies
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">Verified Proficiencies</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-foreground/[0.04] border border-surface-border/70">
                    <span className="text-[10px] font-mono text-subtle-foreground block">Backend</span>
                    <span className="font-semibold text-sm text-foreground block">Python</span>
                    <span className="font-semibold text-sm text-foreground/80 block">Django</span>
                  </div>
                  <div className="p-3 rounded-xl bg-foreground/[0.04] border border-surface-border/70">
                    <span className="text-[10px] font-mono text-subtle-foreground block">Frontend</span>
                    <span className="font-semibold text-sm text-foreground block">JavaScript</span>
                    <span className="font-semibold text-sm text-foreground/80 block">React &amp; Tailwind</span>
                  </div>
                  <div className="p-3 rounded-xl bg-foreground/[0.04] border border-surface-border/70">
                    <span className="text-[10px] font-mono text-subtle-foreground block">Databases</span>
                    <span className="font-semibold text-sm text-foreground block">MySQL</span>
                    <span className="font-semibold text-sm text-foreground/80 block">SQLite</span>
                  </div>
                  <div className="p-3 rounded-xl bg-foreground/[0.04] border border-surface-border/70">
                    <span className="text-[10px] font-mono text-subtle-foreground block">Tooling</span>
                    <span className="font-semibold text-sm text-foreground block">Git / GitHub</span>
                    <span className="font-semibold text-sm text-foreground/80 block">VS Code / Figma</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-surface-border flex items-center justify-between">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-foreground hover:text-foreground/80 transition-colors"
                >
                  <span>Read Full Philosophy &amp; Tooling</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
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
            <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
              Deep-Dive Navigation
            </span>
            <h3 className="font-sans font-extrabold text-2xl sm:text-4xl text-foreground tracking-tight">
              Explore Sharat&apos;s Full Digital Platform
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Navigate between dedicated project archives, client freelance offerings, career milestones, or transmit an enquiry directly.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/about"
                className="px-4 py-2 rounded-xl text-xs font-mono glass-panel border border-surface-border hover:border-accent/30 text-foreground/80 hover:text-foreground transition-colors"
              >
                /about
              </Link>
              <Link
                href="/projects"
                className="px-4 py-2 rounded-xl text-xs font-mono glass-panel border border-surface-border hover:border-accent/30 text-foreground/80 hover:text-foreground transition-colors"
              >
                /projects
              </Link>
              <Link
                href="/services"
                className="px-4 py-2 rounded-xl text-xs font-mono glass-panel border border-surface-border hover:border-accent/30 text-foreground/80 hover:text-foreground transition-colors"
              >
                /services
              </Link>
              <Link
                href="/experience"
                className="px-4 py-2 rounded-xl text-xs font-mono glass-panel border border-surface-border hover:border-accent/30 text-foreground/80 hover:text-foreground transition-colors"
              >
                /experience
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-xl text-xs font-mono bg-accent text-accent-foreground font-semibold hover:bg-accent-secondary transition-colors shadow-sm"
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
