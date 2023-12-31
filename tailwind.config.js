/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#030723",
        secondary: "#3b82f6",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
