/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        path: "#D9D9D9",
        logoName: "FFFFFF",
        black: "#000000",
        button: "2ED3B7"
      },
      fontFamily: {
        // Add your custom font family here
        'custom': ["Urbanist", "sans-serif"],
      },
      gradientColorStops:{
        heropagecustom: "linear-gradient(to right,#67FFD1,#5BCEE8,#4F9DFF)",
      },
      boxShadow: {
        customlight: '0 4px 4px 0 rgba(0, 0, 0, 0.5)',
        'custom-dark': '0 4px 8px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}

