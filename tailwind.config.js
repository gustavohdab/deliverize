/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        header: "0px 2px 4px rgba(0, 0, 0, 0.15)",
      },
      colors: {
        primary: "#F4F4F4",
        redPrimary: "#ED3237",
        redSecondary: "#D80000",

        orangePrimary: "#F09035",
        orangeDetail: "rgba(228, 151, 0, 1)",
        orangeDetailLight: "rgba(232, 166, 52, 1)",
        yellowPrimary: "rgba(253, 215, 14, 0.2)",

        yellowDark: "#FEBC10",

        grayDarker: "#656363",

        borderCard: "#686868",

        textPrimary: "#4E4E4E",
        textOrange: "#E49700",
      },
    },
  },
  plugins: [],
};
