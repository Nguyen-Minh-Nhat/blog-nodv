/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        rgb: "rgba(117, 117, 117, 1)",
      },
      padding: {
        "16%": "16%",
      },
      height: {
        "90vh": "90vh",
      },
      width: {
        "41vw": "41vw",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
