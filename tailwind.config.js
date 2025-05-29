/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#3b3b3b',
        parchment: '#eaead8',
        goldish: '#d1b520',
        vermilion: '#d14d3b',
        pine: '#4c6b63',
      },
    },
  },
  plugins: [],
};
