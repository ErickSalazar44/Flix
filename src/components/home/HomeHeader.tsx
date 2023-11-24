"use client";
import type { GenreTv, SeriesTV } from "@/types/types";
import { useState } from "react";
import SwiperHome from "./SwiperHome";
import BackgroundImage from "./BackgroundImage";
import InfoSection from "./InfoSection";


const HomeHeader = ({
    seriesTrends,
    genresTv,
}: {
    seriesTrends: SeriesTV[];
    genresTv: GenreTv;
}) => {
    // estado para manejar la imagen de fondo que se va mostrar
    const [currentIndex, setCurrentIndex] = useState(0); 

    return (
        <div className='relative'>
            <BackgroundImage
                currentIndex={currentIndex}
                movies={seriesTrends}
            />
            <InfoSection
                currentIndex={currentIndex}
                movies={seriesTrends}
                genresTv={genresTv}
            />
            <div className='px-6 md:px-10 lg:px-12 2xl:px-16'>
                <h2 className='text-white text-lg z-20 relative font-medium mb-3'>
                    Últimas series
                </h2>
                <SwiperHome
                    movies={seriesTrends}
                    setCurrentIndex={setCurrentIndex}
                />
            </div>
        </div>
    );
};

export default HomeHeader;
