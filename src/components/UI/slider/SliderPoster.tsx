'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Navigation } from "swiper/modules";
import { MoviesAndSeries } from "@/types/types";
import MediaCardPoster from "../card/MediaCardPoster";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { CarruselSkeleton } from "../skeletons";

const SliderPoster = ({
    data,
    type,
}: {
    data: MoviesAndSeries[];
    type: string;
}) => {

    const breakpoints = {
        300: {
            slidesPerView: 2,
        },
        600: {
            slidesPerView: 3,
        },
        900: {
            slidesPerView: 4,
        },
        1100: {
            slidesPerView: 5,
        },
        1200: {
            slidesPerView: 6,
        },
        1600: {
            slidesPerView: 7,
        },
        1800: {
            slidesPerView: 8,
        },
    };
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

    // const windowWidth = window.innerWidth;

    return (
        <div ref={carruselRef}>
            {swiperReady ?
                <Swiper
                    modules={[Navigation]}
                    breakpoints={breakpoints}
                    spaceBetween={10}
                    className='mySwiper'
                // navigation={{
                //     nextEl: nextEl.current,
                //     prevEl: prevEl.current,
                // }}
                >
                    {data.map((media) => (
                        <SwiperSlide key={media.id}>
                            <Link href={`/media/${media.id}-${type}`} as={`/media/${media.id}-${type}`}>
                                <MediaCardPoster data={media} />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                :
                <CarruselSkeleton />
            }
        </div>
    );
};

export default SliderPoster;
