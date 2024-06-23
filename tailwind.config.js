/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      padding: {
        '0.3': '0.3rem',
      },
      borderRadius: {
        '0.5': '0.5rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};