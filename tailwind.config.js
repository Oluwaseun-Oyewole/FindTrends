/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
        Quicksand: ["Quicksand", "sans-serif"],
      },

      backgroundImage: {
        "hero-bg": "url('/public/assets/img/Bg-hero.png')",
      },

      colors: {
        body: "#8B8B8B",
        secondary: "#A8FF35",
        twitter: "#1DA1F2",
      },
    },
  },
  plugins: [],
};