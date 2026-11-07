"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calculator, Check, ArrowRight, Sparkles, Clock, ShieldCheck } from "lucide-react";

interface Option {
  id: string;
  name: string;
  desc: string;
  days: number;
}

export function ScopeEstimator() {
  const [projectType, setProjectType] = useState<string>("webapp");
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "database",
    "auth",
  ]);

  const baseTypes = [
    {
      id: "landing",
      name: "Responsive Business Website",
      desc: "Multi-section modern corporate or personal site with high SEO performance.",
      days: 5,
    },
    {
      id: "webapp",
      name: "Custom Web Application",
      desc: "Interactive database-driven platform with business logic and user portals.",
      days: 14,
    },
    {
      id: "django",
      name: "Python & Django Backend",
      desc: "Robust API, transactional database schemas, and server-side automation.",
      days: 12,
    },
    {
      id: "maintenance",
      name: "Code Audit & Maintenance",
      desc: "Bug remediation, performance optimization, and layout modernizing.",
      days: 4,
    },
  ];

  const addonsList: Option[] = [
    {
      id: "database",
      name: "Relational Database & Schemas",
      desc: "MySQL / SQLite relational structure and ACID transaction logic.",
      days: 3,
    },
    {
      id: "auth",
      name: "Role-Based Authentication",
      desc: "Secure login, session handling, and tiered user permissions.",
      days: 3,
    },
    {
      id: "dashboard",
      name: "Interactive Admin Dashboard",
      desc: "Data charts, search filters, and record management controls.",
      days: 4,
    },
    {
      id: "automation",
      name: "Automated Reporting / Logic",
      desc: "Periodic calculations, exportable summaries, and calculation engines.",
      days: 4,
    },
  ];

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedBase = baseTypes.find((b) => b.id === projectType) || baseTypes[1];
  const addonDays = selectedAddons.reduce((acc, curr) => {
    const found = addonsList.find((a) => a.id === curr);
    return acc + (found ? found.days : 0);
  }, 0);

  const totalDays = selectedBase.days + addonDays;
  const estimatedWeeks = Math.ceil(totalDays / 7);

  const scopeQuery = encodeURIComponent(
    `${selectedBase.name} with [${selectedAddons.join(", ")}] (Est. ${estimatedWeeks} wks)`
  );

  return (
    <div className="rounded-3xl glass-panel border border-surface-border p-6 sm:p-8 shadow-2xl relative overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-surface-border">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Scope Builder</span>
          </div>
          <h3 className="font-sans font-bold text-2xl text-foreground tracking-tight">
            Estimate Your Project Timeline &amp; Modules
          </h3>
          <p className="text-xs sm:text-sm text-foreground/70 mt-1">
            Configure your technical requirements to generate an instant feasibility breakdown.
          </p>
        </div>

        {/* Live Estimate Indicator */}
        <div className="p-4 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center gap-4 shrink-0">
          <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300">
            <Clock className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-semibold block">
              Estimated Timeline
            </span>
            <span className="font-mono text-xl sm:text-2xl font-bold text-foreground">
              ~{estimatedWeeks} {estimatedWeeks === 1 ? "Week" : "Weeks"}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Step 1: Base Platform */}
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-foreground/50 block mb-3">
            01. Choose Primary Deliverable
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {baseTypes.map((type) => (
              <button
                key={type.id}
                type="button"
                onClick={() => setProjectType(type.id)}
                className={`p-4 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                  projectType === type.id
                    ? "bg-cyan-500/10 border-cyan-500/50 shadow-md shadow-cyan-500/10"
                    : "bg-surface border-surface-border hover:border-surface-border/80 text-foreground/75"
                }`}
              >
                <div>
                  <h4 className="font-sans font-semibold text-sm text-foreground mb-1">
                    {type.name}
                  </h4>
                  <p className="text-xs text-foreground/60 leading-relaxed">
                    {type.desc}
                  </p>
                </div>
                <span className="font-mono text-[10px] text-cyan-400 font-semibold mt-3 block">
                  Base ~{type.days} days
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Technical Add-ons */}
        <div>
          <span className="font-mono text-xs uppercase tracking-wider text-foreground/50 block mb-3">
            02. Select Engineering Modules &amp; Features
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {addonsList.map((addon) => {
              const isSelected = selectedAddons.includes(addon.id);
              return (
                <button
                  key={addon.id}
                  type="button"
                  onClick={() => toggleAddon(addon.id)}
                  className={`p-3.5 rounded-xl text-left border transition-all duration-200 flex items-start gap-3 ${
                    isSelected
                      ? "bg-purple-500/10 border-purple-500/40 text-foreground"
                      : "bg-surface border-surface-border hover:border-surface-border/80 text-foreground/70"
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                      isSelected
                        ? "bg-purple-500 border-purple-400 text-slate-950 font-bold"
                        : "border-surface-border bg-surface-muted"
                    }`}
                  >
                    {isSelected && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <span className="font-sans font-semibold text-xs sm:text-sm text-foreground block">
                      {addon.name}
                    </span>
                    <span className="text-[11px] text-foreground/60 leading-snug block mt-0.5">
                      {addon.desc}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Row */}
        <div className="pt-6 border-t border-surface-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono text-foreground/60">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Scope is customizable during initial consultation.</span>
          </div>

          <Link
            href={`/contact?service=${scopeQuery}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/20 transition-all duration-200"
          >
            <span>Proceed with This Scope Configuration</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
