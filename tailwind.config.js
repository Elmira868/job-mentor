/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "primary-blue":"#2d394b",
        "primary-pink":"#fa2964",
      },
      fontFamily:{
        "vazir-Light":"vazir-Light",
        "vazir-Regular":"vazir-Regular",
        "vazir-Medium":"vazir-Medium",
        "vazir-Bold":"vazir-Bold",
        "vazir-ExtraBold":"vazir-ExtraBold"
      },
    },
  },
  plugins: [],
}

