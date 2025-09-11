/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0a192f',
        'accent': '#64ffda',
        'text-light': '#ccd6f6',
        'text-dark': '#8892b0',
      },
      fontFamily: {
        'sans': ['Open Sans', 'sans-serif'],
        'mono': ['Montserrat', 'monospace'],
      },
    },
  },
  plugins: [],
}