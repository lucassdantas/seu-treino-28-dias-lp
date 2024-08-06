/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "orange-seu-treino":"#FFB900",
        "yellow-seu-treino":"#F2A50C",
      }
    },
  },
  plugins: [],
}

