"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Sparkles,
  Terminal,
  Cpu,
  CheckCircle2,
  Code2,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { ProfilePlaceholder } from "@/components/ProfilePlaceholder";
import { ResumeDownloadButton } from "@/components/ResumeModal";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 text-emerald-400 text-xs font-mono shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{personalData.availability.detail}</span>
            </div>

            {/* Name & Title */}
            <div className="space-y-2">
              <span className="font-mono text-xs sm:text-sm font-semibold tracking-wider text-emerald-400 uppercase block">
                {personalData.roleTitle}
              </span>
              <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.1]">
                {personalData.headline}
              </h1>
            </div>

            {/* Supporting Bio */}
            <p className="text-base sm:text-lg text-foreground/75 max-w-2xl leading-relaxed">
              {personalData.shortBio}
            </p>

            {/* Action Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </Link>

              <Link
                href="/#services"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-surface border border-surface-border text-foreground hover:border-emerald-500/50 hover:text-emerald-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore Services</span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </Link>

              <ResumeDownloadButton variant="outline" className="py-3 px-4" />
            </div>

            {/* Social Channels & Contact Links */}
            <div className="pt-4 border-t border-surface-border/60 flex flex-wrap items-center gap-4 text-xs font-mono text-foreground/70">
              <span className="text-foreground/40 uppercase">Direct Channels:</span>

              <a
                href={personalData.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <Github className="w-4 h-4 text-emerald-400" />
                <span>GitHub</span>
              </a>

              <a
                href={personalData.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-4 h-4 text-emerald-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp</span>
              </a>

              <a
                href={`mailto:${personalData.email}`}
                className="flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Profile Image Placeholder & Live Tech Card */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-6">
            {/* Profile Avatar Frame */}
            <ProfilePlaceholder size="hero" showBadge={true} />

            {/* Interactive Engineering Stat Badge */}
            <div className="w-full max-w-sm rounded-2xl bg-surface/90 border border-surface-border/80 p-4 shadow-lg backdrop-blur-md">
              <div className="flex items-center justify-between mb-3 text-xs font-mono text-foreground/50 border-b border-surface-border/60 pb-2">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Engineering Core</span>
                </span>
                <span>Active 2026</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2 rounded-lg bg-surface-muted border border-surface-border/60">
                  <span className="text-[10px] text-foreground/50 block font-mono">Backend Stack</span>
                  <span className="font-semibold text-foreground">Python &amp; Django</span>
                </div>
                <div className="p-2 rounded-lg bg-surface-muted border border-surface-border/60">
                  <span className="text-[10px] text-foreground/50 block font-mono">Frontend</span>
                  <span className="font-semibold text-foreground">Web Tech / React</span>
                </div>
                <div className="p-2 rounded-lg bg-surface-muted border border-surface-border/60">
                  <span className="text-[10px] text-foreground/50 block font-mono">Degree Base</span>
                  <span className="font-semibold text-foreground">BCA Graduate</span>
                </div>
                <div className="p-2 rounded-lg bg-surface-muted border border-surface-border/60">
                  <span className="text-[10px] text-foreground/50 block font-mono">Postgraduate</span>
                  <span className="font-semibold text-foreground">MCA (IGNOU)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
