/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': '#040721',
        'background': '#f2f4fe',
        'darkBackground': '#01030e',
        'primary': '#2643e6',
        'secondary': '#e979f0',
        'accent': '#eb4abe',
       },
       
    },
    darkMode: 'class',
   
  },
  plugins: [],
}

