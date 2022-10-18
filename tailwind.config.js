/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        LuckiestGuy: ["Luckiest Guy", "cursive"],
      },
      colors: {
        theme: "#ff4040",
      },
    },
  },
  plugins: [],
};
