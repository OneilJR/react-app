/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1440px",
    },
    extend: {
      colors: {
        myBlue: "#0A32B3",
        myPink: "#BD365D",
      },
      backgroundImage: (theme) => ({
        pattern:
          "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOTkt4IS8NRopwKJFhuRVgdiDyJHupIVlLg&s')",
      }),
    },
  },
  plugins: [],
};
