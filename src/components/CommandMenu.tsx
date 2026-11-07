"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Command,
  FileCode2,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  ExternalLink,
  X,
  Code2,
  User,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { projectsData } from "@/data/projects";

export function CommandMenu() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const router = useRouter();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const executeAction = (action: () => void) => {
    action();
    setOpen(false);
    setQuery("");
  };

  const navItems = [
    { label: "About Me", href: "/#about", icon: User, group: "Navigation" },
    { label: "Projects Showcase", href: "/#projects", icon: FolderGit2, group: "Navigation" },
    { label: "Freelance Services", href: "/#services", icon: Briefcase, group: "Navigation" },
    { label: "Technical Skills", href: "/#skills", icon: Code2, group: "Navigation" },
    { label: "Journey & Education", href: "/#journey", icon: GraduationCap, group: "Navigation" },
    { label: "Certifications", href: "/#certifications", icon: Award, group: "Navigation" },
    { label: "Contact & Enquiry", href: "/#contact", icon: Mail, group: "Navigation" },
  ];

  const projectItems = projectsData.map((p) => ({
    label: p.title,
    subtitle: `${p.category} • ${p.status}`,
    href: `/projects/${p.slug}`,
    icon: FileCode2,
    group: "Projects",
  }));

  const contactItems = [
    {
      label: `Email: ${personalData.email}`,
      href: `mailto:${personalData.email}`,
      icon: Mail,
      group: "Direct Contact",
    },
    {
      label: `WhatsApp: ${personalData.phone}`,
      href: personalData.whatsappUrl,
      icon: MessageSquare,
      group: "Direct Contact",
      external: true,
    },
    {
      label: "GitHub Profile",
      href: personalData.githubUrl,
      icon: ExternalLink,
      group: "Direct Contact",
      external: true,
    },
    {
      label: "LinkedIn Profile",
      href: personalData.linkedinUrl,
      icon: ExternalLink,
      group: "Direct Contact",
      external: true,
    },
  ];

  const allItems = [...navItems, ...projectItems, ...contactItems];

  const filteredItems = query
    ? allItems.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          ("subtitle" in item && (item as any).subtitle.toLowerCase().includes(query.toLowerCase())) ||
          item.group.toLowerCase().includes(query.toLowerCase())
      )
    : allItems;

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-black/60 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-xl rounded-2xl bg-surface border border-surface-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3 border-b border-surface-border bg-surface-muted/30">
          <Search className="w-4 h-4 text-emerald-400 shrink-0" />
          <input
            type="text"
            placeholder="Type a command, jump to a section, or search projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono border border-surface-border bg-surface text-foreground/60">
            ESC
          </kbd>
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded text-foreground/50 hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-surface-border/40">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs text-foreground/50">
              No matching commands or projects found.
            </div>
          ) : (
            <div className="space-y-1">
              {filteredItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() =>
                      executeAction(() => {
                        if ((item as any).external) {
                          window.open(item.href, "_blank");
                        } else {
                          router.push(item.href);
                        }
                      })
                    }
                    className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-xl text-left text-xs sm:text-sm text-foreground/80 hover:text-foreground hover:bg-surface-muted transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-1.5 rounded-lg bg-surface-muted border border-surface-border text-foreground/60 group-hover:text-emerald-400 group-hover:border-emerald-500/30 transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="truncate">
                        <span className="font-medium">{item.label}</span>
                        {"subtitle" in item && (
                          <span className="ml-2 text-[11px] text-foreground/50 font-mono">
                            {(item as any).subtitle}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-foreground/40 shrink-0">
                      {item.group}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-2 border-t border-surface-border bg-surface-muted/20 text-[11px] text-foreground/50 font-mono">
          <span>Quick Navigator</span>
          <span>Tip: Press ⌘K / Ctrl+K anytime</span>
        </div>
      </div>
    </div>
  );
}
