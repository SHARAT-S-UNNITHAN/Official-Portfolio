import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /*
         * Semantic palette tokens. Each resolves to a space-separated RGB
         * variable in globals.css, which keeps opacity modifiers working.
         */
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        surface: {
          DEFAULT: "rgb(var(--surface) / <alpha-value>)",
          muted: "rgb(var(--surface-muted) / <alpha-value>)",
          card: "rgb(var(--surface-card) / <alpha-value>)",
          elevated: "rgb(var(--surface-elevated) / <alpha-value>)",
          border: "rgb(var(--surface-border) / <alpha-value>)",
          glow: "rgb(var(--surface-glow) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          secondary: "rgb(var(--accent-secondary) / <alpha-value>)",
          highlight: "rgb(var(--accent-highlight) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--surface-muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        subtle: {
          foreground: "rgb(var(--subtle-foreground) / <alpha-value>)",
        },
        success: "rgb(var(--success) / <alpha-value>)",
        warning: "rgb(var(--warning) / <alpha-value>)",
        danger: "rgb(var(--danger) / <alpha-value>)",

        /*
         * Legacy palette names retained for compatibility, remapped to the
         * premium ink / champagne / ivory system.
         */
        navy: {
          50: "#f2f3f5",
          100: "#e4e6ea",
          200: "#c8ccd4",
          300: "#a6acb8",
          400: "#828b9a",
          500: "#626c7e",
          600: "#4a5262",
          700: "#2f3542",
          800: "#1b222c",
          900: "#11151c",
          950: "#0a0c10",
        },
        leather: {
          50: "#fbf8f1",
          100: "#f6f0e2",
          200: "#ece0c6",
          300: "#e2ca94",
          400: "#c9a961",
          500: "#b8935a",
          600: "#a07b42",
          700: "#8a6a2f",
          800: "#6d5426",
          900: "#503d1c",
          950: "#2a2010",
        },
        coral: {
          50: "#fdfbf6",
          100: "#faf6ea",
          200: "#f5ecd4",
          300: "#f2e4b8",
          400: "#e9d79f",
          500: "#e2ca94",
          600: "#d6b062",
          700: "#c9a961",
          800: "#b8935a",
          900: "#a07b42",
          950: "#8a6a2f",
        },
        eggshell: {
          50: "#fdfcf9",
          100: "#fbf9f4",
          200: "#f8f5ee",
          300: "#f5f1e9",
          400: "#f2ede3",
          500: "#efe9de",
          600: "#ece5d8",
          700: "#e8e1d3",
          800: "#e5ddce",
          900: "#e2d9c9",
          950: "#ede9e1",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        mono: [
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      animation: {
        "subtle-pulse": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};
export default config;
