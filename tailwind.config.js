/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        inherit: 'inherit',
        transparent: 'transparent',
        primary: {
          DEFAULT: '#6A9286',
        },
        secondary: {
          DEFAULT: '#4A6F76'
        },
        dark: {
          DEFAULT: '#090E19'
        },
        light: {
          DEFAULT: "#E9E6DF"
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
