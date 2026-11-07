"use client";

import React, { Suspense } from "react";
import {
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  Send,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { ContactForm } from "@/components/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>07 // Direct Communication</span>
          </div>
          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            Let&apos;s Build Something Meaningful Together.
          </h2>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            I am available for select freelance contracts, web development projects, and software developer opportunities. Choose your preferred communication channel below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick Cards */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href={`mailto:${personalData.email}`}
                className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-emerald-500/40 transition-all duration-200 flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-foreground/50 block">
                      Direct Email
                    </span>
                    <span className="font-sans font-semibold text-sm text-foreground group-hover:text-emerald-400 transition-colors break-all">
                      {personalData.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-emerald-400 transition-colors shrink-0 ml-2" />
              </a>

              {/* WhatsApp */}
              <a
                href={personalData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-surface border border-surface-border hover:border-emerald-500/40 transition-all duration-200 flex items-center justify-between group shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-foreground/50 block">
                      WhatsApp Instant Chat
                    </span>
                    <span className="font-sans font-semibold text-sm text-foreground group-hover:text-emerald-400 transition-colors">
                      {personalData.phone}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-foreground/40 group-hover:text-emerald-400 transition-colors shrink-0 ml-2" />
              </a>

              {/* Location Card */}
              <div className="p-5 rounded-2xl bg-surface border border-surface-border flex items-center gap-4 shadow-sm">
                <div className="w-11 h-11 rounded-xl bg-surface-muted border border-surface-border flex items-center justify-center text-emerald-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-foreground/50 block">
                    Operating Base
                  </span>
                  <span className="font-sans font-semibold text-sm text-foreground">
                    {personalData.location}
                  </span>
                  <span className="text-xs text-foreground/60 block font-mono">
                    Open for Local &amp; Remote Engagements
                  </span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-2xl bg-surface-muted/40 border border-surface-border space-y-4">
              <span className="text-xs font-mono uppercase tracking-wider text-foreground/50 block">
                Professional Networks
              </span>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface border border-surface-border hover:border-emerald-500/30 flex items-center justify-between text-xs font-semibold text-foreground hover:text-emerald-400 transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-emerald-400" />
                    <span>GitHub</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>

                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-surface border border-surface-border hover:border-emerald-500/30 flex items-center justify-between text-xs font-semibold text-foreground hover:text-emerald-400 transition-colors group"
                >
                  <span className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-emerald-400" />
                    <span>LinkedIn</span>
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </div>
            </div>

            {/* Response Promise */}
            <div className="p-4 rounded-xl bg-surface border border-surface-border/80 flex items-center gap-3 text-xs text-foreground/70">
              <Clock className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>
                Prompt turnaround: Initial review and response typically within 24 hours.
              </span>
            </div>
          </div>

          {/* Right Column: Interactive FormSubmit Project Enquiry Form */}
          <div className="lg:col-span-7">
            <Suspense fallback={<div className="p-8 rounded-2xl bg-surface border border-surface-border text-center text-xs text-foreground/50">Loading Enquiry Form...</div>}>
              <ContactForm />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
