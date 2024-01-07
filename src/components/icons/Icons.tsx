export const MenuIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
        />
    </svg>
)

export const CloseIcon = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-7 h-7'
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M6 18L18 6M6 6l12 12'
        />
    </svg>
)

export const ArrowRight = ({ clasName }: { clasName?: string }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={`${clasName ? clasName : 'w-6 h-6'}`}
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
        />
    </svg>
)

export const ArrowLeft = ({ clasName }: { clasName?: string }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={`${clasName ? clasName : 'size-6'}`}
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
        />
    </svg>
)

export const Search = ({ clasName }: { clasName?: string }) => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className={`${clasName ? clasName : 'size-6'}`}
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
        />
    </svg>
)

export const Play = () => (
    <svg viewBox='0 0 44 44' className='w-full cursor-pointer fill-transparent'>
        <g transform='translate(1 1)' fillRule='evenodd'>
            <circle cx='21' cy='21' r='21'></circle>
            <path fill='#FFFFFF' d='M30 21.5L15 29V14z'></path>
        </g>
    </svg>
)

export const PlayPause = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 7.5V18M15 7.5V18M3 16.811V8.69c0-.864.933-1.406 1.683-.977l7.108 4.061a1.125 1.125 0 010 1.954l-7.108 4.061A1.125 1.125 0 013 16.811z'
        />
    </svg>
)

export const Linkedin = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='currentColor'
    >
        <circle cx='4.983' cy='5.009' r='2.188'></circle>
        <path d='M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z'></path>
    </svg>
)

export const GitHub = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='currentColor'
    >
        <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
        ></path>
    </svg>
)

export const Portafolio = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
    >
        <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z'
        />
    </svg>
)

export const Instagram = () => (
    <svg
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='currentColor'
    >
        <path d='M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z'></path>
        <circle cx='16.806' cy='7.207' r='1.078'></circle>
        <path d='M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z'></path>
    </svg>
)

export const Time = () => (
    <svg viewBox='0 0 17 16' width='14px'>
        <path
            d='M8.2 0a8.1 8.1 0 018.22 8c0 4.42-3.68 8-8.21 8A8.1 8.1 0 010 8c0-4.42 3.67-8 8.2-8zm.27 3.52a.74.74 0 10-1.47 0v4.92c0 .2.08.38.21.52l3.52 3.51a.74.74 0 001.04-1.04l-3.3-3.3V3.52z'
            fill='#ffffff6d'
            fillRule='evenodd'
        ></path>
    </svg>
)

export const Hd = () => (
    <svg viewBox='0 0 44 29' width='24px' height='14px'>
        <path
            d='M2 0h40a2 2 0 012 2v25a2 2 0 01-2 2H2a2 2 0 01-2-2V2C0 .9.9 0 2 0zm8.91 22.3v-6.71h6.91v6.71h2.82V6.9h-2.82v6.4h-6.9V6.9H8.1v15.4h2.81zm17.98 0c1.8 0 3.28-.32 4.45-.96a6.04 6.04 0 002.6-2.68c.56-1.15.84-2.5.84-4.06 0-1.55-.28-2.9-.84-4.06a6.04 6.04 0 00-2.6-2.68 9.22 9.22 0 00-4.45-.96h-5.26v15.4h5.26zm-.14-2.42h-2.3V9.3h2.3c1.3 0 2.31.21 3.06.64a3.62 3.62 0 011.6 1.82c.33.8.5 1.74.5 2.84 0 1.11-.17 2.06-.5 2.85a3.57 3.57 0 01-1.6 1.8 6.3 6.3 0 01-3.06.63z'
            fill='#A0A0A0'
            fillRule='evenodd'
        ></path>
    </svg>
)

export const Extender = () => (
    <svg height='100%' version='1.1' viewBox='0 0 24 24' width='100%'>
        <g fill='none' fillRule='evenodd' stroke='none' strokeWidth='1'>
            <g transform='translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) '>
                <path
                    d='M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z'
                    fill='#fff'
                    fillRule='nonzero'
                ></path>
            </g>
        </g>
    </svg>
)

export const Logo = () => (
    <svg width='35' height='35' xmlns='http://www.w3.org/2000/svg' fill='white'>
        <circle cx='5' cy='8' r='3' />
        <circle cx='15' cy='8' r='3' />

        <circle cx='5' cy='18' r='3' />
        <circle cx='15' cy='18' r='3' />
        <circle cx='25' cy='18' r='3' />

        <circle cx='5' cy='28' r='3' />
        <circle cx='15' cy='28' r='3' />
    </svg>
)
