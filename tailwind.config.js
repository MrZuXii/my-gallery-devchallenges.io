/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      gray: {
        1: "#E5E5E5",
        2: "#BDBDBD",
        3: "#A9A9A9",
        4: "#4E5150",
        5: "#B9BDCF",
      },
    },
    borderRadius: {
      DEFAULT: "12px",
    },
    fontSize: {
      low: "1rem",
      default: "1.2rem",
      medium: "1.4rem",
    },
    fontFamily: {
      DEFAULT: "Montserrat",
    },
  },
};
