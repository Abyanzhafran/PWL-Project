module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B1B1E',
          lighter: '#373F51',
        },
        secondary: {
          DEFAULT: '#A9BCD0',
          lighter: '#D8DBE2',
        },
        tertriary: {
          DEFAULT: '#1B98E0',
          lighter: '#58A4B0',
        },
        skyNight: '#13293D',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: false,
  },
};
