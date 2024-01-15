/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        nunito_sans: ['var(--font-nunito_sans)'],
      },
      colors: {
        Navy: '#202c37',
        DeepSteelBlue: '#2b3945',
        MidnightBlue: '#111517',
        MediunGray: '#858585',
        SnowWhite: '#fafafa',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
