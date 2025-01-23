import { text } from "stream/consumers";
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
          "16.7%": { background: "orange" },
          "33.4%": { background: "yellow" },
          "50.1%": { background: "green" },
          "66.8%": { background: "blue" },  
          "83.5%": { background: "indigo" },
          "100%": { background: "violet" },
        }
      },
      animation: {
        recoloring: "recolor 3s linear infinite",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        text: "var(--text-color)",
        season: "var(--color-season)",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
export default config;
