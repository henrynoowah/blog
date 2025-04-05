/** @type {import('tailwindcss').Config} */

const COLOR_DARK = '#1E1E1E'
const COLOR_LIGHT = '#FFFFFF'
const COLOR_PRIMARY = '#2D5A60'
const COLOR_SECONDARY = '#64EbDE'


module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        inherit: 'inherit',
        transparent: 'transparent',
        primary: {
          DEFAULT: COLOR_PRIMARY
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
        }
      },
      screens: {
        mouse_hover: { raw: '(hover: hover)' }
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
