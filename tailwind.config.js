/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: "'Pacifico', cursive"
      },
      colors: {
        brand: {
          primary: "#FC1956",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
