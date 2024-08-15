const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      theme: {
        keyframes: {
          fadeIn: {
            "0%": { opacity: 0 },
            "100%": { opacity: 1 },
          },
          slideUp: {
            "0%": { transform: "translateY(20px)", opacity: 0 },
            "100%": { transform: "translateY(0)", opacity: 1 },
          },
        },
        animation: {
          fadeIn: "fadeIn 1s ease-out",
          slideUp: "slideUp 1s ease-out",
        },
      },
    },
  },
  // colors: {
  //   bgblue: "#0f172a",
  //   bgblue2: "#d1d5db",
  //   nvgb: "#4b5563",
  //   white: "#e4e4e7",
  //   blue: "#1e40af",
  //   barklight: "#7e22ce",
  //   pink: "#db2777",
  //   lightblue: "#3b82f6",
  // },
  plugins: [],
};
