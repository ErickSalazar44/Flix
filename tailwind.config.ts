import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradiantLeft:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0) 70%)",
        gradiantBotton:
        "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0) 70%)",
      },
      colors: {
        SemiTransparentWhite: "#ffffffb3",
      },
      minHeight: {
        homeSpaceFondo: "calc(75vh - 280px + 90px)",
      },
      backgroundColor: {
        navbar: "#0f0f0f",
      },
      height: {
        'navbar': '4rem',
        'navbar-md': '70px',
        'bgHome': '90vh'
      },
      fontSize: {
        titulo: "calc(.9em + 3vw)",
      },
      screens: {
        'mv': { min: "380px", max: "640px" },
        '3xl': { min: '1800px', max: '1920px'}
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
}
export default config
