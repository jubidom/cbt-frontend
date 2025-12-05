/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#916894",
        primary: "#f4f4f4",
        cards: "#fff",
        barchart: "#f7afe5",
      },
      fontFamily: {
        titlefont: ["Museo", "sans-serif"],
      },
      backgroundImage: {
        math: "url(./src/assets/maths.jpg)",
        english: "url(./src/assets/english.jpg)",
        chemistry: "url(./src/assets/chemistry.jpg)",
        physics: "url(./src/assets/physics.jpg)",
        biology: "url(./src/assets/biology.jpg)",
        geography: "url(./src/assets/geography.jpg)",
        economics: "url(./src/assets/economics)",
        govt: "url(./src/assets/govt.jpg)",
        literature: "url(./src/assets/literature.jpg)",
        agric: "url(./src/assets/agric.jpg)",
      },
    },
  },
  plugins: [import("tailwind-scrollbar-hide")],
};
