const defaultTheme = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '3xs': '10px',
        '2xs': '11px',
        '2sm': '13px',
        tiny: '15px',
        md: '17px',
      },
    },
  },
  plugins: [
    plugin(({ addComponents }) => {
      addComponents({
        '.my-scrollbar': {
          '&::-webkit-scrollbar': {
            width: 12,
            height: 12,
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#05050f',
            borderRadius: '9999px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: '#05050fb0',
          },
          '&::-webkit-scrollbar-corner': {
            display: 'none',
          },
        },
        '.my-scrollbar-8': {
          '&::-webkit-scrollbar': {
            width: 8,
            height: 8,
          },
        },
        '.my-scrollbar-10': {
          '&::-webkit-scrollbar': {
            width: 10,
            height: 10,
          },
        },
      });
    }),
  ],
};
