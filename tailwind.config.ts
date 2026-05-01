import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "var(--card)",
          hover: "var(--card-hover)",
        },
        border: "var(--border)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        heading: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        header: ["var(--font-bricolage)", "system-ui", "sans-serif"],
        pixel: ["var(--font-press-start)", "monospace"],
        mono: ["'JetBrains Mono'", "Menlo", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-brand": "linear-gradient(135deg, #22c55e 0%, #38bdf8 100%)",
      },
      animation: {
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        widest: "0.2em",
      },
    },
  },
  plugins: [],
};

export default config;
