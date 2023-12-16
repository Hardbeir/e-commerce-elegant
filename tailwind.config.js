/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js}"],
  theme: {

    extend: {
      spacing: {
        '95%': '95%',
      },
      colors: {
        primary: '#FEC75A',
        secondary: '#377DFF',
        neutral: '#141718',
      },

    },
  },
  plugins: [],
}

