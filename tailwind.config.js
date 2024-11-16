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
      boxShadow:{
        "pink":'0px 6px 0px 0px rgba(250,41,100,1)',
        "dark":'0px 6px 0px 0px rgba(45,57,75,1)',
      },
    },
  },
  plugins: [],
}

