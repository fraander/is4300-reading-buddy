/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rbo": {
          0: "#fef3e3",
          200: "#fee8ca",
          500: "#fcc97e",
          700: "#F99F20",
          900: "#2d2417",
        },
        "rbg": {
          0: "#d2fff5",
          200: "#63B8A5",
          500: "#32B79B",
          700: "#17B790",
          900: "#1e312c",
        },
        "rbp": {
          0: "#f5eaf3",
          200: "#945185",
          500: "#93347E",
          700: "#8D2477",
          900: "#2d212b",
        },
      },
    },
  },
  plugins: [],
};
