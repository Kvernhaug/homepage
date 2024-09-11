import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        recolor: {
          "0%": { background: "red" },
          "33%": { background: "yellow" },
          "66%": { background: "green" },
          "100%": { background: "blue" },
        }
      },
      animation: {
        recoloring: "recolor 1s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
