/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        13: "repeat(13, minmax(0, 1fr))"
      }
    }
  },
  plugins: [],
  safelist: [{ pattern: /^grid-rows-\d+$/ }, { pattern: /^grid-cols-\d+$/ }, { pattern: /^gap-\d+$/ }]
};
