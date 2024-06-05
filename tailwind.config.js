/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 30px rgba(0, 0, 0, 0.1)',
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(5px)',
      },
      colors: {
        customPurple: '#B580D1',
        primary: "#F3CCFF",
        secondary: "#FF0226",
      },
      screens: {
        'msm': '360px',
        'xsm': '375px',
        'vsm': '393px',
        'small': '430px',
        'tablet': '570px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        'large': '1343px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('tailwindcss-filters'),
  ],
}

