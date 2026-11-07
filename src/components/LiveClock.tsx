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
      className={`inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full glass-panel text-xs font-mono text-foreground/80 beast-border ${className}`}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-success" />
      </span>
      <span className="flex items-center gap-1 text-muted-foreground">
        <MapPin className="w-3 h-3 text-muted-foreground" />
        <span>Kayamkulam, IN</span>
      </span>
      <span className="text-subtle-foreground">•</span>
      <span className="text-foreground font-medium">{timeStr || "IST"}</span>
    </div>
  );
}
