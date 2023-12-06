// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { getPosterUrl } from "@/utils/getPosterUrl";
import { Movies, SeriesTV, isMovies } from "@/types/types";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { CarruselSkeleton } from "./skeletons";
import Image from "next/image";
import Link from "next/link";

const CarruselDesktop = ({ data, type }: { data: SeriesTV[] | Movies[], type: string }) => {
    const [swiperReady, setSwiperReady] = useState(false);
    const carruselRef = useRef(null);

    const breakpoints = {
        1200: { slidesPerView: 6, spaceBetween: 30 },
        1500: { slidesPerView: 7, spaceBetween: 30 },
        1800: { slidesPerView: 8, spaceBetween: 30 },
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
                rootMargin: "0px",
                threshold: 0.5, // Puedes ajustar este valor según tus necesidades
            }
        );

        const carruselRefCurrent = carruselRef.current; // Crear variable local

        if (carruselRefCurrent) {
            observer.observe(carruselRefCurrent);
        }
    
        return () => {
            if (carruselRefCurrent) {
                observer.unobserve(carruselRefCurrent);
            }
        };
    }, [carruselRef]);

    console.log(`/media/${type}/${data[0].id}`)

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
                            <Link href={`/media/${type}/${movie.id}`}>                            
                                <div className='transition duration-300 border-transparent border-4 hover:border-cyan-600'>
                                    <Image
                                        className={`rounded object-cover`}
                                        src={getPosterUrl(movie)}
                                        alt={`Imagen`}
                                        width={205}
                                        height={296}
                                        quality={80}
                                        style={{
                                            width: "auto",
                                            height: "auto",
                                            objectFit: "cover",
                                            aspectRatio: "9/14",
                                        }}
                                        placeholder='empty'
                                    />
                                </div>
                                <div className='mt-2 text-center px-2'>
                                    <h3 className='text-xs font-light line-clamp-1'>
                                        {isMovies(movie)
                                            ? (movie as Movies).original_title
                                            : (movie as SeriesTV).original_name}
                                    </h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <CarruselSkeleton />
            )}
        </div>
    );
};

export default CarruselDesktop;
