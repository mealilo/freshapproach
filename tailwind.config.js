/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}',
  './components/**/*.{js,jsx,ts,tsx}'
],

  theme: {
    extend:{
      colors: {
        'closecropgreen':'#08302F',
        'Sage': '#7FA966',
        'sageAnimate': '#71965B',
        'Orange': '#F99A01',
        'orangeAnimate': '#EF9505',
        'greenText': '#0E8044',
        'blueGreenCustom': '#04676A',
        'customPurple': "#792299",
        'anotherGreen': "#5F8543",
        'nearBlack': "#151B29",
      },
      fontFamily: {
        'Sahitya': ["Sahitya","serif"],
        'Poppins': ["Poppins", "serif"],
      },
      height: {
        '700': '700px',
      }
    },
    plugins: [],
  }
}
