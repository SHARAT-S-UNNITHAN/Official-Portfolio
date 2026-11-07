import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Search, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-28">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-accent/10 border border-accent/20 text-accent mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            Error 404
          </span>
          <h1 className="font-sans font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
            The page or project documentation you requested does not exist or has been restructured.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent-secondary transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            href="/#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-medium border border-surface-border text-foreground hover:bg-surface-muted transition-colors"
          >
            <Search className="w-4 h-4" />
            <span>Explore Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

