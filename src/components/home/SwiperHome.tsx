// Swiper
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "@/styles/swiper.css";

import { Movies } from "@/types/types";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight } from "@/icons/Icons";
import useWindowSize from "@/hooks/useWindowSize";
import { getPosterUrl } from "@/utils/getPosterUrl";
import Image from "next/image";
import { CarruselSkeleton } from "../UI/skeletons";

const SwiperHome = ({
    movies,
    setCurrentIndex,
}: {
    movies: Movies[] | undefined;
    setCurrentIndex: (index: number) => void;
}) => {
    const [swiperReady, setSwiperReady] = useState(false);

    const windowSize = useWindowSize();

    const showMovies = useMemo(() => {
        if (windowSize.width >= 1400) return 16;
        if (windowSize.width >= 1024) return 12;
        if (windowSize.width >= 700) return 10;
        return 6;
    }, [windowSize.width]);

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
        <div className='relative'>
            <Swiper
                pagination={{
                    clickable: true,
                    el: ".swiper-paginacion",
                }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                slidesPerView={2}
                breakpoints={breakpoints}
                loop={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                modules={[Pagination, Navigation, Autoplay]}
                onSwiper={() => setSwiperReady(true)}
                className='mySwiper-Home select-none'
                autoplay={{ delay: 10000 }}
            >
                {swiperReady ?
                    movies?.slice(0, showMovies).map((movie) => (
                        <SwiperSlide
                            key={`movie-${movie.id}`}
                            className='cursor-grab object-cover'
                        >
                            <Image
                                src={getPosterUrl(movie)}
                                alt={`poster_path ${movie.title}`}
                                width={206}
                                height={300}
                                className={`rounded object-cover aspect-[9/14]`}
                                quality={80}
                                style={{
                                    width: "auto",
                                    height: "auto",
                                    aspectRatio: '9/14'
                                }}
                                placeholder="empty"
                            />
                        </SwiperSlide>
                    )) : 
                        <CarruselSkeleton/>      
                    }
            </Swiper>

            {/* Botón de avanzar */}
            <div className='swiper-button-next'>
                <div
                    className={`${
                        !swiperReady && "hidden"
                    }  absolute -top-1 -right-8 md:-right-9 w-6 text-white opacity-80`}
                >
                    <ArrowRight />
                </div>
            </div>

            {/* Botón de retroceder */}
            <div className='swiper-button-prev'>
                <div
                    className={`${
                        !swiperReady && "hidden"
                    } absolute -top-1 -left-8 md:-right-9 w-6 text-white opacity-80`}
                >
                    <ArrowLeft />
                </div>
            </div>

            {/* Paginacion */}
            <div className='relative z-10 swiper-paginacion w-full text-center' />
        </div>
    );
};

export default SwiperHome;
