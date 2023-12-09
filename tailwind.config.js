/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffcd42",
        secondary: "#ffd35c",
        text: "#222222",
      },
      fontWeight: {
        min: 400,
        avg: 600,
        max: 800,
      },
    },
  },
  plugins: [],
};
