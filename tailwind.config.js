/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#181C14',
        'secondary': '#3C3D37',
        'accent': '#697565',
        'text': '#ECDFCC',
      },
    },
  },
  plugins: [],
}
