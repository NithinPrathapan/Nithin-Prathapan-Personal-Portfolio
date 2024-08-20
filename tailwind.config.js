/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2cbce9",
        red: "#dc4492",
        yellow: "#fdcc49",
        grey: "#ededed",
        deep_blue: "#010026",
        dark_grey: "#757575",
        opaque_black: "rgba(0,0,0,0.35)",
        backgroundImage: (theme) => ({
          "gradient-rainbow":
            "linear-gradient(81.66deg,#00b5ee 7.21%, #ff45a4 45.05%, #ffba00 78.07%) ",
          "gradient-rainblue":
            "linear-gradient(90deg,#24cbff 14.53%,#fc59ff 69.36%, #ffbd0c 117.72%) ",
        }),
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
        burtons: "burtons",
        dancing: "Dancing Script",
        poppins: "Poppins",
      },
      container: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')",
      },
      screens: {
        xs: "480px",
        sm: "786px",
        md: "1060px",
      },
    },
  },
  plugins: [],
};
