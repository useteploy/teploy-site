import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{tsx,ts,jsx,js,md,mdx}", "./index.html"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bp: {
          bg: "#000000",
          accent: "#00e5ff",
          line: "#4a9eff",
          green: "#00e676",
          orange: "#ff9100",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
} satisfies Config;
