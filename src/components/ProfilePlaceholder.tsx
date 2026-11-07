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
      <div className="absolute -inset-1 rounded-3xl bg-white/[0.04] blur-xl opacity-50 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Frame Container */}
      <div
        className={`relative ${sizeClasses[size]} rounded-3xl overflow-hidden border border-white/10 glass-panel p-2 shadow-2xl flex items-center justify-center`}
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
          <div className="relative w-full h-full rounded-2xl bg-black/60 border border-white/[0.06] flex flex-col items-center justify-center p-6 text-center select-none overflow-hidden">
            {/* Background geometric accents */}
            <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              {/* Monogram emblem */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border border-white/20 bg-white/5 flex items-center justify-center shadow-inner mb-4 transition-transform duration-300 group-hover:scale-105">
                <span className="font-mono text-2xl sm:text-3xl font-bold tracking-wider text-white">
                  SU
                </span>
              </div>

              {/* Developer Label */}
              <h3 className="font-sans font-semibold text-white text-sm sm:text-base tracking-tight mb-1">
                Sharat S Unnithan
              </h3>
              <p className="text-xs text-zinc-400 font-mono">
                Software Developer
              </p>

              {/* Verified Identity Note */}
              <button
                type="button"
                onClick={() => setShowHelper(!showHelper)}
                className="mt-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono border border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 transition-colors"
                title="Click for photo setup instructions"
              >
                <Camera className="w-3 h-3 text-zinc-400" />
                <span>Verified Placeholder</span>
              </button>
            </div>
          </div>
        )}

        {/* Status Indicator Badge */}
        {showBadge && (
          <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1 rounded-full glass-panel border border-white/15 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-[11px] font-mono text-zinc-300 font-medium tracking-tight">
              Kayamkulam, IN
            </span>
          </div>
        )}
      </div>

      {/* Helper Popover when clicked */}
      {showHelper && (
        <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 w-80 p-4 rounded-xl glass-panel border border-white/15 shadow-2xl z-50 text-left text-xs animate-fade-in">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div className="flex items-center gap-1.5 font-semibold text-white">
              <Info className="w-4 h-4 text-zinc-300" />
              <span>Profile Photo Setup</span>
            </div>
            <button
              onClick={() => setShowHelper(false)}
              className="text-zinc-400 hover:text-white text-xs"
            >
              ✕
            </button>
          </div>
          <p className="text-zinc-300 mb-2 leading-relaxed">
            Per your instructions, no synthetic or fake face images are used. To display your actual portrait:
          </p>
          <div className="p-2 rounded bg-black/50 border border-white/10 font-mono text-[11px] text-white mb-2 break-all">
            public/images/profile.jpg
          </div>
          <p className="text-[11px] text-zinc-400">
            Set <code className="text-white">hasCustomImage: true</code> in <code className="text-zinc-300">src/data/personal.ts</code> once you drop your file in!
          </p>
        </div>
      )}
    </div>
  );
}
