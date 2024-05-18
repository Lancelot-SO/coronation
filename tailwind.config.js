/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customPurple: '#B580D1',
        primary: "#F3CCFF",
        secondary: "#FF0226",
      },
    },
  },
  plugins: [],
}

