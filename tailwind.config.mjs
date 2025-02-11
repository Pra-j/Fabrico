/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light_gray: "#f6f6f6",
        gray: "#d0d0d0",
        black: "#1a1a1a",
        white: "#ffffff",
      },
      fontSize: {
        feature: ["3rem", "1"],
        heading: ["3rem", "1"],
      },
    },
  },
  plugins: [],
};
