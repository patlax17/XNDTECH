import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#5B7FFF",      // XNDR primary blue (from logo)
          "blue-dark": "#4060D8",
          "blue-light": "#7B9FFF",
          bg: "#0A0B0F",        // Deep dark background
          surface: "#111318",   // Card/surface bg
          "surface-2": "#181B23",
          border: "#1E2330",
          text: "#E8EAF0",      // Primary text
          muted: "#6B7280",     // Secondary/muted text
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(rgba(91,127,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(91,127,255,0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(91,127,255,0.25) 0%, transparent 70%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(91,127,255,0.08) 0%, rgba(91,127,255,0.02) 100%)",
      },
      backgroundSize: {
        "grid-sm": "40px 40px",
        "grid-md": "60px 60px",
      },
    },
  },
  plugins: [],
};

export default config;
