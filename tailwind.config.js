/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    'bg-green-500',
    'bg-red-500',
    'bg-blue-500',
    'bg-gray-500',
    'hover:bg-green-800',
    'hover:bg-red-800',
    'hover:bg-blue-800',
    'hover:bg-gray-800',
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
