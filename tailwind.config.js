/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'xs': '270px',
        'xxl': '1600px'
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },

  plugins: [
    require('daisyui'),
  ],
}

