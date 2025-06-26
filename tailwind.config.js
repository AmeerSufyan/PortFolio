export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <- your Vite React source files
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
        sans: ['ui-sans-serif', 'system-ui'], 
          dancing: ['"Dancing Script"', 'cursive'],
      },
    },
  },
  plugins: [],
}
