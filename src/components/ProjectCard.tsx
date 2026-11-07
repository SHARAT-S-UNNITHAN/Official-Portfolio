"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Layers, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { Project, ProjectStatus } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const statusStyles: Record<
    ProjectStatus,
    { label: string; bg: string; text: string; dot: string }
  > = {
    Completed: {
      label: "Completed",
      bg: "bg-emerald-500/10 border-emerald-500/30",
      text: "text-emerald-400",
      dot: "bg-emerald-500",
    },
    "In Development": {
      label: "In Development",
      bg: "bg-amber-500/10 border-amber-500/30",
      text: "text-amber-400",
      dot: "bg-amber-500 animate-pulse",
    },
    Concept: {
      label: "System Concept",
      bg: "bg-blue-500/10 border-blue-500/30",
      text: "text-blue-400",
      dot: "bg-blue-500",
    },
    Archived: {
      label: "Archived",
      bg: "bg-slate-500/10 border-slate-500/30",
      text: "text-slate-400",
      dot: "bg-slate-400",
    },
  };

  const status = statusStyles[project.status];

  return (
    <div className="group relative rounded-2xl bg-surface border border-surface-border hover:border-emerald-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/5 flex flex-col overflow-hidden">
      {/* Visual Header / Illustration */}
      <Link
        href={`/projects/${project.slug}`}
        className="relative block w-full aspect-[16/10] overflow-hidden bg-surface-muted border-b border-surface-border/80 focus:outline-none"
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />

        {/* Status Pill on Image */}
        <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border backdrop-blur-md shadow-sm bg-surface/90">
          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
          <span className={`font-medium ${status.text}`}>{status.label}</span>
        </div>

        {/* Category Tag */}
        <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider bg-surface/85 backdrop-blur-md border border-surface-border text-foreground/75">
          {project.category}
        </div>
      </Link>

      {/* Body Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-2">
            <Link
              href={`/projects/${project.slug}`}
              className="group-hover:text-emerald-400 transition-colors focus:outline-none"
            >
              <h3 className="font-sans font-bold text-base sm:text-lg text-foreground tracking-tight leading-snug">
                {project.title}
              </h3>
            </Link>
          </div>

          <p className="text-xs sm:text-sm text-foreground/70 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-surface-muted text-foreground/75 border border-surface-border/80"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-foreground/50 border border-surface-border/60">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="pt-5 mt-4 border-t border-surface-border/60 flex items-center justify-between gap-3 text-xs">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors group/link"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-1.5 rounded-lg border border-surface-border bg-surface-muted text-foreground/60 hover:text-foreground hover:border-emerald-500/40 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
                className="p-1.5 rounded-lg border border-surface-border bg-surface-muted text-foreground/60 hover:text-foreground hover:border-emerald-500/40 transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
