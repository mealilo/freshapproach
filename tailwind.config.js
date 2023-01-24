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
      'Orange': '#F99A01',
      'greenText': '#0E8044',
      'blueGreenCustom': '#04676A',
    },
  },
  plugins: [],
}
}
