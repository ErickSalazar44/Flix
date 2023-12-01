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
        gradiantTop: 
        "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 70%)",
        gradiantFull:
        "linear-gradient(0deg, rgba(0,0,0,1) 71%, rgba(0,0,0,0.9466357308584686) 20%, rgba(0,0,0,0.8259860788863109) 97%, rgba(0,0,0,0.5018382352941176) 100%)"
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
        'bgHome': '100vh'
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
