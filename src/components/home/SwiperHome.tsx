// Swiper
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './style.css'

import { SeriesTV } from "@/types/types";
import { useMemo } from 'react';
import { ArrowLeft, ArrowRight } from "@/icons/Icons";
import useWindowSize from "@/hooks/useWindowSize";
import { getPosterUrl } from "@/utils/getPosterUrl";
import Image from "next/image";



const SwiperHome = ({ movies, setCurrentIndex }: { movies: SeriesTV[] | undefined, setCurrentIndex: (index: number) => void }) => {

    const windowSize = useWindowSize();

    const showMovies = useMemo(() => {
        if (windowSize.width >= 1400) return 16;
        if (windowSize.width >= 1024) return 12;
        if (windowSize.width >= 700) return 10;
        return 8;
    }, [windowSize.width]);


    const breakpoints = {
        300: { slidesPerView: 2 },
        600: { slidesPerView: 3 },
        800: { slidesPerView: 4 },
        1024: { slidesPerView: 5 },
        1200: { slidesPerView: 6 },
        1600: { slidesPerView: 7 },
        1800: { slidesPerView: 8 },
    };


    return (
        <div className='relative'>
            <Swiper
                pagination={{
                    clickable: true,
                    el: ".swiper-paginacion",
                }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                breakpoints={breakpoints}
                spaceBetween={40}
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className='mySwiper'
            // autoplay={{ delay: 4500 }}
            >
                {movies?.slice(0, showMovies).map((movie) => (
                    <SwiperSlide key={movie.id} className='w-full cursor-pointer'>
                            <Image
                                src={getPosterUrl(movie, windowSize.width)}
                                alt={`poster_path${movie.id}`}
                                width={210}
                                height={280}
                                quality={90}
                                className={`rounded `}
                                style={{ width: 'auto', height: 'auto', objectFit: 'contain' }}
                            />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Botón de avanzar */}

            <div className="swiper-button-next">
                <div className="absolute -top-1 -right-8 md:-right-9 transform w-6 text-white opacity-80">
                    <ArrowRight />
                </div>
            </div>

            {/* Botón de retroceder */}
            <div className='swiper-button-prev'>
                <div className="absolute -top-1 -left-8 md:-right-9 w-6 text-white opacity-80">
                    <ArrowLeft />
                </div>
            </div>
            {/* Paginacion */}
            <div className='relative z-10 swiper-paginacion w-full text-center'></div>
        </div>
    )
}

export default SwiperHome