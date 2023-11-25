"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { getPosterUrl } from "@/utils/getPosterUrl";
import { Movies, SeriesTV } from "@/types/types";

const Slider = ({
    data,
}: // isMovie,
    {
        data: SeriesTV[] | Movies[];
        // isMovie: boolean;
    }) => {
    const breakpoints = {
        300: { slidesPerView: 2, spaceBetween: 20 },
        600: { slidesPerView: 3, spaceBetween: 30 },
        800: { slidesPerView: 4, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 30 },
        1200: { slidesPerView: 6, spaceBetween: 30 },
        1500: { slidesPerView: 7, spaceBetween: 40 },
        1800: { slidesPerView: 8, spaceBetween: 40 },
    };

    return (
        <Swiper
            breakpoints={breakpoints}
            slidesPerView={2}

        >
            {data?.map((movie, i) => (
                <SwiperSlide key={movie.id}>
                    <div className='cursor-pointer transition duration-300 filter saturate-[0.9] hover:saturate-[1.1] border-transparent border-4 hover:border-cyan-600'>
                        <img
                            src={getPosterUrl(movie)}
                            alt={`imagen-${i}${movie?.id}`}
                            className='w-full aspect-[9/13] lg:h-72 object-cover'
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Slider;
