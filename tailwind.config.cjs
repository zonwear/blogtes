/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        // use any standard tailwind colors from here https://tailwindcss.com/docs/customizing-colors
        // or generate with https://uicolors.app/create
        // note: for this template, primary is only used for prose (text / markdown in the Bio)
        primary: colors.indigo,
        base: colors.neutral,
        btn: {
          light: {
            DEFAULT: colors.neutral[100],
            text: colors.neutral[900],
            hover: colors.neutral[200],
          },
          dark: {
            DEFAULT: colors.neutral[900],
            text: colors.neutral[200],
            hover: colors.neutral[800],
          },
        },
      },
    },
    fontFamily: {
      // satashi font can be enabled in src/layouts/BaseHead.astro
      sans: [
        "Satoshi",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
      mono: [
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        "Liberation Mono",
        "Courier New",
        "monospace",
      ],
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
