import clsx from "clsx";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem"; // componentes
import { CloseIcon, ArrowRight } from "@/icons/Icons"; // icons
import { menuItems } from "@/lib/data"; // data

const MenuFunction = ({ children }: { children: React.ReactNode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // estado global

    const menuContainerClasses = clsx(
        "text-SemiTransparentWhite transition-all duration-300 z-50 fixed left-0 top-0 w-64 lg:w-96   min-h-screen bg-black md:bg-navbar px-6 md:px-10 lg:px-12 2xl:px-16",
        {
            "opacity-100": isMenuOpen,
            "-translate-x-full opacity-0": !isMenuOpen,
        }
    );

    const overlayClasses = clsx(
        "fixed overflow-hidden w-full right-0 top-0 min-h-screen bg-black opacity-40",
        {"hidden": !isMenuOpen,}
    );

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("disable-scroll");
        } else {
            document.body.classList.remove("disable-scroll");
        }

        return () => {
            document.body.classList.remove("disable-scroll");
        };
    }, [isMenuOpen]);

    return (
        <>
            <button
                onClick={toggleMenu}
                className='w-6 h-6'
                aria-label='Abrir Menú'
            >
                {children}
            </button>
            <aside className={menuContainerClasses}>
                <div className='h-20 flex items-center'>
                    <button
                        className='w-6 h-6'
                        onClick={toggleMenu}
                        aria-label='Cerrar Menú'
                    >
                        <CloseIcon />
                    </button>
                </div>
                <ul className='flex flex-col gap-5 font-normal lg:gap-8 mb-3'>
                    {menuItems.map((item) => (
                        <li key={item}>
                            <MenuItem item={item} />
                        </li>
                    ))}
                </ul>
                <div className='flex flex-col gap-4 mt-8'>
                    <span className='w-full h-[1px] bg-SemiTransparentWhite opacity-30' />
                    <div className='flex justify-between lg:gap-8 items-center'>
                        <MenuItem item='Géneros' />
                        <ArrowRight />
                    </div>
                    <span className='w-full h-[1px] bg-SemiTransparentWhite opacity-30' />
                </div>
            </aside>
            <div onClick={toggleMenu} className={overlayClasses} />
        </>
    );
};

export default MenuFunction;
