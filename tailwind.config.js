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
          DEFAULT: '#2D5A60',
          // DEFAULT: '#6A9286',
        },
        secondary: {
          DEFAULT: '#4A6F76'
        },
        dark: {
          DEFAULT: '#1E1E1E'
          // DEFAULT: '#090E19'
        },
        light: {
          DEFAULT: "#E9E6DF"
        },
      },
      screens: {
        'mouse_hover': { 'raw': '(hover: hover)' }
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
