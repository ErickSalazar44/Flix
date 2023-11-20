'use client'
import useFetch from '@/hooks/useFetch';
import type { GenreTv, Result } from '@/types/types';
import { useEffect } from 'react';

const MovieSlider = () => {

    const [seriesTrends , getSeriesTrends] = useFetch<Result>() // api series mas vistas
    const [genresTv , getgenresTv] = useFetch<GenreTv>() // api genres tv

    useEffect(() => {
        getSeriesTrends('/api/series-home')
        getgenresTv('/api/genres-tv')
    }, [])

    return (
        <div>

        </div>
    )
}

export default MovieSlider