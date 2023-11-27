"use client";

import { Movies, SeriesTV } from "@/types/types";
import CarruselDesktop from "./CarruselDesktop";
import CarruselMovil from "./CarruselMovil";
import { useEffect, useState } from "react";

const Carrusel = ({
    data,
}: {
    data: SeriesTV[] | Movies[];
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
            {isMobile && <CarruselMovil data={data} />}
            {!isMobile && <CarruselDesktop data={data} />}
        </div>
    );
};

export default Carrusel;
