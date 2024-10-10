/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
   fontFamily : {
    sans : ['Poppins', 'sans-serif']
   }, 
   colors : {
    'nav-blue' : '#4864baf2',
    'nav-lightblue' : '#8fb8def2',
    'social-black' : '#212121',
    'foot-black' : '#151414',
    'foot-info-black' : '#191919'
  },
  width: {
    'fixed-logo': '100px',
    '100' : '500px',
    'card' : '32.25rem'
  }, 
  padding : {
    '2.75' : '11px',
    '30' : '120px'
  },
  height : {
    '35' : '35rem',
    '100' : '500px',
    'card' : '30rem'
  },
  fontSize : {
    '6.25xl' : '64px'
  },
  margin : {
    '15' : '60px'

  }  
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

