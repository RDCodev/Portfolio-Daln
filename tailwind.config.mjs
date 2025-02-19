const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'selector',
  corePlugins: {
    aspectRatio: true
  },  
  theme: {
    extend: {
      colors: {
        'woodsmoke': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#5d5d5d',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#171717',
        },
        'carnation': {
          '50': '#fef2f2',
          '100': '#fee2e2',
          '200': '#fdcbcb',
          '300': '#fba7a6',
          '400': '#f67170',
          '500': '#ed4746',
          '600': '#da2928',
          '700': '#b71f1e',
          '800': '#971e1d',
          '900': '#7e1f1e',
          '950': '#440b0b',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        appear: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
       },
       animation: {
          appear: "appear 1s ease-in-out",
       },
    }    
  },
  plugins: [
    require("@tailwindcss/aspect-ratio")
  ],
}
