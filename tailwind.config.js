/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {width:{
      '120': '30rem',
      '140': '35rem',
      '144': '36rem',
      '148': '37rem',
      '152': '38rem',
      '160': '40rem'
      
    },
    height:{
        '120': '30rem',
        '130': '32rem',
      '140': '35rem',
      '144': '36rem',
      '148': '37rem',
      '152': '38rem',
      '160': '40rem'
    },
    textAlign: {
      justify: 'justify',
    },},
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '2rem',
      'full': '9999px',
      'large': '12px',
    },
    
  },
  plugins: [],
}
