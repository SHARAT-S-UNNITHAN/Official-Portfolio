"use client";

import React, { useState } from "react";
import { GraduationCap, Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { educationData } from "@/data/education";
import { experienceData } from "@/data/experience";

export function JourneySection() {
  const [activeTab, setActiveTab] = useState<"education" | "experience" | "all">("all");

  return (
    <section id="journey" className="py-20 sm:py-28 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20 mb-3">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>05 // Academic &amp; Professional Journey</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              Education &amp; Experience
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                activeTab === "all"
                  ? "bg-accent text-accent-foreground font-bold"
                  : "bg-surface border border-surface-border text-foreground/70 hover:text-foreground"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                activeTab === "education"
                  ? "bg-accent text-accent-foreground font-bold"
                  : "bg-surface border border-surface-border text-foreground/70 hover:text-foreground"
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-colors ${
                activeTab === "experience"
                  ? "bg-accent text-accent-foreground font-bold"
                  : "bg-surface border border-surface-border text-foreground/70 hover:text-foreground"
              }`}
            >
              Experience
            </button>
          </div>
        </div>

        {/* Timeline Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Education Track */}
          {(activeTab === "all" || activeTab === "education") && (
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-surface-border">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-foreground tracking-tight">
                    Education Timeline
                  </h3>
                  <span className="text-xs font-mono text-foreground/60">
                    Formal Computer Science Qualifications
                  </span>
                </div>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-surface-border">
                {educationData.map((edu) => (
                  <div key={edu.id} className="relative pl-9 space-y-2 group">
                    {/* Timeline Node */}
                    <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent bg-surface group-hover:bg-accent-secondary transition-colors" />

                    <div className="p-5 rounded-2xl bg-surface border border-surface-border group-hover:border-accent/30 transition-all duration-200 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-accent/10 text-accent border border-accent/20">
                          {edu.status}
                        </span>
                        <span className="text-xs font-mono text-subtle-foreground">
                          {edu.period}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-sans font-bold text-base text-foreground tracking-tight">
                          {edu.degree}
                        </h4>
                        <p className="text-xs sm:text-sm text-foreground/75 mt-0.5">
                          {edu.institution}
                        </p>
                        {edu.university && (
                          <p className="text-xs text-foreground/55 font-mono">
                            {edu.university}
                          </p>
                        )}
                      </div>

                      <p className="text-xs text-foreground/70 leading-relaxed">
                        {edu.description}
                      </p>

                      <div className="space-y-1 pt-1">
                        {edu.highlights.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Professional Experience Track */}
          {(activeTab === "all" || activeTab === "experience") && (
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 pb-2 border-b border-surface-border">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-sans font-bold text-lg text-foreground tracking-tight">
                    Professional Experience
                  </h3>
                  <span className="text-xs font-mono text-foreground/60">
                    Business Coordination &amp; Development Practice
                  </span>
                </div>
              </div>

              <div className="space-y-6 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-surface-border">
                {experienceData.map((exp) => (
                  <div key={exp.id} className="relative pl-9 space-y-2 group">
                    <div className="absolute left-2 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent bg-surface group-hover:bg-accent-secondary transition-colors" />

                    <div className="p-5 rounded-2xl bg-surface border border-surface-border group-hover:border-accent/30 transition-all duration-200 space-y-3">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-surface-muted text-accent border border-surface-border">
                          {exp.period}
                        </span>
                        <span className="text-xs font-mono text-subtle-foreground">
                          {exp.location}
                        </span>
                      </div>

                      <div>
                        <h4 className="font-sans font-bold text-base text-foreground tracking-tight">
                          {exp.role}
                        </h4>
                        <p className="text-xs sm:text-sm text-foreground/75 mt-0.5 font-semibold">
                          {exp.company}
                        </p>
                      </div>

                      {/* Business Areas */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {exp.businessAreas.map((area) => (
                          <span
                            key={area}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-surface-muted text-foreground/70 border border-surface-border"
                          >
                            {area}
                          </span>
                        ))}
                      </div>

                      <p className="text-xs text-foreground/70 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-1 pt-1">
                        {exp.verifiedResponsibilities.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-foreground/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

