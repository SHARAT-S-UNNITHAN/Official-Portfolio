"use client";

import React from "react";
import Link from "next/link";
import { Briefcase, ArrowUpRight, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";
import { personalData } from "@/data/personal";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

export function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 border-t border-surface-border relative bg-surface-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>03 // Independent Freelance Services</span>
          </div>

          <h2 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight mb-4">
            {personalData.freelanceTagline}
          </h2>

          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed">
            {personalData.freelanceSubtext}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}

          {/* 6th Card: Custom Consultation / Tailored Solution Card */}
          <div className="rounded-2xl bg-gradient-to-br from-surface via-surface to-emerald-950/20 border border-emerald-500/30 p-6 sm:p-7 flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-sans font-bold text-lg text-foreground tracking-tight">
                Custom Requirements?
              </h3>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
                If your project requires a specialized combination of backend logic, automation, API integration, or unique business rules, we can define a tailored scope together.
              </p>
              <div className="space-y-1.5 pt-2 text-xs text-foreground/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Direct communication with the developer</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Honest scope &amp; feasibility assessment</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Transparent timeline without agency overhead</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <Link
                href="/#contact?service=Custom%20Consultation"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-colors shadow-md shadow-emerald-500/10"
              >
                <span>Discuss Custom Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Project Enquiry Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-surface via-surface-muted to-surface border border-surface-border p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold">
              Project Enquiry
            </span>
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Have an idea? Let&apos;s build something useful.
            </h3>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-xl">
              Whether you need a full application built from scratch, an existing website updated, or a manual process digitized, I am ready to collaborate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-lg shadow-emerald-500/20 transition-all duration-200"
            >
              <span>Start an Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium border border-surface-border bg-surface text-foreground hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
