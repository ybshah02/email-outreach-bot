import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width',
      },
      colors: {
        purple: {
          50: '#f3e8ff',
          100: '#e9d5ff',
          500: '#a855f7',
        },
      },
    },
  },
  plugins: [],
};
export default config;
