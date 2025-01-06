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
        'tagsFontSize': '0.75rem',
        'discoverFontSize': '10rem',
        'paragraphFontSize': '1.25rem',
        'headerFontSize': '1.5rem',
        'h1FontSize': '2.5rem',
        'h2FontSize': '2rem',
        'headerParagraphFontSize': '1.4rem',
        'navFontSize': '1.15rem' 
      
      },
    },
  },
  plugins: [],
}

