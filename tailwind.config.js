/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "background-image": "url('./images/aboutus.jpg')",
      
      },
    },
  },
  fontFamily: {
    almendra: ["satoshi"],
  },
  plugins: [],
};
