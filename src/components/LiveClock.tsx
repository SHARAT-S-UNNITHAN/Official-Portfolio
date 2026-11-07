"use client";

import React, { useState, useEffect } from "react";
import { Clock, MapPin } from "lucide-react";

export function LiveClock({ className = "" }: { className?: string }) {
  const [timeStr, setTimeStr] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      const formatter = new Intl.DateTimeFormat([], options);
      setTimeStr(formatter.format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full glass-panel text-xs font-mono text-zinc-300 border border-white/10 ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
      </span>
      <span className="flex items-center gap-1 text-zinc-400">
        <MapPin className="w-3 h-3 text-zinc-400" />
        <span>Kayamkulam, IN</span>
      </span>
      <span className="text-zinc-600">•</span>
      <span className="text-white font-medium">{timeStr || "IST"}</span>
    </div>
  );
}
