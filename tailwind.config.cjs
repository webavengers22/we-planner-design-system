/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './.storybook/**/*.{js,jsx,ts,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        common: {
          white: '#FFFFFF',
          black: '#1A1712', // 메인/블랙1
        },
        orange: {
          50: '#FEEFE6', //brand color
          100: '#FFE3DA',
          200: '#FFC7B4',
          300: '#FF855B',
          400: '#FF6C34',
          500: '#FF4500',
          600: '#E33400',
          700: '#CC2200',
        },
        teal: {
          50: '#E0F2F1', //brand color
          100: '#82DFDB',
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#009688',
          600: '#00796B',
          700: '#00695C',
        },
        gray: {
          100: '#FAF6EC',
          200: '#F4EFE3',
          300: '#E9E3D7',
          400: '#C6C1B5',
          500: '#A8A297',
          600: '#7E796E',
          700: '#6A655A',
          800: '#4A453C',
          900: '#28241B',
        },
        status: {
          success: '#109867',
          info: '#127CB3',
          warning: '#DC1B2C',
          error: '#DC1B2C',
        },
      },
    },
  },
  plugins: [],
};
