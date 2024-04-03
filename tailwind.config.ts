import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        'calc': 'calc',
      },
      colors: {
        'background-200': '#F6F5ED',
        'background-400': '#F1EFE6',
        'dark': '#000000',
        'gold':{
          '200': '#C19A5B',
          '400': '#B48B48'
        },
      },
      keyframes:{
        slideLeft:{
          '0%': {transform: 'translateX(100%)'},
          '100%': {transform: 'translateX(0%)'}
        },
        fadeIn:{
          from: {
            opacity: '0'
          },
          to:{
            opacity: "1"
          }
        },
        slideDown:{
          '0': {transform: 'translateY(0%)'},
          '100': {transform: 'translateY(100%)'}
        },
        fadeDown:{
          from:{
            opacity: "0"
          },
          to:{
            opacity: "1"
          }
        }
      },
      animation:{
        slideLeft: 'slideLeft 0.4s ease-in-out',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideDown: 'slideDown 0.4s ease-in-out',
        fadeDown: 'fadeDown 0.5s ease-in-out'
      },
      screens:{
        'xs': '480px',
      },
      translate: {
        '40%': '40%',
      },
      fontWeight:{
        'dropdown-menu': '400'
      },
    },
  },
  plugins: [],
};
export default config;
