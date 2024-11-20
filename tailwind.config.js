/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {}
  },
  plugins: [],
  safelist: [{ pattern: /^grid-rows-\d+$/ }, { pattern: /^grid-cols-\d+$/ }, { pattern: /^gap-\d+$/ }]
};
