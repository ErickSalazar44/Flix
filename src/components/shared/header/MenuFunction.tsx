'use client'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import MenuItem from './MenuItem' // componentes
import { CloseIcon, ArrowRight, MenuIcon } from '@/icons/Icons' // icons
import { menuItems } from '@/lib/data' // data
import Link from 'next/link'

export default function MenuFunction({
    children,
}: {
    children: React.ReactNode
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false) // estado global

    const menuContainerClasses = clsx(
        'text-white/60 transition-all duration-300 z-50 fixed right-0 top-0 w-64 min-h-screen bg-black px-5',
        {
            'opacity-100': isMenuOpen,
            'translate-x-full opacity-0': !isMenuOpen,
        }
    )

    const overlayClasses = clsx(
        'fixed overflow-hidden w-full right-0 top-0 min-h-screen bg-black opacity-40',
        { hidden: !isMenuOpen }
    )

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isMenuOpen])

    return (
        <>
            <button
                onClick={toggleMenu}
                className='w-6 h-6'
                aria-label='Abrir Menú'
            >
                <MenuIcon />
            </button>
            <aside className={menuContainerClasses}>
                <div className='h-16 flex items-center justify-end'>
                    <button
                        className='w-6 h-6'
                        onClick={toggleMenu}
                        aria-label='Cerrar Menú'
                    >
                        <CloseIcon />
                    </button>
                </div>
                <ul className='flex flex-col gap-5 font-normal mb-3'>
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <Link href={item.ruta}>
                                <MenuItem item={item.name} />
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className='flex flex-col gap-4 mt-8'>
                    <span className='w-full h-[1px] bg-white/30' />
                    <Link
                        href='/search/movie?filter=upcoming'
                        className='flex justify-between items-center'
                    >
                        <MenuItem item='Próximos estrenos' />
                        <ArrowRight />
                    </Link>
                    <span className='w-full h-[1px] bg-white/30' />
                    <div className='my-4'>{children}</div>
                </div>
            </aside>
            <div onClick={toggleMenu} className={overlayClasses} />
        </>
    )
}
