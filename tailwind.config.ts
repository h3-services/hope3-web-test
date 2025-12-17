import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Kyiv*Type Titling"', 'serif'],
        'content': ['"Josefin Slab"', 'serif'],
      },
      colors: {
        'heading': '#332EB2',
        'content': '#323232',
      },
    },
  },
  plugins: [],
};
export default config;
