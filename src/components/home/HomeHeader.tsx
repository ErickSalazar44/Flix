"use client";
import type { GenreTv, MoviesAndSeries } from "@/types/types";
import { useState } from "react";
import BackgroundImage from "./BackgroundImage";
import InfoSection from "./InfoSection";
import SwiperHome from './SwiperHome';


const HomeHeader = ({
    moviesTrends,
    genresMovies,
}: {
    moviesTrends: MoviesAndSeries[];
    genresMovies: GenreTv;
}) => {
    // estado para manejar la imagen de fondo que se va mostrar
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className='relative h-screen'>
            <BackgroundImage
                currentIndex={currentIndex}
                movies={moviesTrends}
            />
            <InfoSection
                currentIndex={currentIndex}
                movies={moviesTrends}
                genresMovies={genresMovies}
            />
                <div className='px-5 md:px-8 lg:px-12 2xl:px-16 relative z-30'>
                    <h2 className='text-white z-20 relative font-medium mb-3 uppercase'>
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
