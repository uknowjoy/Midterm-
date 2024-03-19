/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function({addutilities}) {
  addutilities ({
    '.rotate-y-180': {
      transform: "rotateY(180deg)"
    },
    '.-rotate-y-180': {
      transform: "-rotateY(-180deg)"
    }
  })
})

module.exports = {
  content: ["./disc/*.{html,js}"],

  theme: {
    extend: {
      colors:{
      "color-primary": "#010516",
      "color-primary-light": "#020726",
      "color-primary-dark": "#010417",
      "color-secondary": "#ff7d3b",
      "color-gray": "#333",
      "color-white": "#fff",
      "color-blob": "#a427df",
      }
    },
    container:{
      center: true,
      padding:{
        default: '20PX',
        md: "50px"
      }
    }
  },
  plugins: [rotateY],
}

