"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

const NavbarScroll = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        // Función para actualizar el valor de scrollY cuando se desplace la página
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={clsx(
                "absolute z-0 top-0 left-0 w-full h-navbar md:h-navbar-md transition duration-300 ease-in backdrop-blur-lg bg-black/90 md:bg-navbar/90",
                {
                    "md:opacity-0  ": scrollY <= 200,
                }
            )}
        />
    );
};

export default NavbarScroll;
