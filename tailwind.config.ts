import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        },
        surface: {
          1: "#0d0d14",
          2: "#13131e",
          3: "#1a1a2e",
        },
        border: {
          subtle: "#ffffff0d",
          active: "#ffffff1a",
        },
        plasma: {
          cyan: "#00f5d4",
          glow: "#00f5d440",
        },
        "void-purple": "#8b5cf6",
        "gold-node": "#f59e0b",
        danger: "#f43f5e",
        warning: "#fb923c",
        success: "#10b981",
        text: {
          primary: "#f1f5f9",
          secondary: "#64748b",
          disabled: "#334155",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
