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
  Home,
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
    { label: "Overview (Home)", href: "/", icon: Home, group: "Navigation" },
    { label: "About Sharat", href: "/about", icon: User, group: "Navigation" },
    { label: "Projects Archive", href: "/projects", icon: FolderGit2, group: "Navigation" },
    { label: "Freelance Services & Scope Estimator", href: "/services", icon: Briefcase, group: "Navigation" },
    { label: "Experience & Education", href: "/experience", icon: GraduationCap, group: "Navigation" },
    { label: "Contact Terminal", href: "/contact", icon: Mail, group: "Navigation" },
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
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-black/70 backdrop-blur-md animate-fade-in">
      <div
        className="w-full max-w-xl rounded-3xl glass-panel border border-surface-border shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-surface-border bg-surface-muted/30">
          <Search className="w-4 h-4 text-accent shrink-0" />
          <input
            type="text"
            placeholder="Type a command, page name, or project..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-foreground placeholder:text-subtle-foreground focus:outline-none font-sans"
          />
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono border border-surface-border bg-surface text-foreground/60">
            ESC
          </kbd>
          <button
            onClick={() => setOpen(false)}
            className="p-1 rounded text-subtle-foreground hover:text-foreground"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-[380px] overflow-y-auto p-2 divide-y divide-surface-border/40">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-xs text-subtle-foreground font-mono">
              No matching commands or routes found.
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
                    className="w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl text-left text-xs sm:text-sm text-foreground/80 hover:text-foreground hover:bg-surface-muted transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="p-1.5 rounded-lg bg-surface-muted border border-surface-border text-foreground/60 group-hover:text-accent group-hover:border-accent/30 transition-colors">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="truncate">
                        <span className="font-medium">{item.label}</span>
                        {"subtitle" in item && (
                          <span className="ml-2 text-[11px] text-subtle-foreground font-mono">
                            {(item as any).subtitle}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-subtle-foreground shrink-0">
                      {item.group}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between px-4 py-2.5 border-t border-surface-border bg-surface-muted/20 text-[11px] text-subtle-foreground font-mono">
          <span>Command Navigator</span>
          <span>Tip: Press ⌘K / Ctrl+K anytime</span>
        </div>
      </div>
    </div>
  );
}
