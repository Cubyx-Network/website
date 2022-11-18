/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      accentColor: "#23AA08",
      colors: {
        text: {
          primary: {
            DEFAULT: "#000000",
            light: "#000000",
            dark: "#FFFFFF",
          },
          secondary: {
            DEFAULT: "#23AA08",
          },
          third: {
            DEFAULT: "#9d9d9d",
          },
        },
        background: {
          primary: {
            DEFAULT: "#FFFFFF",
            light: "#FFFFFF",
            dark: "#0a0a0a",
          },
          secondary: {
            DEFAULT: "#D8D8D8",
            light: "#D8D8D8",
            dark: "#202020",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
