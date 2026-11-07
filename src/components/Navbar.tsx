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
              ? "glass-panel shadow-2xl border border-white/10"
              : "glass-panel border border-white/[0.06]"
          }`}
        >
          {/* Brand Identity / Monogram */}
          <Link
            href="/"
            className="group flex items-center gap-2.5 focus:outline-none rounded-lg"
          >
            <div className="w-8 h-8 rounded-xl bg-white text-black flex items-center justify-center font-mono font-bold text-xs shadow-sm group-hover:scale-105 transition-transform">
              SU
            </div>
            <div className="flex flex-col text-left">
              <span className="font-sans font-bold text-xs sm:text-sm tracking-tight text-white group-hover:text-zinc-300 transition-colors">
                {personalData.brandName}
              </span>
              <span className="text-[10px] font-mono text-zinc-400 tracking-wider uppercase">
                Software Dev
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] p-1 rounded-xl border border-white/[0.06]">
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
                      ? "bg-white/10 text-white font-medium border border-white/15 shadow-sm"
                      : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="ml-1.5 px-1.5 py-0.2 rounded text-[9px] font-mono bg-white/10 text-zinc-300 border border-white/15">
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
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-white/10 bg-white/[0.04] text-zinc-400 hover:text-white hover:border-white/20 text-xs font-mono transition-colors"
            >
              <Command className="w-3.5 h-3.5 text-zinc-400" />
              <span>⌘K</span>
            </button>

            <ThemeToggle />

            {/* Direct Hire / Contact CTA */}
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-all duration-200 shadow-sm"
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
              className="p-2 rounded-xl border border-white/10 bg-white/[0.04] text-white hover:bg-white/10 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass-panel border border-white/10 p-5 space-y-4 shadow-2xl animate-fade-in">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
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
              className="flex items-center gap-1 text-xs font-mono text-zinc-300"
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
                      ? "bg-white/10 text-white font-medium border border-white/15"
                      : "text-zinc-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 rounded text-[9px] bg-white/10 text-zinc-300 border border-white/15">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-white/10">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-white text-black hover:bg-zinc-200 transition-colors shadow-sm"
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
