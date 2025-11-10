/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#7a0e74",
        primary: "#f4f4f4",
        cards: "fff",
      },
      fontFamily: {
        titlefont: ["Museo", "sans-serif"],
      },
    },
  },
  plugins: [],
};
