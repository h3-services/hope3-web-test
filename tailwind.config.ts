import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
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
