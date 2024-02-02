/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        CGrey: "#849199",
        CBlue: "#A0C7C4",
        CYellow: "#F5F5C6",
        COrange: "#eebb7a",
        CRed: "#AF625A",
      },
      fontFamily: {
        sans: ['"Poppins", sans-serif', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
