import React from "react";
import Link from "next/link";
import {
  Briefcase,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  ArrowUpRight,
  ShieldCheck,
  Workflow,
  MessageSquare,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { servicesData } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { ScopeEstimator } from "@/components/ScopeEstimator";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Freelance Services — ${personalData.name}`,
  description:
    "Independent digital solutions and freelance software development services by Sharat S Unnithan: website development, web applications, Python & Django systems, and business automation.",
};

export default function ServicesPage() {
  const steps = [
    {
      num: "01",
      title: "Discovery & Scope",
      desc: "Direct conversation to understand your exact requirements, target users, and desired outcomes.",
    },
    {
      num: "02",
      title: "Architecture & Schema",
      desc: "Structuring clean relational databases, backend APIs, and modern responsive UI wireframes.",
    },
    {
      num: "03",
      title: "Full-Stack Development",
      desc: "Writing maintainable, clean code in Python/Django or Next.js with iterative milestone updates.",
    },
    {
      num: "04",
      title: "Deployment & Support",
      desc: "Setting up production hosting, domain configuration, and ongoing technical maintenance.",
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/25">
            <Briefcase className="w-3.5 h-3.5" />
            <span>03 // Independent Freelance Practice</span>
          </div>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight">
            {personalData.freelanceTagline}
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-3xl">
            {personalData.freelanceSubtext} Direct, personalized software development without bloated agency markups or outsourced communication.
          </p>
        </div>

        {/* Interactive Scope & Timeline Estimator */}
        <div className="space-y-4">
          <ScopeEstimator />
        </div>

        {/* All 5 Services Grid */}
        <div className="space-y-6">
          <div className="border-b border-surface-border pb-3">
            <h2 className="font-sans font-bold text-2xl sm:text-3xl text-foreground tracking-tight">
              Verified Freelance Offerings
            </h2>
            <p className="text-xs sm:text-sm text-foreground/60 font-mono mt-1">
              Transparent deliverables and direct developer accountability for every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}

            {/* Custom Scope Card */}
            <div className="rounded-3xl glass-panel border border-cyan-500/30 p-6 sm:p-7 flex flex-col justify-between shadow-lg">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-sans font-bold text-lg text-foreground">
                  Custom Software Needs?
                </h3>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  Need a tailored combination of automation scripts, database migration, or legacy repair? We can formulate a direct, custom milestone plan.
                </p>
                <div className="space-y-1.5 text-xs text-foreground/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Direct one-on-one developer consultation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Honest feasibility and turnaround assessment</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Post-launch warranty &amp; technical updates</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  href="/contact?service=Custom%20Consultation"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 transition-colors shadow-md shadow-cyan-500/20"
                >
                  <span>Request Custom Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Step Collaboration Process */}
        <div className="space-y-6">
          <div className="border-b border-surface-border pb-3">
            <h2 className="font-sans font-bold text-2xl text-foreground tracking-tight">
              How We Work Together
            </h2>
            <span className="text-xs font-mono text-cyan-400">
              Clear, Transparent 4-Step Development Process
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="p-5 rounded-2xl glass-panel border border-surface-border space-y-2.5"
              >
                <span className="font-mono text-xs font-bold text-cyan-400 block">
                  {step.num}
                </span>
                <h4 className="font-sans font-bold text-base text-foreground">
                  {step.title}
                </h4>
                <p className="text-xs text-foreground/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Project Enquiry Banner */}
        <div className="rounded-3xl glass-panel border border-surface-border p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Ready to Start?
            </span>
            <h3 className="font-sans font-extrabold text-2xl sm:text-3xl text-foreground tracking-tight">
              Have an idea? Let&apos;s build something useful.
            </h3>
            <p className="text-xs sm:text-sm text-foreground/70 max-w-xl">
              Send your project outline, desired timeline, or questions. I respond personally to every enquiry within 24 hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 transition-colors shadow-lg shadow-cyan-500/20"
            >
              <span>Transmit Project Brief</span>
            </Link>
            <a
              href={personalData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-medium glass-panel border border-surface-border text-foreground hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Instant WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
