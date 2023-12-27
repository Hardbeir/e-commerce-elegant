/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html","./src/**/*.{html,js}"],
  theme: {

    extend: {
      spacing: {
        '95%': '95%',
        '5%': '5%',
      },
      colors: {
        primary: '#459068',
        secondary: '#377DFF',
        neutral: '#141718',
        grayLight: '#F3F5F7',
        grayText: '#E8ECEF',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        grayLight: '#F3F5F7',
      },

    },
  },
  plugins: [],
}

