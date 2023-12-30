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

    // const windowWidth = window.innerWidth;

    return (
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
                        <MediaCardPoster data={media}/>
                    </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default SliderPoster;
