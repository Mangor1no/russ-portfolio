/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#111827',
      secondary: '#415469',
      highlight: '#2dd4bf',
      ...colors,
    },
    extend: {},
  },
  plugins: [],
}
