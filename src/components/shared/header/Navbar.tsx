'use client'
import Link from "next/link";
import clsx from "clsx";
import MenuFunction from "./MenuFunction";
import Image from "next/image";
import NavbarItem from "./NavbarItems";
import { MenuIcon, Search } from "@/icons/Icons";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [scrollY, setScrollY] = useState(false);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        let lastScrollTop = window.scrollY;

        const handleScroll = () => {
            const currentPosition = window.scrollY;
            if (currentPosition > lastScrollTop) {
                setScrollY(true);
            } else if (currentPosition < lastScrollTop) {
                setScrollY(false);
            }

            setLastScrollTop(currentPosition);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    const headerTransitionClasses = "transition-transform duration-300 ease-in";
    const headerFixedClasses = "fixed top-0 z-50 w-full scrollMove";

    const headerClasses = clsx(
        headerTransitionClasses,
        headerFixedClasses,
        { "-translate-y-[100%]": scrollY }
    );

    const navClasses = clsx(
        "relative z-10 w-full h-navbar md:h-navbar-md transition duration-300 ease-in",
        "flex justify-between items-center px-6 md:px-10 lg:px-12 2xl:px-16",
        { "bg-transparent": lastScrollTop <= 200, "bg-black/90 md:bg-navbar/90 [backdrop-filter:blur(20px)_saturate(180%)]": lastScrollTop > 200 }
    );

    return (
        <header className={headerClasses}>
            <nav className={navClasses}>
                <ul className='flex items-center gap-7 text-neutral-300 flex-1'>
                    <li className='h-6'>
                        <MenuFunction>
                            <MenuIcon />
                        </MenuFunction>
                    </li>
                    <NavbarItem>Películas</NavbarItem>
                    <NavbarItem>Series</NavbarItem>
                </ul>

                <Link href={"/"}>
                    <Image
                        alt='Logo de la pagina'
                        src='/logo.webp'
                        width={169}
                        height={40}
                        className='w-24 md:w-28'
                        priority={true}
                    />
                </Link>

                <div className="flex flex-1 justify-end">
                    <Link href={"/search/movie"} className=''>
                        <Search />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
