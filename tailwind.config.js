/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pacifico: "'Pacifico', cursive"
      }
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
