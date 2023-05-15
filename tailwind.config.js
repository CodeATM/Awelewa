/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '780px',
      lg: '1024px',
    },
    extend: {
          colors: {
          background2: "#040f0f",
          textbg: "#070c0d",
        },
    },
  },
  plugins: [],
}
