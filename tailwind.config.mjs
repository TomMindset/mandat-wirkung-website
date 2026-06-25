/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        paper: "#f7f4ef",
        linen: "#ede7dd",
        graphite: "#181c1f",
        slategraph: "#273038",
        petrol: "#08393f",
        ink: "#071417",
        copper: "#a66f45",
        mist: "#d8d1c7"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ],
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"]
      },
      boxShadow: {
        quiet: "0 24px 80px rgba(7, 20, 23, 0.08)"
      }
    }
  }
};
