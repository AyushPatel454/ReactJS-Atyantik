/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Pacifico"', 'cursive'] // ---> Pacifico is google font that wise write in double quote "" inside the single quote ''.
      }
    },
  },
  plugins: [],
}

