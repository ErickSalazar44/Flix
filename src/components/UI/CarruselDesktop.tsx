// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { getPosterUrl } from "@/utils/getPosterUrl";
import { Movies, SeriesTV, isMovies } from "@/types/types";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { CarruselSkeleton } from "./skeletons";
import Image from "next/image";

const CarruselDesktop = ({ data }: { data: SeriesTV[] | Movies[] }) => {
    const [swiperReady, setSwiperReady] = useState(false);
    const carruselRef = useRef(null);

    const breakpoints = {
        1400: { slidesPerView: 7, spaceBetween: 30 },
        1800: { slidesPerView: 8, spaceBetween: 40 },
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setSwiperReady(true);
                    observer.disconnect();
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5, // Puedes ajustar este valor según tus necesidades
            }
        );

        if (carruselRef.current) {
            observer.observe(carruselRef.current);
        }

        return () => {
            if (carruselRef.current) {
                observer.unobserve(carruselRef.current);
            }
        };
    }, [carruselRef]);

    return (
        <div ref={carruselRef}>
            {swiperReady ? (
                <Swiper
                    breakpoints={breakpoints}
                    slidesPerView={5}
                    spaceBetween={20}
                    className='mySwiper cursor-grab select-none'
                    onSwiper={() => setSwiperReady(true)}
                >
                    {data.map((movie: Movies | SeriesTV) => (
                        <SwiperSlide key={movie.id}>
                            <Image
                                className={`rounded`}
                                src={getPosterUrl(movie)}
                                alt={`Imagen`}
                                width={205}
                                height={296}
                                quality={80}
                                style={{
                                    width: "auto",
                                    height: "auto",
                                    objectFit: "cover",
                                    aspectRatio: '9/14'
                                }}
                                placeholder="empty"
                            />
                            <div className='mt-2 text-center px-2'>
                                <h3 className='text-xs font-light line-clamp-1'>
                                    {isMovies(movie)
                                        ? (movie as Movies).original_title
                                        : (movie as SeriesTV).original_name}
                                </h3>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <CarruselSkeleton/>
            )}
        </div>
    );
};

export default CarruselDesktop;
