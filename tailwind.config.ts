import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'heading': ['"Inter"', 'sans-serif'],
        'content': ['"Inter"', 'sans-serif'],
        'jaini': ['Jaini', 'cursive', 'sans-serif'],
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
