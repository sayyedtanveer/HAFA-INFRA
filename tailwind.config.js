/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f9f5f0',
          100: '#f3ebe1',
          200: '#e7d7c3',
          300: '#dbc3a5',
          400: '#cfaf87',
          500: '#c39a69', // Main gold
          600: '#9c7d54',
          700: '#76603f',
          800: '#50422a',
          900: '#2a2415',
        },
        secondary: '#000000', // Black
        accent: '#ffffff', // White
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
