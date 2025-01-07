/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'ssm': '300px',
      // => @media (min-width: 300px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'bg': '#0f172a',
      'black': '#000000',
      'bg2': '#94a3b8',
      'bgTest': '#cbd5e1',
      'bgTestRed': '#ef4444',
      'bgTags': '#042f2e'
    },
    textColor: {
      'primaryTextColor': '#94a3b8',
      'secondaryTextColor': '#cbd5e1',
    },
    extend: {
      margin: {
        'h3ContainerMb': '2.5rem',
        'sectionMt': '3.5rem',
        'eachExperienceMargin': '2rem',
        'marginTopForTheTagsDiv': '1rem',
      },
      height: {
        'h3ContainerHeight': '4rem'
      },
      fontSize: {
        'tagsFontSize': ['0.75rem', { lineHeight: '1rem' }],
        'discoverFontSize': ['10rem', { lineHeight: '1' }],
        'paragraphFontSize': ['1.25rem', { lineHeight: '1.75rem' }],
        'welcomeParagraphFontSize': ['1rem', { lineHeight: '1.75rem' }],
        'headerFontSize': ['1.5rem', { lineHeight: '2rem' }],
        'h1FontSize': ['2.5rem', { lineHeight: '3rem' }],
        'h1FontSizeSsm': ['1.8rem', { lineHeight: '3rem' }],
        'h2FontSize': ['2rem', { lineHeight: '2.5rem' }],
        'h2FontSizeSsm': ['1.5rem', { lineHeight: '2.5rem' }],
        'headerParagraphFontSize': ['1.4rem', { lineHeight: '2rem' }],
        'navFontSize': ['1.15rem', { lineHeight: '1.5rem' }],
        'responsiveFontSize': {
          'ssm': '0.875rem', // 14px
          'sm': '1rem', // 16px
          'md': '1.125rem', // 18px
          'lg': '1.25rem', // 20px
          'xl': '1.5rem', // 24px
          '2xl': '1.875rem', // 30px
        }
      },
    },
  },
  plugins: [],
}

