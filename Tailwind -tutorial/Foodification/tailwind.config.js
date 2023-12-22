/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ffe0e0",
          200: "#ffc1c1",
          300: "#ffa1a1",
          400: "#ff8282",
          500: "#ff6363",
          600: "#cc4f4f",
          700: "#993b3b",
          800: "#662828",
          900: "#331414"
        },
        secondary: {
          100: "#f9f9f7",
          200: "#f3f3ee",
          300: "#eeeee6",
          400: "#e8e8dd",
          500: "#e2e2d5",
          600: "#b5b5aa",
          700: "#888883",
          800: "#5a5a55",
          900: "#2d2d2b"
        }
      },
      fontFamily: {
        nunito: ["Nunito", "sans-serif"]
      }
    }
  },
  plugins: []
};
