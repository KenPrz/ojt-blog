/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors:{
      "primary": "#FFFFFF",
      "secondary":"#E5F4E3",
      "accent":"#003F91"
    }
  },
  plugins: [],
}