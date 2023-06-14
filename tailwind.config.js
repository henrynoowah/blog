/** @type {import('tailwindcss').Config} */


const COLOR_PRIMARY = "#" + process.env.COLOR_PRIMARY
const COLOR_SECONDARY = "#" + process.env.COLOR_SECONDARY
const COLOR_DARK = "#" + process.env.COLOR_DARK
const COLOR_LIGHT = "#" + process.env.COLOR_LIGHT

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        inherit: 'inherit',
        transparent: 'transparent',
        primary: {
          DEFAULT: COLOR_PRIMARY,
        },
        secondary: {
          DEFAULT: COLOR_SECONDARY
        },
        dark: {
          DEFAULT: COLOR_DARK
        },
        light: {
          DEFAULT: COLOR_LIGHT
        },
        background: {
          DEFAULT: 'rgb(var(--color-background) / <alpha-value>)'
        },
        section: {
          DEFAULT: 'rgb(var(--color-section) / <alpha-value>)'
        },
        card: {
          DEFAULT: 'rgb(var(--color-card) / <alpha-value>)'
        },
        pop: {
          DEFAULT: 'rgb(var(--color-pop) / <alpha-value>)'
        },
        overlay: {
          DEFAULT: 'rgb(var(--color-overlay) / <alpha-value>)'
        },
      },
      screens: {
        'mouse_hover': { 'raw': '(hover: hover)' }
      },
    },
  },
  plugins: [],
}


