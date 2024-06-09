/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        red: "#FF5555",
        black: "rgba(0,0,0,1)",
        gray: "rgba(0,0,0,0.6)",
        lightGray: "rgba(0,0,0,0.1)",
        white: "#FFFFFF",
        
      }
    },
  },
  plugins: [],
}