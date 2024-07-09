/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {width:{
      '120': '30rem'
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
