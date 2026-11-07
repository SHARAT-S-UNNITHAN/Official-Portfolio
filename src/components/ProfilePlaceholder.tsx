"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, Info } from "lucide-react";
import { personalData } from "@/data/personal";

interface ProfilePlaceholderProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "hero";
  showBadge?: boolean;
}

export function ProfilePlaceholder({
  className = "",
  size = "hero",
  showBadge = true,
}: ProfilePlaceholderProps) {
  const [imageError, setImageError] = useState(false);
  const [showHelper, setShowHelper] = useState(false);

  const sizeClasses = {
    sm: "w-16 h-16 text-xl",
    md: "w-28 h-28 text-3xl",
    lg: "w-44 h-44 text-5xl",
    hero: "w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96",
  };

  return (
    <div className={`relative group inline-block ${className}`}>
      {/* Outer subtle glow */}
      <div className="absolute -inset-1 rounded-3xl bg-foreground/[0.05] blur-xl opacity-50 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Frame Container */}
      <div
        className={`relative ${sizeClasses[size]} rounded-3xl overflow-hidden border border-surface-border glass-panel p-2 shadow-2xl flex items-center justify-center`}
      >
        {!imageError && personalData.profileImage.hasCustomImage ? (
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={personalData.profileImage.path}
              alt={personalData.profileImage.alt}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              priority
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          </div>
        ) : (
          /* High-end Editorial Geometric Monogram Fallback */
          <div className="relative w-full h-full rounded-2xl bg-surface-muted border border-surface-border/60 flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute inset-0 beast-grid opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Monogram emblem */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-accent/25 bg-foreground/5 flex items-center justify-center shadow-inner mb-4 transition-transform duration-300 group-hover:scale-105">
                <span className="font-mono text-2xl sm:text-3xl font-bold tracking-wider text-foreground">
                  SU
                </span>
              </div>

              {/* Developer Label */}
              <h3 className="font-sans font-semibold text-foreground text-sm sm:text-base tracking-tight mb-1">
                Sharat S Unnithan
              </h3>
              <p className="text-xs text-muted-foreground font-mono">
                Software Developer
              </p>

              {/* Verified Identity Note */}
              <button
                type="button"
                onClick={() => setShowHelper(!showHelper)}
                className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-surface-border bg-foreground/5 text-foreground/80 hover:bg-foreground/10 transition-colors"
                title="Click for photo setup instructions"
              >
                <Camera className="w-3 h-3 text-muted-foreground" />
                <span>Verified Placeholder</span>
              </button>
            </div>
          </div>
        )}

        {/* Status Indicator Badge */}
        {showBadge && (
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-surface-border shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
            </span>
            <span className="text-[11px] font-mono text-foreground/80 font-medium tracking-tight">
              Kayamkulam, IN
            </span>
          </div>
        )}
      </div>

      {/* Helper Popover when clicked */}
      {showHelper && (
        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-80 p-4 rounded-xl glass-panel border border-surface-border shadow-2xl z-50 text-left text-xs animate-fade-in">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5 font-semibold text-foreground">
              <Info className="w-4 h-4 text-foreground/80" />
              <span>Profile Photo Setup</span>
            </div>
            <button
              onClick={() => setShowHelper(false)}
              className="text-muted-foreground hover:text-foreground text-xs"
            >
              ✕
            </button>
          </div>
          <p className="text-foreground/80 mb-2 leading-relaxed">
            Per your instructions, no synthetic or fake face images are used. To display your actual portrait:
          </p>
          <div className="p-2 rounded bg-surface-muted border border-surface-border font-mono text-[11px] text-foreground mb-2 break-all">
            public/images/profile.jpg
          </div>
          <p className="text-[11px] text-muted-foreground">
            Set <code className="text-foreground">hasCustomImage: true</code> in <code className="text-foreground/80">src/data/personal.ts</code> once you drop your file in!
          </p>
        </div>
      )}
    </div>
  );
}
