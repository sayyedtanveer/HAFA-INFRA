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
          50: '#fef9f3',
          100: '#fdf3e7',
          200: '#fbe7cf',
          300: '#f9dbb7',
          400: '#f5c89a',
          500: '#d4af37', // Refined gold
          600: '#b8932d',
          700: '#9c7823',
          800: '#6d5519',
          900: '#3e2f0f',
        },
        secondary: {
          50: '#f0f4f8',
          100: '#d9e2f0',
          200: '#c2cde5',
          300: '#6b8dc4',
          400: '#2d5a8c',
          500: '#1a365d', // Deep navy
          600: '#162e47',
          700: '#122639',
          800: '#0e1f2e',
          900: '#0a1623',
        },
        accent: '#f8f6f1', // Cream
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
