/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: '#1d4ed8', // blue-700
      accent: '#facc15',  // yellow-400
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
  },
},
  plugins: [],
}