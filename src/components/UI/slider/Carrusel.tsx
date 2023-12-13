"use client";

import { MoviesAndSeries } from "@/types/types";
import CarruselDesktop from "./CarruselDesktop";
import CarruselMovil from "./CarruselMovil";
import { useEffect, useState } from "react";

const Carrusel = ({
    data,
    type
}: {
    data: MoviesAndSeries[];
    type: string
}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div>
            {isMobile && <CarruselMovil data={data} type={type}/>}
            {!isMobile && <CarruselDesktop data={data} type={type}/>}
        </div>
    );
};

export default Carrusel;
