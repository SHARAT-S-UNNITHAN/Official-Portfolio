import React from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  MapPin,
  ArrowUpRight,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { navigationLinks } from "@/data/navigation";
import { projectsData } from "@/data/projects";
import { LiveClock } from "./LiveClock";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border bg-black/40 relative overflow-hidden text-left">
      {/* Decorative gradient bloom */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-28 bg-cyan-500/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-16">
          {/* Identity Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center font-mono font-bold text-xs text-slate-950 shadow-md shadow-cyan-500/20">
                SU
              </div>
              <span className="font-sans font-bold text-base tracking-tight text-foreground">
                {personalData.brandName}
              </span>
            </div>

            <p className="text-xs sm:text-sm text-foreground/70 max-w-md leading-relaxed">
              Software Developer &amp; Independent Freelancer. BCA Graduate from College of Applied Science (IHRD), Mavelikkara (University of Kerala) and MCA Student at IGNOU. Focused on resilient Python/Django systems, scalable relational architectures, and high-performance digital solutions.
            </p>

            <div className="pt-2">
              <LiveClock />
            </div>
          </div>

          {/* Core Routes */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Architecture
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-foreground/70 hover:text-cyan-400 transition-colors inline-flex items-center gap-1 group font-mono text-xs"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Project Case Studies */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Featured Systems
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {projectsData.slice(0, 4).map((project) => (
                <li key={project.id}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="text-foreground/70 hover:text-cyan-400 transition-colors line-clamp-1 font-mono text-xs"
                  >
                    {project.title.split("—")[0].trim()}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
              Direct Channels
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-foreground/70 hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono text-xs"
                >
                  <Mail className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="break-all">{personalData.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalData.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono text-xs"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-cyan-400" />
                  <span>WhatsApp: {personalData.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={personalData.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono text-xs"
                >
                  <Github className="w-3.5 h-3.5 text-cyan-400" />
                  <span>GitHub Profile</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a
                  href={personalData.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/70 hover:text-cyan-400 transition-colors flex items-center gap-2 group font-mono text-xs"
                >
                  <Linkedin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>LinkedIn Profile</span>
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-surface-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/50 font-mono">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {personalData.name}. All verified rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-foreground/60">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Verified Personal Identity</span>
            </span>
            <span>•</span>
            <span>Next.js 14 App Router</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
