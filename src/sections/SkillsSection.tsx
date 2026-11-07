"use client";

import React, { useState } from "react";
import { Code2, Layers, Database, Wrench, Sparkles, CheckCircle2 } from "lucide-react";
import { skillsData } from "@/data/skills";
import { SkillProficiency } from "@/types";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const proficiencyBadges: Record<SkillProficiency, { label: string; bg: string; text: string }> = {
    "Working Knowledge": {
      label: "Working Knowledge",
      bg: "bg-success/10 border-success/30",
      text: "text-success",
    },
    Familiar: {
      label: "Familiar",
      bg: "bg-accent-secondary/10 border-accent-secondary/30",
      text: "text-accent-secondary",
    },
    Learning: {
      label: "Learning",
      bg: "bg-warning/10 border-warning/30",
      text: "text-warning",
    },
  };

  const categories = ["All", ...skillsData.map((c) => c.category)];

  const displayedCategories =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="py-20 sm:py-28 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20 mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>04 // Technical Competencies</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              Verified Technical Skills
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground/60 font-mono max-w-sm">
            Categorized transparently with honest proficiency tags. No artificial percentages.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-accent text-accent-foreground font-bold shadow-md shadow-accent/20"
                  : "bg-surface border border-surface-border text-foreground/75 hover:border-accent/30 hover:text-foreground"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {displayedCategories.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl bg-surface border border-surface-border p-6 sm:p-7 shadow-sm hover:border-accent/30 transition-all duration-200"
            >
              <div className="mb-4">
                <h3 className="font-sans font-bold text-lg text-foreground tracking-tight">
                  {group.category}
                </h3>
                <p className="text-xs text-foreground/60 mt-0.5">
                  {group.description}
                </p>
              </div>

              <div className="space-y-2.5">
                {group.skills.map((skill) => {
                  const badge = proficiencyBadges[skill.proficiency];
                  return (
                    <div
                      key={skill.name}
                      className="p-3 rounded-xl bg-surface-muted/60 border border-surface-border/80 flex items-center justify-between gap-3 group hover:border-accent/30 transition-colors"
                    >
                      <div className="min-w-0">
                        <span className="font-sans font-semibold text-sm text-foreground block group-hover:text-accent transition-colors">
                          {skill.name}
                        </span>
                        {skill.note && (
                          <span className="text-[11px] text-foreground/60 truncate block mt-0.5">
                            {skill.note}
                          </span>
                        )}
                      </div>

                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-mono border whitespace-nowrap shrink-0 ${badge.bg} ${badge.text}`}
                      >
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-10 p-4 rounded-xl bg-surface-muted/40 border border-surface-border/60 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-foreground/60">
          <span className="text-subtle-foreground uppercase">Proficiency Legend:</span>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-success" />
            <span>Working Knowledge (Applied in production &amp; projects)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-secondary" />
            <span>Familiar (Academic grounding &amp; conceptual workflows)</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-warning" />
            <span>Learning (Active study &amp; ongoing implementation)</span>
          </div>
        </div>
      </div>
    </section>
  );
}

