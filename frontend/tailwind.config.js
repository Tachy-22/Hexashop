/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        "5xl": "-5px 22px 22px -7px rgba(89,85,85,0.75)",
      },
      colors: {
        primary: "#e9e9e9",
        secondary: "#d9d9d9",
        dark: "#1e1e1e",
      },
    },
  },
  plugins: [],
};
