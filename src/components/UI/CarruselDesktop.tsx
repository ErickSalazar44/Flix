// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Movies, SeriesTV } from "@/types/types";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { CarruselSkeleton } from "./skeletons";
import Link from "next/link";
import MovieCard from "./MovieCard";
import './scrollAnimate.css'

const CarruselDesktop = ({
    data,
    type,
}: {
    data: SeriesTV[] | Movies[];
    type: string;
}) => {
    const [swiperReady, setSwiperReady] = useState(false);
    const carruselRef = useRef(null);

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
                rootMargin: "300px",
                threshold: 0,
            }
        );

        const carruselRefCurrent = carruselRef.current;

        if (carruselRefCurrent) {
            observer.observe(carruselRefCurrent);
        }

        return () => {
            if (carruselRefCurrent) {
                observer.unobserve(carruselRefCurrent);
            }
        };
    }, [carruselRef]);

    return (
        <div ref={carruselRef}>
            {swiperReady ? (
                <Swiper
                    slidesPerView={4}
                    spaceBetween={8}
                    loop={false}
                    className='mySwiper cursor-grab select-none'
                    onSwiper={() => setSwiperReady(true)}
                >
                    {data.map((movie: Movies | SeriesTV, index) => (
                        <SwiperSlide key={movie.id} className="rounded overflow-hidden">
                            <Link href={`/media/${type}/${movie.id}`}>
                                <MovieCard result={movie}/>
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
