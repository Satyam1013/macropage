import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-bebas)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        body: ["var(--font-dm)", "sans-serif"],
      },
      colors: {
        cream: {
          DEFAULT: "#f5f3ee",
          100: "#eeece6",
          200: "#e2dfd8",
        },
        ink: {
          DEFAULT: "#111111",
          soft: "#777777",
          border: "#d8d5cc",
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
