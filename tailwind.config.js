/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      background: "#080808",
      bgGray: "#0f1011",
      white: "#eeeffc",
      grey: "#858699",
      btn: "#575bc7",
      inprogress: "#F2C94C",
      done: "#5e6ad2",
      canceled: "#95A2B3",
      urgent: "#F2994A",
      bug: "#EB5757",
      feature: "#BB87FC",
      improvement: "#4EA7FC",
      border: "#3f454d",
      team: "#6f9001",
      hover: "#1c1f25",
      account: "#1b1c1f",
      accounthover: "#2c3039",
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
