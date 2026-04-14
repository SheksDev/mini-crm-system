/** @type {import('tailwindcss').Config} */

export default {
  theme: {
    extend: {
      fontFamily: {
        body: ["Inter", "sans-serif"],
        heading: ["Manrope", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
      colors: {
        white: "#F9FAFB",
        "dark-black": "#191C1D",
        "light-black": "#5C5F60",
        gray: "#AAABAC",
        "dark-blue": "#346EF6",
        "light-blue": "#8CA8FF",
        orange: "#BC4800",
        red: "#360F00",
        "dark-pink": "#FFDBCD",
        "light-pink": "#FFEDE7",
        "dark-purple": "#6275AF",
        "light-purple": "#B4C5FF",
      }
    },
  },
  plugins: [],
};