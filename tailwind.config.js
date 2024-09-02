/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '320px',
      sm: '426px',
      md: '769px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        DarkBlueDarkModeElements: 'hsl(209, 23%, 22%)',
  VeryDarkBlueDarkModeBackground: 'hsl(207, 26%, 17%)',
  VeryDarkBlueLightModeText: 'hsl(200, 15%, 8%)',
  DarkGrayLightModeInput: 'hsl(0, 0%, 52%)',
  VeryLightGrayLightModeBackground: 'hsl(0, 0%, 98%)',
  WhiteDarkModeTextnLightModeElements: 'hsl(0, 0%, 100%)',
        Grey: 'hsl(231, 7%, 60%)',
        White: 'hsl(0, 0%, 100%)',
        red: 'hsl(0, 97%, 50%)',
      },
      // fontFamily: {
      //   sans: ['Nunito Sans', 'sans-serif']
      // },
      fontSize: {
        'baseSize': '16px',
        'mediumSize': '14px',
        'belowSize': '12px',
      },
      boxShadow: {
        'colorShadow': '0px 5px 9px 6px rgba(255, 98, 87, 0.3)',
      },
      
    },
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
