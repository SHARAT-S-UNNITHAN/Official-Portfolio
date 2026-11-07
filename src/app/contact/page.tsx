import React, { Suspense } from "react";
import {
  Mail,
  MessageSquare,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  Clock,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { ContactForm } from "@/components/ContactForm";
import { LiveClock } from "@/components/LiveClock";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Contact & Project Enquiry — ${personalData.name}`,
  description:
    "Direct communication channels, WhatsApp chat, and project enquiry dispatch for Sharat S Unnithan, Software Developer & Independent Freelancer.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 relative text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-foreground/5 text-foreground/80 border border-surface-border">
              <Mail className="w-3.5 h-3.5 text-muted-foreground" />
              <span>05 // Communication Terminal</span>
            </div>
            <LiveClock />
          </div>

          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight">
            Initiate Contact or Transmit a Project Brief
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Whether you have a specific software project in mind, need independent freelance development, or wish to connect for professional opportunities, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Fast Channels */}
          <div className="lg:col-span-5 space-y-4">
            {/* Direct Cards */}
            <a
              href={`mailto:${personalData.email}`}
              className="p-5 rounded-2xl glass-panel border border-surface-border hover:border-accent/25 transition-all duration-200 flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-foreground/[0.05] border border-surface-border flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-subtle-foreground block">
                    Direct Email
                  </span>
                  <span className="font-sans font-semibold text-sm text-foreground group-hover:text-foreground transition-colors break-all">
                    {personalData.email}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-subtle-foreground group-hover:text-foreground transition-colors shrink-0 ml-2" />
            </a>

            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl glass-panel border border-surface-border hover:border-accent/25 transition-all duration-200 flex items-center justify-between group shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-foreground/[0.05] border border-surface-border flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-subtle-foreground block">
                    WhatsApp Direct Chat
                  </span>
                  <span className="font-sans font-semibold text-sm text-foreground group-hover:text-foreground transition-colors">
                    {personalData.phone}
                  </span>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-subtle-foreground group-hover:text-foreground transition-colors shrink-0 ml-2" />
            </a>

            {/* Location Card */}
            <div className="p-5 rounded-2xl glass-panel border border-surface-border flex items-center gap-4 shadow-sm">
              <div className="w-11 h-11 rounded-xl bg-foreground/[0.05] border border-surface-border flex items-center justify-center text-foreground">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-subtle-foreground block">
                  Operating Hub
                </span>
                <span className="font-sans font-semibold text-sm text-foreground">
                  {personalData.location}
                </span>
                <span className="text-xs text-muted-foreground block font-mono">
                  Kerala, India (UTC+5:30) • Remote Ready
                </span>
              </div>
            </div>

            {/* Social Networks */}
            <div className="p-5 rounded-2xl glass-panel border border-surface-border space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-subtle-foreground block">
                Professional Profiles
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-foreground/[0.04] border border-surface-border hover:border-accent/30 flex items-center justify-between text-xs font-semibold text-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-foreground/80" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>

                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-foreground/[0.04] border border-surface-border hover:border-accent/30 flex items-center justify-between text-xs font-semibold text-foreground hover:text-foreground transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-foreground/80" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
                </a>
              </div>
            </div>

            {/* Response Promise */}
            <div className="p-4 rounded-xl glass-panel border border-surface-border flex items-center gap-3 text-xs text-muted-foreground font-mono">
              <Clock className="w-4 h-4 text-foreground/80 shrink-0" />
              <span>Turnaround: Verified responses within 24 hours.</span>
            </div>
          </div>

          {/* Right Column: FormSubmit Enquiry Form */}
          <div className="lg:col-span-7">
            <Suspense
              fallback={
                <div className="p-8 rounded-2xl glass-panel text-center text-xs text-subtle-foreground">
                  Loading enquiry terminal...
                </div>
              }
            >
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
