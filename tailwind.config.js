/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      Roboto : "var(--Roboto)",
    },
    extend: {
      colors: {
        bg_color: "var(--bg_color)",
        Btn_color: "var(--Btn_color)",
        Border_color: "var(--Border_color)",
      },
    },
  },
  plugins: [],
};