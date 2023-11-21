'use client'
import useFetch from '@/hooks/useFetch';
import type { Result } from '@/types/types';
import { useEffect, useState } from 'react';
import SwiperHome from './SwiperHome';
import BackgroundImage from './BackgroundImage';
import InfoSection from './InfoSection';

const HomeHeader = () => {

    const [seriesTrends, getSeriesTrends] = useFetch<Result>() // api series mas vistas
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        getSeriesTrends('/api/series-home')
    }, [])

    return (
        <div>
            <BackgroundImage currentIndex={currentIndex} movies={seriesTrends?.results}/>
			<InfoSection currentIndex={currentIndex} movies={seriesTrends?.results}/>
            <div className='px-8 md:px-10 lg:px-12 2xl:px-16'>
                <h2 className='text-white text-lg z-20 relative font-medium mb-3'>
                    Últimas series
                </h2>
                <SwiperHome movies={seriesTrends?.results} setCurrentIndex={setCurrentIndex} />
            </div>
        </div>
    )
}

export default HomeHeader;