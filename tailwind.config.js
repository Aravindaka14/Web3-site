/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        path: "#D9D9D9",
        logoName: "#FFFFFF",
        black: "#000000",
        buttonborder: "#2ED3B7",
        buttonBorderDark:"#0E9384",
        cardborder: "#D2D2D2",
        footerborder: "#7D8595",
        secondMainCard: "#111213",
        wordings: "#A5A5A6",
        secondMainCardLight: "#17181A",
        sourceCode: "#D2D2D2",
        ellipseColor: "#0071FF",
        hoverColorChange: "#99F6E0",
        navBarColor:"#1D1E20",
        fontGray:"#777879",
        purple:"#8247E5",
        orangeRed:"#D64F4A",
        skyBlue:"#6FBCF0",
      },
      fontFamily: {
        urbanist: ["Urbanist", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        sourceCodePro: ["Source Code Pro", "monospace"]
      },
      fontSize: {
        exact: '5.25rem',
      },
      gradientColorStops: {
        heropagecustom: "linear-gradient(to right,#67FFD1,#5BCEE8,#4F9DFF)",
        tradeNowSection:"linear-gradient(to right,#033B4C,#0E9384)"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #033B4C, #0E9384)',
      },
      borderImage: {
        'gradient-to-br': 'linear-gradient(to bottom right, #033B4C, #0E9384)',
      },
      boxShadow: {
        customlight: '0 3px 3px 0 rgba(46, 211, 183, 1)',
        insetcustomlight:'inset 0 -12px 9px 5px rgba(46, 211, 183, 1)',
        customdark: '0 3px 3px rgba(14, 147, 132, 1)',
        glow: '0 12px 15px -10px rgba(14, 147, 132, 1)',
      },
      dropShadow: {
        heroImageShadow:"5px 5px 15px rgba(79, 157, 255, 1)",
        customColor: '2px 15px 10px rgba(14, 147, 132, 1)',
        custom: '10px 10px 5px rgba(0, 0, 0, 0.75)',
      },
      opacity: {
        opacity75: "75%",
      },
      height: {
        h452: "452px",
        h11:"11.55vh",
        h23: "23%",
        h40: "40%",
        h56:"56.88%",
        h78:"78%",
        h50:"50%"
      },
      width: {
        w6:"6.11vw",
        w408: "408px",
        w25: "25.8%",
        w28:"28.33%",
        w37:"37.22%",
        w50: "50%",
        w60: "60.5%",
        w63: "63.1%",
        w94:"93.89%"
      },
      lineHeight: {
        "3p5": "3.5rem"
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
    },
  },
  plugins: [],
}

