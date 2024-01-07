import { fetchRecomendacionMovie } from '@/lib/api'
import React from 'react'
import { Media } from '@/types/types'
import '@/styles/scrollAnimate.css'
import MovieCard from '../UI/card/MovieCard'
import MoviePreview from './MoviePreview'
import Link from 'next/link'
import EspaciadoLayout from '../layout/EspaciadoLayout'
import ImagesGridLayout from '../layout/ImagesGridLayout'

export default async function Recommendations({
    id,
    type,
}: {
    id: string
    type: string
}) {
    const recomendacion = await fetchRecomendacionMovie(type, id)

    if (recomendacion.total_results === 0) return

    const dataFilter = recomendacion.results.filter(
        (movie: Media) =>
            movie.poster_path !== null &&
            movie.backdrop_path !== null &&
            movie.popularity > 100.0
    )

    return (
        <EspaciadoLayout component='section' className='py-8 2xl:pb-20'>
            <h3 className='font-semibold mb-6 text-xl md:text-2xl'>
                Recomendaciones
            </h3>
            <ImagesGridLayout>
                {dataFilter.map((result: Media, index: number) =>
                    index === 0 ? (
                        <Link
                            key={result.id}
                            href={`/media/${result.id}-${type}`}
                            className='md:col-span-2 xl:col-span-1'
                        >
                            <MoviePreview result={result} />
                        </Link>
                    ) : (
                        <Link
                            href={`/media/${result.id}-${type}`}
                            key={result.id}
                        >
                            <MovieCard animate={true} result={result} />
                        </Link>
                    )
                )}
            </ImagesGridLayout>
        </EspaciadoLayout>
    )
}
