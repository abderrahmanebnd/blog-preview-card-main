/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily:{
      'Figtree': ['Figtree', 'sans-serif']
    },
    extend: {
      colors: {
      "primary": 'hsl(var(--primary-yellow))',
      }
    },
  },
  plugins: [],
}