"use client";
import type { GenreTv, Movies } from "@/types/types";
import { useState } from "react";
import SwiperHome from "./SwiperHome";
import BackgroundImage from "./BackgroundImage";
import InfoSection from "./InfoSection";


const HomeHeader = ({
    moviesTrends,
    genresMovies,
}: {
    moviesTrends: Movies[];
    genresMovies: GenreTv;
}) => {
    // estado para manejar la imagen de fondo que se va mostrar
    const [currentIndex, setCurrentIndex] = useState(0); 

    return (
        <div className='relative'>
            <BackgroundImage
                currentIndex={currentIndex}
                movies={moviesTrends}
            />
            <InfoSection
                currentIndex={currentIndex}
                movies={moviesTrends}
                genresMovies={genresMovies}
            />
            <div className='px-6 md:px-10 lg:px-12 2xl:px-16'>
                <h2 className='text-white text-lg z-20 relative font-medium mb-3'>
                    Últimas películas
                </h2>
                <SwiperHome
                    movies={moviesTrends}
                    setCurrentIndex={setCurrentIndex}
                />
            </div>
        </div>
    );
};

export default HomeHeader;
