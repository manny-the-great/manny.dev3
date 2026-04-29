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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          hover: "var(--card-hover)",
        },
        border: "var(--border)",
        muted: "var(--muted)",
      },
      fontFamily: {
        sans: ["var(--font-bricolage)", "var(--font-poppins)", "system-ui", "sans-serif"],
        heading: ["var(--font-bricolage)", "var(--font-poppins)", "system-ui", "sans-serif"],
        header: ["var(--font-bricolage)", "var(--font-poppins)", "system-ui", "sans-serif"],
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
