'use client'
import clsx from "clsx";
import { useState } from "react";
import MenuItem from './MenuItem';
// icons
import { CloseIcon, ArrowRight } from "@/icons/Icons";

const menuItems = [
    "Inicio",
    "Series",
    "Películas",
    "Originales",
    "Tendencias",
    "Ver más",
];

const MenuFunction = ({ children }: {children: React.ReactNode}) => {

    const [showMenu, setshowMenu] = useState(false);

    const toggleMenu = () => {
        setshowMenu(!showMenu);
    };

    const menuContainerClasses = clsx(
        'text-colorMenu transition-all duration-500 z-[70] fixed left-0 top-0 w-64 lg:w-96   min-h-screen bg-navbar px-8 md:px-10 lg:px-12 2xl:px-16',
        {
            'opacity-100': showMenu,
            '-translate-x-full opacity-0': !showMenu,
        }
    );
    
    const overlayClasses = clsx(
        'fixed w-full z-[60] right-0 top-0 min-h-screen bg-black opacity-40',
        {
            'fade-out': showMenu,
            'fade-in hidden': !showMenu,
        }
    );

    return (
        <div>
            <button
                onClick={toggleMenu}
                className='w-[24px] h-[24px]'
                aria-label='Abrir Menú'
            >
                {children}
            </button>
            <div className={menuContainerClasses}>
                <div className='h-20 flex items-center'>
                    <button
                        className='w-[24px] h-[24px] lg:w-[26px] lg:h-[26px]'
                        onClick={toggleMenu}
                        aria-label='Cerrar Menú'
                    >
                        <CloseIcon/>
                    </button>
                </div>
                <ul className='flex flex-col gap-5 font-normal text-lg lg:gap-8 mb-3'>
                    {
                        menuItems.map(item => (
                            <li key={item}>
                                <MenuItem item={item}/>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex flex-col gap-4 mt-8'>
                    <span className='w-full h-[1px] bg-colorMenu opacity-30'></span>
                    <div className='flex justify-between lg:gap-8 items-center'>
                        <MenuItem item='Géneros'/>
                        <ArrowRight/>
                    </div>
                    <span className='w-full h-[1px] bg-colorMenu opacity-30'></span>
                </div>
            </div>
            <div onClick={toggleMenu} className={overlayClasses}/>
        </div>
    )
}

export default MenuFunction