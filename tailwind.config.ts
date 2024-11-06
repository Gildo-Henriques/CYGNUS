import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
          raven: {
          100: "#0a0a0a",
          200: "#606060",
          300: "#7a7a7a",
          400: "#939393"
        }
      }
    }
  },

  plugins: [require("@tailwindcss/typography")]
} as Config;
