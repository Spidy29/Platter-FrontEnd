/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui"],
        body: ["Inter", "system-ui"],
        display: ["Instrument Sans", "system-ui"],
      },
    },
  },
  plugins: [],
};
