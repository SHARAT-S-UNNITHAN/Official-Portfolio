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
      bg: "bg-success/10 border-success/30",
      text: "text-success",
      dot: "bg-success",
    },
    "In Development": {
      label: "In Development",
      bg: "bg-warning/10 border-warning/30",
      text: "text-warning",
      dot: "bg-warning animate-pulse",
    },
    Concept: {
      label: "System Concept",
      bg: "bg-accent/10 border-accent/30",
      text: "text-accent",
      dot: "bg-accent",
    },
    Archived: {
      label: "Archived",
      bg: "bg-surface-muted border-surface-border",
      text: "text-muted-foreground",
      dot: "bg-subtle-foreground",
    },
  };

  const status = statusStyles[project.status];

  return (
    <div className="group relative rounded-3xl glass-panel border border-surface-border hover:border-accent/40 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 flex flex-col overflow-hidden text-left">
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
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />

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
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <Link
            href={`/projects/${project.slug}`}
            className="group-hover:text-accent transition-colors focus:outline-none block"
          >
            <h3 className="font-sans font-bold text-lg text-foreground tracking-tight leading-snug">
              {project.title}
            </h3>
          </Link>

          <p className="text-xs sm:text-sm text-foreground/70 line-clamp-2 leading-relaxed">
            {project.tagline}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono bg-surface-muted/80 text-foreground/75 border border-surface-border/80"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-1.5 py-0.5 rounded-md text-[10px] font-mono text-subtle-foreground border border-surface-border/60">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="pt-5 mt-4 border-t border-surface-border/60 flex items-center justify-between gap-3 text-xs">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 font-semibold text-accent hover:text-accent transition-colors group/link font-mono"
          >
            <span>Read Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </Link>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                className="p-1.5 rounded-xl border border-surface-border bg-surface-muted text-foreground/60 hover:text-foreground hover:border-accent/40 transition-colors"
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
                className="p-1.5 rounded-xl border border-surface-border bg-surface-muted text-foreground/60 hover:text-foreground hover:border-accent/40 transition-colors"
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
