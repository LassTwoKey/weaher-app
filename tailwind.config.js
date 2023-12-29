/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: '1rem',
      screens: {
        sm: '530px',
        md: '530px',
        lg: '530px',
        xl: '930px',
        '2xl': '930px',
      },
    },
  },
  plugins: [],
} 

