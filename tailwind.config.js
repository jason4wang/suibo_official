/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primaryYellow': '#F8EEE3',
        'primaryBlue': '#4990C7',
      }
    },
  },
  plugins: [],
}

