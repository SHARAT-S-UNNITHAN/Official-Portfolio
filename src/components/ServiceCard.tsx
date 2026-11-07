"use client";

import React from "react";
import Link from "next/link";
import {
  Globe,
  LayoutGrid,
  Code2,
  Cpu,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Service } from "@/types";

interface ServiceCardProps {
  service: Service;
  onSelectService?: (serviceTitle: string) => void;
}

export function ServiceCard({ service, onSelectService }: ServiceCardProps) {
  const iconMap: Record<string, React.ElementType> = {
    Globe,
    LayoutGrid,
    Code2,
    Cpu,
    Wrench,
  };

  const Icon = iconMap[service.iconName] || Globe;

  const handleEnquire = (e: React.MouseEvent) => {
    if (onSelectService) {
      onSelectService(service.title);
    }
  };

  return (
    <div className="relative rounded-3xl glass-panel border border-surface-border p-6 sm:p-7 hover:border-accent/40 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/10 flex flex-col justify-between group text-left">
      {/* Top Header */}
      <div>
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="w-12 h-12 rounded-2xl bg-surface-muted/60 border border-surface-border flex items-center justify-center text-accent group-hover:scale-105 group-hover:border-accent/40 transition-transform">
            <Icon className="w-6 h-6" />
          </div>
          <div className="flex items-center gap-2">
            {service.badge && (
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-accent/15 text-accent border border-accent/30">
                {service.badge}
              </span>
            )}
            <span className="font-mono text-sm font-bold text-subtle-foreground">
              {service.number}
            </span>
          </div>
        </div>

        <h3 className="font-sans font-bold text-lg sm:text-xl text-foreground tracking-tight mb-2 group-hover:text-accent transition-colors">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="space-y-2 mb-6">
          <span className="font-mono text-[11px] uppercase tracking-wider text-subtle-foreground block">
            Verified Deliverables
          </span>
          <ul className="space-y-1.5">
            {service.deliverables.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-foreground/80 leading-normal"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-accent mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Footer CTA */}
      <div className="pt-4 border-t border-surface-border/60">
        <Link
          href={`/contact?service=${encodeURIComponent(service.title)}`}
          onClick={handleEnquire}
          className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-semibold glass-panel border border-surface-border text-foreground hover:text-accent hover:border-accent/40 transition-all duration-200 group/btn"
        >
          <span>Enquire for {service.title}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}
