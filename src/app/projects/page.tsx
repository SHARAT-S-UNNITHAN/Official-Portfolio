"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FolderGit2, Search, Filter, Sparkles, ArrowRight, Github } from "lucide-react";
import { projectsData } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    "Machine Learning",
    "Platform",
    "System Concept",
    "Client Solution",
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.overview.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-28 pb-20 relative text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>02 // Systems &amp; Code Portfolio</span>
          </div>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-foreground tracking-tight">
            Software Engineering Archives
          </h1>
          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-3xl">
            Practical full-stack software applications, machine learning algorithms, and domain-specific business systems engineered by Sharat S Unnithan.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-surface-border">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm"
                    : "text-foreground/70 hover:text-foreground hover:bg-surface-muted border border-transparent"
                }`}
              >
                {cat}
                {cat === "All" && ` (${projectsData.length})`}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-foreground/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by keyword or tech (e.g. Django, ML)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-surface-muted/60 border border-surface-border text-xs text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-cyan-500/50 font-mono transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 rounded-3xl glass-panel border border-surface-border text-center space-y-3">
            <p className="text-foreground/60 text-sm font-mono">
              No software projects matching query: &quot;{searchQuery}&quot; in category &quot;{selectedCategory}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 rounded-xl text-xs font-mono bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}

        {/* Case Study Notice */}
        <div className="p-8 rounded-3xl glass-panel border border-surface-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-sans font-bold text-lg text-foreground">
              Every project includes an in-depth technical case study.
            </h4>
            <p className="text-xs text-foreground/70">
              Click &quot;View Case Study&quot; on any card above to explore problem statements, architectural solutions, and implemented modules.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 transition-colors shrink-0"
          >
            <span>Discuss a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
