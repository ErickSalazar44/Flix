'use client'
import type { GenreTv, MoviesAndSeries } from '@/types/types'
import { useState } from 'react'
import BackgroundImage from './BackgroundImage'
import InfoSection from './InfoSection'
import SwiperHome from './SwiperHome'
import EspaciadoLayout from '../layout/EspaciadoLayout'

export default function HomeHeader({
    moviesTrends,
    genresMovies,
}: {
    moviesTrends: MoviesAndSeries[]
    genresMovies: GenreTv
}) {
    const [currentIndex, setCurrentIndex] = useState(0)

    return (
        <div className='relative mt-nav sm:mt-0 h-screenMovil sm:h-screen'>
            <BackgroundImage
                currentIndex={currentIndex}
                movies={moviesTrends}
            />
            <div className='h-screenMovil sm:h-screen flex flex-col justify-end '>
                <InfoSection
                    currentIndex={currentIndex}
                    movies={moviesTrends}
                    genresMovies={genresMovies}
                />
                <EspaciadoLayout className='relative z-30 mb-2 sm:mb-4'>
                    <h2 className='text-white z-20 relative font-medium mb-3 uppercase'>
                        Últimas películas
                    </h2>
                    <SwiperHome
                        movies={moviesTrends}
                        setCurrentIndex={setCurrentIndex}
                    />
                </EspaciadoLayout>
            </div>
        </div>
    )
}
