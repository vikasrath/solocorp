/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        'home-banner-height': '800px', // Default height for all screens
      },
      screens: {
        'banner-sm': { max: '768px' },
        'banner-large': { raw: '(height: 1024px), (min-width: 800px)' },
        'banner-xs': { max: '505px' },
      },
      fontSize: {
        '3xl': '1.875rem',  // Default 3xl text size (for small screens)
        'xl': '1.25rem',    // xl for banner-large
        '5xl': '3rem',      // 5xl for larger screens
      },
      margin: {
        '10p': '10%',       // Default margin-bottom
        '5p': '5%',
        '30p': '30%',
        '15p': '15%',       // Margin-bottom for banner-large
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    function ({ addUtilities }) {
      addUtilities({
        '.home-banner-height': {
          height: '800px', // Default height
          '@screen banner-sm': { height: '440px' }, // Small screens
          '@screen banner-large': { height: '650px' }, // Large screens
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        '.text-custom': {
          'font-size': '2rem', // Default text size
          '@screen banner-sm': {
            'font-size': '1.4rem', // Text size for small screens
          },
          '@screen banner-xs': {
            'font-size': '1.1rem', // Text size for extra small screens
          },
          '@screen banner-large': {
            'font-size': '2rem', // Text size for banner-large
          },
          '@screen xl': {
            'font-size': '2.5rem', // Text size for larger screens
          },
        },
      });
    },
  ],
  darkMode: 'class',
};
