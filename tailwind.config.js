const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      transitionDelay: {
        0: "0ms",
        250: "250ms",
        350: "350ms",
        450: "450ms",
        500: "500ms",
        550: "550ms",
        650: "650ms",
        750: "750ms",
        850: "850ms",
        950: "950ms",
        1000: "1000ms",
        1050: "1050ms",
        1150: "1150ms",
        1250: "1250ms",
        1350: "1350ms",
        1500: "1500ms",
        1750: "1750ms",
        1850: "1750ms",
        2000: "2000ms",
        2250: "2250ms",
        2500: "2500ms",
        2750: "2750ms",
        3000: "3000ms",
        720: "500ms",
        740: "600ms",
        760: "700ms",
        780: "800ms",
        800: "900ms",
        1500: "1000ms"
      }
    },
    screens: {
      mobile: { min: "350px", max: "639px" },
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px"
    },
    fontFamily: {
      sans: ["Fira\\ Code", ...defaultTheme.fontFamily.sans]
    },
    colors: {
      main: "#1d2d50",
      ["main-light"]: "#2d5680",
      secondary: "#fcdab7",
      description: "#d5d5d5",
      ["description-dark"]: "#959595",
      ["card-main"]: "#263b69",

      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      green: colors.emerald,
      blue: colors.blue,
      indigo: colors.indigo,
      purple: colors.violet,
      pink: colors.pink,
      teal: colors.teal,
      orange: colors.orange
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
