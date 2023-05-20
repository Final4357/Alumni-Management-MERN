/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",

  theme: {
    extend: {
      spacing: {
        "big": "35rem"
      },
      colors: {
        primary: { "50": "#eff6ff", "100": "#dbeafe", "200": "#bfdbfe", "300": "#93c5fd", "400": "#60a5fa", "500": "#3b82f6", "600": "#2563eb", "700": "#1d4ed8", "800": "#1e40af", "900": "#1e3a8a" }
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      nunito: ['Source Sans Pro','Helvetica Neue','Helvetica','Arial','sans-serif']
    },
    container: {
      padding: '2rem'
    },
  },
  plugins: [require("daisyui")],
};

