/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple100: "#E0D7FF",
        purple500: "#6A4EC7",
        yellow100: "#FFF7CC",
        yellow500: "#F9C22E",
        pink50: "#F5EDFF",
        black: "#000000",
      },
      fontFamily: {
        dmSans: ["DM Sans", "sans-serif"],
      },
      fontSize: {
        h1: ["24px", "32px"],
        subtitle: ["18px", "28px"],
        body: ["14px", "20px"],
      },
    },
  },
  plugins: [],
};



/* https://tailwindcss.com/docs/font-size */