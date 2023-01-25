/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        regular: "MontrealRegular,sans-serif",
        book: "MontrealBook,sans-serif",
        mthin: "MontrealThin,sans-serif",
      },
      fontSize : {
        xxs : ['.625rem', {lineHeight: '1rem'}]
      }
    },
  },
  plugins: [],
}
