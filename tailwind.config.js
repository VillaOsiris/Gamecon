const { transform } = require("typescript");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        show: {
          "100%": { transform: "translate(0)", opacity: "1" },
        },
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      varela: ["Varela Round", "sans-serif"],
    },
  },
  plugins: [],
};
