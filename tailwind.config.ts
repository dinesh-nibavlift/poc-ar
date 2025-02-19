import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/ui-lib-tw/**/*.js'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Text Color Variants (Eg:bg-primary, border-primary, or text-primary)
      colors: {
        theme: '#9950FF',
        primary: '#9950FF',
        'primary-hover': '#863FCB',
        secondary: 'rgba(244,244,244,1)',
        'secondary-hover': 'rgba(242,242,242,0.65)',
        dark: '#171A20',
        'dark-1': '#181A1F',
        'dark-2': '#212328',
        'dark-3': '#393C41',
        'dark-4': '#3A3C42',
        'dark-5': '#3E4046',
        'dark-6': '#696A6D',
        'dark-7': '#26282D',
        'dark-8': '#444444',
        'dark-9': '#222222',
        'dark-10': '#0B1821',
        'dark-11': '#656469',
        'dark-12': '#838383',
        'dark-13': '#1B1D22',
        'dark-14': '#010205',
        grey: '#5C5E62',
        'grey-1': '#97989A',
        'grey-2': '#e2e3e3',
        'grey-3': '#d2d2d2',
        'grey-4': '#d5d5d5',
        'grey-5': '#A0A3A8',
        'grey-6': '#E0DCDC',
        'grey-7': '#D0D1D2',
        'grey-8': '#98999B',
        'grey-9': '#C6CECE',
        'grey-10': '#C9CACB',
        'grey-11': '#C1C1C1',
        'grey-12': '#A2A3A5',
        light: '#F4F4F4',
        'light-1': '#F2F2F2',
        'light-2': '#EEEEEE',
        'light-3': '#DEDEDE',
        'light-4': '#ABBDEE',
        'light-5': '#D9D9D9',
        'light-6': '#FBFCFF',
        blue: '#3E6AE1',
        'blue-1': '#001650',
        'blue-2': '#558CED',
        success: '#1DCD4E',
        'success-2': '#00B733',
        error: '#DE4549',
        'error-1': '#FB4545',
        'error-2': '#D5001C'
      },
      // Text Color Variants (Eg:text-primary)
      textColor: {
        primary: '#171A20',
        secondary: '#5C5E62',
        'link-primary': '#9950FF',
        'link-secondary': '#171A20',
        'link-tertiary': '#FFFFFF'
      },
      // Font Family Variants (Eg:font-gbk)
      fontFamily: {
        'gotham-book': ['gotham-book', 'sans-serif'],
        'gotham-medium': ['gotham-medium', 'sans-serif'],
        'gotham-bold': ['gotham-bold', 'sans-serif'],
        gbk: ['gotham-book', 'sans-serif'],
        gmd: ['gotham-medium', 'sans-serif'],
        gbd: ['gotham-bold', 'sans-serif'],
        pbk: ['porsche-book', 'sans-serif'],
        pmd: ['porsche-medium', 'sans-serif'],
        psb: ['porsche-semi-bold', 'sans-serif'],
        pbd: ['porsche-bold', 'sans-serif']
      },
      // Font Size Variants (Eg:text-price)
      fontSize: {
        heading: '40px',
        price: '20px',
        'fs-70': ['70px', '100px'],
        'fs-60': ['60px', '68px'],
        'fs-56': ['56px', '64px'],
        'fs-54': ['54px', '60px'],
        'fs-40': ['40px', '48px'],
        'fs-34': ['34px', '42px'],
        'fs-28': ['28px', '36px'],
        'fs-26': ['26px', '36px'],
        'fs-24': ['24px', '32px'],
        'fs-22': ['22px', '28px'],
        'fs-20': ['20px', '26px'],
        'fs-18': ['18px', '28px'],
        'fs-16': ['16px', '24px'],
        'fs-14': ['14px', '21px'],
        'fs-12': ['12px', '18px'],
        'fs-10': ['10px', '14px']
      },
      // Placeholder Variants (Eg:placeholder-primary)
      placeholderColor: {
        primary: '#757575'
      },
      // Background Image / Gradient Variants (Eg:bg-gradient-radial)
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-blue':
          'radial-gradient(54.97% 272.54% at 27.36% -134.72%, rgba(108, 148, 255, 0.92) 0%, rgba(0, 0, 0, 0.92) 100%)',
        'gradient-radial-blue-ellipse': 'radial-gradient(ellipse at 50% -50%,#6c94ff 0,#000 100%)'
      },
      // Grid Template Columns (Eg:grid-cols-4col-auto)
      gridTemplateColumns: {
        '4col-auto': 'repeat(4, minmax(0, auto))'
      },
      // Media Queries (Eg:min-sm:className or styles)
      screens: {
        // Max Screen
        'max-sm': { max: '599px' },
        'max-md': { max: '767px' },
        'max-mdx': { max: '899px' },
        'max-lg': { max: '1023px' },
        'max-xl': { max: '1199px' },
        'max-2xl': { max: '1535px' },
        'max-3xl': { max: '1919px' },
        // Min Screen
        'min-sm': { min: '600px' },
        'min-md': { min: '768px' },
        'min-mdx': { min: '900px' },
        'min-lg': { min: '1024px' },
        'min-xl': { min: '1200px' },
        'min-2xl': { min: '1536px' },
        'min-3xl': { min: '1920px' }
      },
      important: true
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
export default config;
