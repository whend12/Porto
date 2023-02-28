/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
    sm: '640px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    },
    extend: {   
      backgroundImage: {
        about: "url('./assets/meremove.png')",
      },
    },
    fontFamily:{
      'poppins': ['Poppins', 'sans-serif'],
      'tertiary': ['Aldrich'],
    },   
  },
  plugins: [],
}