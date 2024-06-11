/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'card': '8px 8px 11px -7px rgba(0,0,0,0.66)',
        'lastCard': '-3px 4px 18px -5px rgba(0,0,0,0.75)',

      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(5px)',
      },
      colors: {
        customPurple: '#B580D1',
        primary: "#f5e1fb",
        secondary: "#FF0226",
        iconBg: '#b580d11a',
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

