/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image": "url('../images/nurse.jpg')",
        
      },
    },
  },
  fontFamily: {
    almendra: ["satoshi"],
  },
  plugins: [],
};
