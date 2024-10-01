import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      container: {
      center: true,
      padding: "2rem",
      },
      colors: {
        primary: "#481349",

        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "purple-bg":  "url('/assets/img/172.jpg')"
      },
      fontFamily: {
        sans: ['var(--font-garait)'],
        montaga: ['var(--font-montaga)']
      }
    },
  },
  plugins: [],
};
export default config;
