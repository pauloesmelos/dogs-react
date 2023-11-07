/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "spectral": ['Spectral', 'serif']
      }
    },
    keyframes: {
      toLeft: {
        "from": { transform: "translate3d(-5rem,0,0)" },
        "to": { transform: "translate3d(0,0,0)" }
      }
    },
    animation: {
      toLeft: "toLeft .3s forwards"
    }
  },
  plugins: [],
}