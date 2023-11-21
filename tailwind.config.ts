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
        gradient:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0) 70%)",
        gradiant:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);",
        yGradiant:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, rgb(10, 10, 10, 40) 100.09%)",
        yGradiantModal:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 10%, rgb(10, 10, 10, 100) 100.09%)",
      },
      colors: {
        colorMenu: "#ffffffb3",
      },
      minHeight: {
        homeSpaceFondo: "calc(75vh - 320px + 74.5px)",
        homeSpaceFondoPC: "calc(75vh - 280px + 84px)",
      },
      backgroundColor: {
        navbar: "#0f0f0f",
      },
      padding: {
        navH: "80px",
      },
      fontSize: {
        titulo: "calc(.9em + 3vw)",
      },
      screens: {
        movieId: { min: "380px", max: "640px" },
      },
    },
  },
  plugins: [],
}
export default config
