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
                    'linear-gradient(90deg, rgba(0,0,0,0.9002320185614849) 0%, rgba(0,0,0,0) 70%)',
                gradiantBotton:
                    'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 35%, rgba(0,0,0,0) 70%)',
                gradiantTop:
                    'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
                gradiantBottonCard:
                    'linear-gradient(0deg, rgba(0,0,0,0.6951155462184874) 0%, rgba(0,0,0,0) 80%)',
                gradiantTop2:
                    'linear-gradient(180deg, rgba(0,0,0,0.5914740896358543) 0%, rgba(0,0,0,0) 34%)',
                footerGradiant:
                    'linear-gradient(180deg,#0000,oklch(61.64% 0.111 222.57 / 23.53%))',
            },
            colors: {
                txtGray1: '#999999',
                txtGray2: '#E0E0E0',
            },
            margin: {
                nav: '65px',
            },
            height: {
                nav: '65px',
                screenMovil: 'calc(100vh - 65px)',
            },
            fontSize: {
                titulo: 'calc(.9em + 3vw)',
            },
            screens: {
                mv: { min: '380px', max: '640px' },
                '3xl': { min: '1800px', max: '1920px' },
            },
            keyframes: {
                shimmer: {
                    '100%': {
                        transform: 'translateX(100%)',
                    },
                },
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
            },
            animation: {
                fadeInUp: 'fadeInUp 700ms ease-in-out forwards',
            },
        },
    },
    plugins: [],
}
export default config
