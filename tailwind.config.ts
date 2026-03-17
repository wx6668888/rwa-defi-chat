import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#05050a',
        surface: {
          1: '#0d0d14',
          2: '#13131e',
          3: '#1a1a2e',
        },
        plasma: {
          cyan: '#00f5d4',
        },
        gold: {
          DEFAULT: '#f59e0b',
          light: '#fb923c',
        },
        text: {
          primary: '#f1f5f9',
          secondary: '#64748b',
          tertiary: '#334155',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-space-grotesk)'],
        mono: ['var(--font-jetbrains-mono)'],
      },
    },
  },
  plugins: [],
};

export default config;
