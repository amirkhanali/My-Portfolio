/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        blackColor: "#0e0d0d",
        redColor:"#e72626",
        lightBlackColor:"#453f3f"
      }
    }
  },
  plugins: [],
}

