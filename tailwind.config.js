/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js}"],
  theme: {

    extend: {
      spacing: {
        '95%': '95%',
      },
      colors: {
        primary: '#459068',
        secondary: '#377DFF',
        neutral: '#141718',
      },

    },
  },
  plugins: [],
}

