'use client'
import useFetch from '@/hooks/useFetch';
import type { GenreTv, Result } from '@/types/types';
import { useEffect, useState } from 'react';
import SwiperHome from './SwiperHome';
import BackgroundImage from './BackgroundImage';
import InfoSection from './InfoSection';
import { HomePageSkeleton } from '../UI/skeletons';

const HomeHeader = () => {

    const [seriesTrends, fetchSeriesTrends] = useFetch<Result>() // api series mas vistas
    const [genresTv, fetchGenresTv] = useFetch<GenreTv>() // api genres tv
    const [currentIndex, setCurrentIndex] = useState(0); // estado para manejar la imagen de fondo que se va mostrar
    const [isLoading, setIsLoading] = useState(true); // pantalla de carga

    const fetchData = async () => {
        try {
            await Promise.all([fetchSeriesTrends('/api/series-home'), fetchGenresTv('/api/genres-tv')]);
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [])

    if (isLoading) {
        return <HomePageSkeleton />
    }

    return (
        <div className='relative'>
            <BackgroundImage currentIndex={currentIndex} movies={seriesTrends?.results} />
            <InfoSection currentIndex={currentIndex} movies={seriesTrends?.results} genresTv={genresTv} />
            <div className='px-6 md:px-10 lg:px-12 2xl:px-16'>
                <h2 className='text-white text-lg z-20 relative font-medium mb-3'>
                    Últimas series
                </h2>

                <SwiperHome
                    movies={seriesTrends?.results}
                    setCurrentIndex={setCurrentIndex}
                />
            </div>
        </div>
    )
}

export default HomeHeader;