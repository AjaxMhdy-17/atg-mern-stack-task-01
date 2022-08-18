/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        font_ibm : ['IBM Plex Sans', 'sans-serif']
      },
      colors : {
        custom_black : "#2E2E2E" , 
        custom_blue : '#2F6CE5' , 
        custom_red : '#E56135'
      },
      fontWeight : {
        font_semi_bold : 900 
      }
    },
  },
  plugins: [],
}
