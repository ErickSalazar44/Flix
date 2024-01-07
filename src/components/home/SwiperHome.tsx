// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import '@/styles/swiper.css'

import { MoviesAndSeries } from '@/types/types'
import { useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight } from '@/icons/Icons'
import useWindowSize from '@/hooks/useWindowSize'
import { getPosterUrl } from '@/utils/getPosterUrl'
import Image from 'next/image'
import { CarruselSkeleton } from '../UI/skeletons'
import Link from 'next/link'

export default function SwiperHome({
    movies,
    setCurrentIndex,
}: {
    movies: MoviesAndSeries[] | undefined
    setCurrentIndex: (index: number) => void
}) {
    const [swiperReady, setSwiperReady] = useState(false)
    const windowSize = useWindowSize()

    const showMovies = useMemo(() => {
        if (windowSize.width >= 1800) return 20
        if (windowSize.width >= 1400) return 16
        if (windowSize.width >= 1024) return 12
        return 10
    }, [windowSize.width])

    const breakpoints = {
        300: { slidesPerView: 2, spaceBetween: 20 },
        600: { slidesPerView: 3, spaceBetween: 30 },
        800: { slidesPerView: 4, spaceBetween: 30 },
        1024: { slidesPerView: 5, spaceBetween: 30 },
        1200: { slidesPerView: 6, spaceBetween: 30 },
        1500: { slidesPerView: 7, spaceBetween: 40 },
        1800: { slidesPerView: 8, spaceBetween: 40 },
    }

    return (
        <div className='relative'>
            <Swiper
                pagination={{
                    clickable: true,
                    el: '.swiper-paginacion',
                }}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
                slidesPerView={2}
                breakpoints={breakpoints}
                loop={true}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Navigation, Autoplay]}
                className='mySwiper'
                autoplay={{ delay: 10000 }}
                onSwiper={() => setSwiperReady(true)}
            >
                {swiperReady ? (
                    movies?.slice(0, showMovies).map((movie) => (
                        <SwiperSlide
                            key={movie.id}
                            className='cursor-grab object-cover'
                        >
                            <Link
                                href={`/media/${movie.id}-movie`}
                                as={`/media/${movie.id}-movie`}
                                className='aspect-[9/14] w-auto h-auto'
                            >
                                <Image
                                    src={getPosterUrl(movie)}
                                    alt={`poster_path ${movie.title}`}
                                    width={206}
                                    height={300}
                                    className={`mix-blend-normal rounded object-cover aspect-[9/14]`}
                                    quality={80}
                                    style={{
                                        width: 'auto',
                                        height: 'auto',
                                        aspectRatio: '9/14',
                                    }}
                                    priority={true}
                                    placeholder='empty'
                                />
                            </Link>
                        </SwiperSlide>
                    ))
                ) : (
                    <CarruselSkeleton />
                )}
            </Swiper>

            {/* Botón de avanzar */}
            <div className='swiper-button-next'>
                <div
                    className={
                        'md:block hidden absolute -top-1 -right-9 w-6 lg:-right-11 lg:w-7 text-white opacity-80 lg:-top-2'
                    }
                >
                    <ArrowRight />
                </div>
            </div>

            {/* Botón de retroceder */}
            <div className='swiper-button-prev'>
                <div
                    className={
                        'md:block hidden  absolute -top-1 -left-9 w-6 lg:-left-11 lg:w-7 text-white opacity-80 lg:-top-5'
                    }
                >
                    <ArrowLeft />
                </div>
            </div>

            {/* Paginacion */}
            <div className='min-h-6 relative z-10 swiper-paginacion w-full text-center' />
        </div>
    )
}
