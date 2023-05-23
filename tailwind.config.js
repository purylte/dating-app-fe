/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [require("daisyui")],
  theme: {
    extend: {
      fontSize: {
        paragraph: "1rem",
        caption: "0.75rem",
        header: "2.25rem",
        subheader: "1.25rem",
        button: "1.125rem",
      },
    },
  },
  daisyui: {
    themes: ["pastel"],
  },
};
