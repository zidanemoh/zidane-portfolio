/** @type {import('tailwindcss').Config} */
const path = require('path');

module.exports = {
  content: [path.join(__dirname, 'src/**/*.{js,jsx}')],
  mode: process.env.NODE_ENV === 'production' ? 'jit' : 'aot',
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
