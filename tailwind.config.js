/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      accentColor: "#23AA08",
      colors: {
        light: {
          primary_text_color: "#000000",
          secondary_text_color: "#23AA08",
          third_text_color: "#adadad",
          primary_background_color: "#FFFFFF",
          secondary_background_color: "#D8D8D8",
        },
        dark: {
          primary_text_color: "#FFFFFF",
          secondary_text_color: "#23AA08",
          third_text_color: "#adadad",
          primary_background_color: "#070707",
          secondary_background_color: "#202020",
        },
      },
    },
  },
  plugins: [],
};
