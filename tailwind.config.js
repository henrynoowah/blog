/** @type {import('tailwindcss').Config} */
module.exports = {
  enabled: process.env.NODE_ENV === "production",
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
