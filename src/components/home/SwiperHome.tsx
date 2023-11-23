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
        return 6;
    }, [windowSize.width]);


    const breakpoints = {
        300:
        {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        600:
        {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        800:
        {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1024:
        {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1200:
        {
            slidesPerView: 6,
            spaceBetween: 30,
        },
        1500:
        {
            slidesPerView: 7,
            spaceBetween: 40,
        },
        1800:
        {
            slidesPerView: 8,
            spaceBetween: 40,
        },
    };


    return (
        <div className="relative">
            <Swiper
                pagination={{
                    clickable: true,
                    el: ".swiper-paginacion",
                }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                breakpoints={breakpoints}
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
                    <SwiperSlide key={`movie-${movie.id}`} className='aspect-[9/14] cursor-pointer object-contain'>
                        <Image
                            src={getPosterUrl(movie, windowSize.width)}
                            alt={`poster_path${movie.id}`}
                            width={188}
                            height={300}
                            quality={90}
                            className={`rounded aspect-[9/14]`}
                            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
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