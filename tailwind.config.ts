import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          black: "#05050a",
          dark: "#0d0d14",
          darker: "#13131e",
        },
        plasma: {
          cyan: "#00f5d4",
        },
        accent: {
          gold: "#f59e0b",
          purple: "#8b5cf6",
          green: "#10b981",
          red: "#f43f5e",
        },
        text: {
          primary: "#f1f5f9",
          secondary: "#64748b",
          disabled: "#334155",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        display: ["var(--font-space-grotesk)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
    },
  },
  plugins: [],
};

export default config;
