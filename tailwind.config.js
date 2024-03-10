/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {

      fontFamily: {
        "principal": ['"Be Vietnam Pro"', 'sans-serif']
      },

      colors: {
        "sat-red": "#F21137",
        "sat-hover-red": "#ee425e",
        "dark-red": "#68020F",
        "orange": "#F7622D",
        "no-black": "#030303",
        "semi-gray": "#242726",
        "dark-gray": "#221f1f",
        "clear-gray": "#2E3233",
        "no-white": "#FFFFFE",
      },

      backgroundImage: {
        "close-menu": "url('../images/icon-close.svg')",
        "close-white-menu": "url('../images/icon-close-white.svg')",
        "open-menu": "url('../images/icon-hamburger.svg')"
      }

    },
  },
  plugins: [],
}

