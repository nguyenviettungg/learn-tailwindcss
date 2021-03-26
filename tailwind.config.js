module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#037ffc",
        secondary: {
          100: "#296eb3",
          200: "#0b1824",
        },
      },
      fontFamily: {
        body: ["Kiwi Maru"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
