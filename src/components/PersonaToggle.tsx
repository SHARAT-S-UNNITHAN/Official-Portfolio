"use client";

import React, { createContext, useContext, useState } from "react";
import { Code2, Briefcase } from "lucide-react";

export type PersonaMode = "developer" | "freelance";

interface PersonaContextType {
  mode: PersonaMode;
  setMode: (mode: PersonaMode) => void;
  toggleMode: () => void;
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined);

export function PersonaProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<PersonaMode>("developer");

  const toggleMode = () => {
    setMode((prev) => (prev === "developer" ? "freelance" : "developer"));
  };

  return (
    <PersonaContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </PersonaContext.Provider>
  );
}

export function usePersona() {
  const context = useContext(PersonaContext);
  if (!context) {
    throw new Error("usePersona must be used within PersonaProvider");
  }
  return context;
}

export function PersonaSwitcher({ className = "" }: { className?: string }) {
  const { mode, setMode } = usePersona();

  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl glass-panel beast-border text-xs font-mono select-none ${className}`}
    >
      <button
        type="button"
        onClick={() => setMode("developer")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 ${
          mode === "developer"
            ? "bg-accent text-accent-foreground font-semibold shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Code2 className="w-3.5 h-3.5" />
        <span>Engineer</span>
      </button>

      <button
        type="button"
        onClick={() => setMode("freelance")}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200 ${
          mode === "freelance"
            ? "bg-accent text-accent-foreground font-semibold shadow-sm"
            : "text-muted-foreground hover:text-foreground"
        }`}
      >
        <Briefcase className="w-3.5 h-3.5" />
        <span>Freelance Solutions</span>
      </button>
    </div>
  );
}
