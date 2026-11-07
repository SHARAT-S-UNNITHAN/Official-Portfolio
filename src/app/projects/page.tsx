"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FolderGit2, Search, ArrowRight } from "lucide-react";
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-white/5 text-zinc-300 border border-white/10">
            <FolderGit2 className="w-3.5 h-3.5 text-zinc-400" />
            <span>02 // Systems &amp; Code Portfolio</span>
          </div>
          <h1 className="font-sans font-extrabold text-4xl sm:text-5xl text-white tracking-tight">
            Software Engineering Archives
          </h1>
          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-3xl">
            Practical full-stack software applications, machine learning algorithms, and domain-specific business systems engineered by Sharat S Unnithan.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-2xl glass-panel border border-white/10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-white text-black font-semibold shadow-sm"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                }`}
              >
                {cat}
                {cat === "All" && ` (${projectsData.length})`}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Filter by keyword or tech (e.g. Django, ML)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 text-xs text-white placeholder:text-zinc-500 focus:outline-none focus:border-white/30 font-mono transition-colors"
            />
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 rounded-3xl glass-panel border border-white/10 text-center space-y-3">
            <p className="text-zinc-400 text-sm font-mono">
              No software projects matching query: &quot;{searchQuery}&quot; in category &quot;{selectedCategory}&quot;.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="px-4 py-2 rounded-xl text-xs font-mono bg-white text-black font-semibold hover:bg-zinc-200"
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
        <div className="p-8 rounded-3xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-sans font-bold text-lg text-white">
              Every project includes an in-depth technical case study.
            </h4>
            <p className="text-xs text-zinc-400">
              Click &quot;Read Case Study&quot; on any card above to explore problem statements, architectural solutions, and implemented modules.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shrink-0 shadow-sm"
          >
            <span>Discuss a Project</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
