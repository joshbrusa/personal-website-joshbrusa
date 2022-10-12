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
        sacramento: ["Sacramento", "cursive"],
      },
      backgroundImage: {
        "index-background": "url('../public/background.jpg')",
      },
      textDecorationColor: {
        color: "#4C8C49",
      },
    },
  },
  plugins: [],
};
