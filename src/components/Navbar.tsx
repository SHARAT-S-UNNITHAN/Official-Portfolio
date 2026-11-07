"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Command,
} from "lucide-react";
import { personalData } from "@/data/personal";
import { navigationLinks } from "@/data/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { LiveClock } from "./LiveClock";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex items-center justify-between px-4 py-2.5 rounded-2xl transition-all duration-300 ${
            scrolled
              ? "glass-panel shadow-2xl beast-border"
              : "glass-panel beast-border"
          }`}
        >
          {/* Brand Identity / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none rounded-lg"
          >
            <div className="w-8 h-8 rounded-xl bg-accent text-accent-foreground flex items-center justify-center font-mono font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
              SU
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-xs sm:text-sm tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
                {personalData.brandName}
              </span>
              <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase">
                Software Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-accent/10 p-1 rounded-xl beast-border">
            {navigationLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? "bg-accent/15 text-foreground font-medium beast-border shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/10"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.2 rounded text-[9px] font-mono bg-accent/20 text-foreground/80 beast-border">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="hidden sm:flex items-center gap-2.5">
            <LiveClock className="hidden xl:inline-flex" />

            {/* Quick Command Menu Trigger */}
            <button
              type="button"
              onClick={() => {
                const event = new KeyboardEvent("keydown", {
                  key: "k",
                  metaKey: true,
                });
                window.dispatchEvent(event);
              }}
              aria-label="Open command menu"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl beast-border bg-accent/10 text-muted-foreground hover:text-foreground hover:beast-border text-xs font-mono transition-colors"
            >
              <Command className="w-3.5 h-3.5 text-muted-foreground" />
              <span>⌘K</span>
            </button>

            <ThemeToggle />

            {/* Direct Hire / Contact CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-accent text-accent-foreground hover:bg-accent-secondary transition-all duration-200 shadow-sm"
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger & Theme Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl beast-border bg-accent/10 text-foreground hover:bg-accent/20 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass-panel beast-border p-5 space-y-4 shadow-2xl animate-fade-in">
          <div className="flex items-center justify-between pb-3 beast-border">
            <LiveClock />
            <button
              onClick={() => {
                const event = new KeyboardEvent("keydown", {
                  key: "k",
                  metaKey: true,
                });
                window.dispatchEvent(event);
                setMobileMenuOpen(false);
              }}
              className="flex items-center gap-1 text-xs font-mono text-foreground/80"
            >
              <Command className="w-3 h-3" />
              <span>Search (⌘K)</span>
            </button>
          </div>

          <div className="flex flex-col space-y-1">
            {navigationLinks.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-mono transition-colors ${
                    isActive
                      ? "bg-accent/15 text-foreground font-medium beast-border"
                      : "text-muted-foreground hover:bg-accent/10 hover:text-foreground"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded text-[9px] bg-accent/20 text-foreground/80 beast-border">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 beast-border">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-accent text-accent-foreground hover:bg-accent-secondary transition-colors shadow-sm"
            >
              <span>Start Project Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
