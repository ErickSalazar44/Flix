'use client'
// Import Swiper styles
import "swiper/css";

import { MoviesAndSeries } from "@/types/types";
import { SwiperSlide, Swiper } from "swiper/react";
import { useEffect, useRef, useState } from "react";
import { SliderSkeleton } from "../skeletons";
import Link from "next/link";
import MovieCard from "../card/MovieCard";
import "@/styles/scrollAnimate.css";
import { Autoplay } from "swiper/modules";

const SliderBackdrop = ({
    data,
    type,
    autoPlay
}: {
    data: MoviesAndSeries[];
    type: string;
    autoPlay: boolean
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

    const breakpoints = {
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1240: { slidesPerView: 4 },
        1600: { slidesPerView: 5 },
    };

    return (
        <div ref={carruselRef}>
            {swiperReady ? (
                <Swiper
                    slidesPerView={1}
                    spaceBetween={5}
                    breakpoints={breakpoints}
                    modules={[ Autoplay  ]}
                    loop={true}
                    className='mySwiper cursor-grab select-none'
                    onSwiper={() => setSwiperReady(true)}
                    autoplay={autoPlay ? { delay: 4000 } : undefined}
                >
                    {data.map((media: MoviesAndSeries) => (
                        <SwiperSlide
                            key={media.id}
                        >
                            <Link href={`/media/${media.id}-${type}`} as={`/media/${media.id}-${type}`}>
                                <MovieCard result={media} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            ) : (
                <SliderSkeleton />
            )}
        </div>
    );
};

export default SliderBackdrop;
