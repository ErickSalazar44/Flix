'use client'
import Link from 'next/link'
import FilterPanel from './FilterPanel'
import MenuFunction from '../shared/header/MenuFunction'
import { useEffect, useState } from 'react'
import { Logo } from '../icons/Icons'
import EspaciadoLayout from '../layout/EspaciadoLayout'

export default function NavSearch({
    type,
    children,
    duration = 0,
}: {
    type: string
    children: React.ReactNode
    duration?: number
}) {
    const [lastScrollTop, setLastScrollTop] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY
            setLastScrollTop(currentPosition)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [lastScrollTop])

    return (
        <EspaciadoLayout
            component='nav'
            className={`transition duration-300 ease-in fixed text-xs lg:text-sm w-full z-50 top-0  h-nav sm:h-[60px] flex justify-between items-center text-txtGray1 scrollMove 
            ${
                lastScrollTop < duration
                    ? 'bg-black sm:bg-transparent border-b border-white/0'
                    : 'bg-black sm:bg-[rgba(22,22,23,0.8)] sm:[backdrop-filter:blur(20px)_saturate(180%)] border-b border-white/40'
            }`}
        >
            <div className='flex-1 text-white '>
                <Link href='/' className='flex items-center gap-2 w-20'>
                    <strong>
                        <Logo />
                    </strong>
                    <h1 className='text-xl font-bold'>FLIX</h1>
                </Link>
            </div>

            <div className='hidden items-center gap-4 lg:gap-6 md:flex'>
                <div className='flex gap-4 lg:gap-6'>
                    <Link
                        href='/'
                        className={`hover:text-white transition-colors 
                    ${type === '' ? 'text-white' : 'text-txtGray1'}`}
                    >
                        Home
                    </Link>
                    <Link
                        href='/search/movie'
                        className={`hover:text-white transition-colors 
                    ${type === 'movie' ? 'text-white' : 'text-txtGray1'}`}
                    >
                        Películas
                    </Link>

                    <Link
                        href='/search/tv'
                        className={`hover:text-white transition-colors ${
                            type === 'tv' ? 'text-white' : 'text-txtGray1'
                        }`}
                    >
                        Series
                    </Link>
                </div>
                <FilterPanel />
            </div>

            <div className='hidden uppercase md:flex gap-4 text-sm font-medium flex-1 justify-end'>
                {children}
            </div>
            <div className='md:hidden'>
                <MenuFunction>{children}</MenuFunction>
            </div>
        </EspaciadoLayout>
    )
}
