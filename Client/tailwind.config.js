/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blackColor: '#0A0A0A',
        whiteColor: '#FFFFFF',
        darkGrayColor: '#484848',
        textColor: '#C7C7C7',
        primaryColor: '#D3E97A',
        buttonBlack: '#222222',
        lineColor: '#484848',
        projectColor: '#1A1A1A'
      }
    },
  },
  plugins: [

  ],
}