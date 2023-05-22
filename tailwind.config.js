/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          colors: {
            primary: '#F8A932',
            secondary: '#00ff00',
            light: '#67e8f9',
            DEFAULT: '#06b6d4',
            dark: '#0e7490',
            accent:"#ccc"
          },
          fontFamily: {
            Aldrich: ['Aldrich'],
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    themes: false,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      {
        mytheme: {
          primary: "#161617",
          secondary: "#00100d",
          accent: "#ff7750",
          neutral: "#161617",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
}
