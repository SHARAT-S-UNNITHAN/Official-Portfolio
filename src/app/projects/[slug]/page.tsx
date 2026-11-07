import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  Github,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Code2,
  Layers,
  UserCheck,
  ShieldCheck,
  Calendar,
} from "lucide-react";
import { projectsData } from "@/data/projects";
import { personalData } from "@/data/personal";
import { Metadata } from "next";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projectsData.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Case Study Not Found",
    };
  }

  return {
    title: `${project.title} | Case Study — ${personalData.name}`,
    description: project.overview,
    openGraph: {
      title: `${project.title} — Technical Case Study`,
      description: project.tagline,
      images: [project.image],
    },
  };
}

export default function ProjectCaseStudyPage({ params }: Props) {
  const project = projectsData.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const statusColors = {
    Completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    "In Development": "bg-amber-500/10 text-amber-400 border-amber-500/30",
    Concept: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    Archived: "bg-slate-500/10 text-slate-400 border-slate-500/30",
  };

  return (
    <div className="min-h-screen pt-28 pb-20 relative text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Breadcrumb / Back Link */}
        <div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-foreground/60 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* Case Study Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <span
              className={`px-3 py-1 rounded-full text-xs font-mono border font-medium ${
                statusColors[project.status]
              }`}
            >
              ● {project.status}
            </span>

            <span className="px-3 py-1 rounded-full text-xs font-mono bg-surface-muted text-foreground/75 border border-surface-border">
              {project.category}
            </span>
          </div>

          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-foreground/75 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {project.statusDescription && (
            <div className="p-4 rounded-2xl glass-panel border border-surface-border flex items-start gap-2.5 text-xs text-foreground/70">
              <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>
                <strong className="text-foreground">Implementation State:</strong>{" "}
                {project.statusDescription}
              </span>
            </div>
          )}
        </div>

        {/* Primary Project Graphic */}
        <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-surface-border shadow-2xl bg-black/40">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Meta Grid: Role & Tech Stack */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6 sm:p-7 rounded-3xl glass-panel border border-surface-border shadow-sm">
          <div>
            <span className="text-[11px] font-mono text-foreground/50 uppercase tracking-wider block mb-1">
              Engineering Role
            </span>
            <p className="font-semibold text-sm text-foreground">
              {project.role}
            </p>
          </div>

          <div className="sm:col-span-2">
            <span className="text-[11px] font-mono text-foreground/50 uppercase tracking-wider block mb-1.5">
              Technologies &amp; Libraries
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-surface-muted/60 text-foreground/80 border border-surface-border"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Narrative Sections */}
        <div className="space-y-12">
          {/* Section 1: Overview */}
          <div className="space-y-3">
            <h2 className="font-sans font-bold text-xl sm:text-2xl text-foreground tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Project Overview</span>
            </h2>
            <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Section 2: Problem & Solution Dual Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="p-6 rounded-2xl glass-panel border border-surface-border space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <AlertCircle className="w-4 h-4" />
                <span>The Problem Statement</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            <div className="p-6 rounded-2xl glass-panel border border-cyan-500/40 space-y-3 bg-cyan-500/[0.03]">
              <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs uppercase tracking-wider font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Section 3: Implemented Features */}
          <div className="space-y-4">
            <h2 className="font-sans font-bold text-xl sm:text-2xl text-foreground tracking-tight flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>Key Features &amp; Modules</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl glass-panel border border-surface-border flex items-start gap-3"
                >
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-foreground/85 leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Highlights / Architecture Specifications */}
          {project.metricsOrHighlights && (
            <div className="space-y-3">
              <h3 className="font-sans font-bold text-lg text-foreground tracking-tight">
                Architectural Highlights &amp; Metrics
              </h3>
              <ul className="space-y-2">
                {project.metricsOrHighlights.map((m, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/75 font-mono"
                  >
                    <span className="text-cyan-400 font-bold">❯</span>
                    <span>{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action CTAs */}
          <div className="pt-8 border-t border-surface-border flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold glass-panel border border-surface-border text-foreground hover:border-cyan-500/40 hover:text-cyan-400 transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3 h-3 text-foreground/50" />
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold hover:from-cyan-400 hover:to-blue-500 transition-colors"
                >
                  <span>Launch Live Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <span>Discuss a similar project with Sharat</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
