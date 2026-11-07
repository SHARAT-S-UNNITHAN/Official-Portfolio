"use client";

import React, { useState } from "react";
import { FolderGit2, Sparkles, Filter } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Machine Learning",
    "Platform",
    "System Concept",
    "Client Solution",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-28 border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-accent/10 text-accent border border-accent/20 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>02 // Project Portfolio</span>
            </div>
            <h2 className="font-sans font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
              Featured Software &amp; Engineering Projects
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-foreground/60 font-mono max-w-sm">
            Practical software applications, intelligent algorithms, and real client systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          <div className="flex items-center gap-1.5 text-xs font-mono text-subtle-foreground mr-2">
            <Filter className="w-3 h-3 text-accent" />
            <span>Filter:</span>
          </div>

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-accent text-accent-foreground font-bold shadow-md shadow-accent/20"
                  : "bg-surface border border-surface-border text-foreground/75 hover:border-accent/30 hover:text-foreground"
              }`}
            >
              {category}
              {category === "All" && ` (${projectsData.length})`}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Project Case Studies Note */}
        <div className="mt-12 p-6 rounded-2xl bg-surface-muted/60 border border-surface-border text-center space-y-2">
          <p className="text-xs sm:text-sm text-foreground/70">
            Every project has a complete technical case study detailing its problem statement, solution architecture, my role, and implemented modules.
          </p>
          <p className="text-xs font-mono text-accent">
            Click on any card above to explore full architectural breakdowns.
          </p>
        </div>
      </div>
    </section>
  );
}

