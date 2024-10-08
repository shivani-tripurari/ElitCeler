/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      screens: {
        'sam-fold':'608px',
        'md-custom': '700px' ,
        'tab':'768px',
        'laptop': '1300px'// Another example
      },
    },
  },
  plugins: [],
}

