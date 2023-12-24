"use client";
import Link from "next/link";
import FilterPanel from "./FilterPanel";
import MenuFunction from "../shared/header/MenuFunction";
import { useEffect, useState } from "react";
import { Logo } from "../icons/Icons";

const NavSearch = ({
    type,
    children,
    duration = 0,
}: {
    type: string;
    children: React.ReactNode;
    duration?: number;
}) => {
    const [lastScrollTop, setLastScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentPosition = window.scrollY;
            setLastScrollTop(currentPosition);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <nav
            className={`transition-all duration-300 ease-in fixed text-xs lg:text-sm w-full z-50 top-0 px-5 md:px-8 lg:px-12 2xl:px-16 h-[60px] flex justify-between items-center text-[#999] scrollMove ${lastScrollTop < duration
                    ? "bg-black sm:bg-transparent border-b border-white/0"
                    : "bg-[rgba(22,22,23,0.8)] [backdrop-filter:blur(20px)_saturate(180%)] border-b border-white/40"
                }`}
        >
            <div className='flex-1 text-white '>
                <Link href='/' className='flex items-center gap-2'>
                    <Logo />
                    <strong className="text-xl">FLIX</strong>
                </Link>
            </div>

            <div className='hidden items-center gap-4 lg:gap-6 md:flex'>
                <div className='flex gap-4 lg:gap-6'>
                    <Link
                        href='/'
                        className={`hover:text-white transition-colors 
                    ${type === "" ? "text-white" : "text-[#999]"}`}
                    >
                        Home
                    </Link>
                    <Link
                        href='/search/movie'
                        className={`hover:text-white transition-colors 
                    ${type === "movie" ? "text-white" : "text-[#999]"}`}
                    >
                        Películas
                    </Link>

                    <Link
                        href='/search/tv'
                        className={`hover:text-white transition-colors ${type === "tv" ? "text-white" : "text-[#999]"
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
        </nav>
    );
};

export default NavSearch;
