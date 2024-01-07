'use client'
import { useParams } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Media } from '../../types/types'
import Link from 'next/link'
import MovieCard from '../UI/card/MovieCard'

const DEFAULT_PAGE = 2
const DEFAULT_FILTER = 'trending'

export default function ScrollInfinity({ totalPages }: { totalPages: number }) {
    const [mediaMovieorSeries, setMediaMovieorSeries] = useState<Media[]>([]) // estado para guardar la data
    const [page, setPage] = useState(DEFAULT_PAGE) // numbero de paginas

    // esto verifica si el usuario llego al final y hace una nueva peticion para scroll infinity
    const loadingRef = useRef<HTMLDivElement>(null)

    const { searchType }: { searchType: string } = useParams() // type => movie or tv

    // input del usuario
    const searchParams = useSearchParams()
    const search = searchParams.get('q') // q => query
    const filter = searchParams.get('filter') || DEFAULT_FILTER
    const genre = searchParams.get('genre')

    const fetchApiData = useCallback(
        async (url: string) => {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`Error en la petición: ${response.statusText}`)
            }
            const data = await response.json()
            const results = data.results
            setMediaMovieorSeries((prevData) => [...prevData, ...results])
            setPage((prevPage) => prevPage + 1)
        },
        [setMediaMovieorSeries, setPage]
    )

    // peticion para loadMore
    const fetchDataPage = useCallback(async () => {
        if (page >= totalPages) return

        const url = search
            ? `/api/search?q=${search}&type=${searchType}&page=${page}`
            : genre
            ? `/api/search?type=${searchType}&page=${page}&genre=${genre}`
            : `/api/search?type=${searchType}&page=${page}&filter=${filter}`

        try {
            await fetchApiData(url)
        } catch (error) {
            console.error('Error en fetchDataPage:', error)
        }
    }, [page, search, searchType, genre, filter, totalPages, fetchApiData])

    useEffect(() => {
        const currentRef = loadingRef.current
        if (!currentRef) return

        const loadingObserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    return fetchDataPage()
                }
            },
            { rootMargin: '100px' }
        )

        loadingObserver.observe(currentRef)

        // Almacena la referencia actual en una variable local
        return () => {
            if (currentRef) {
                loadingObserver.unobserve(currentRef)
            }
        }
    }, [mediaMovieorSeries, fetchDataPage])

    // Si la query o busqueda de usuario cambia vaciamos los estados
    useEffect(() => {
        setMediaMovieorSeries([])
        setPage(2)
    }, [search, filter, genre])

    const uniqueIds = new Set()
    // Filtrar datos por id único
    const dataNoRepeat = mediaMovieorSeries.filter((media) => {
        if (!uniqueIds.has(media.id)) {
            uniqueIds.add(media.id)
            return true
        }
        return false
    })

    return (
        <>
            {mediaMovieorSeries.length > 0 &&
                dataNoRepeat.map(({ id, ...media }) => (
                    <Link href={`/media/${id}-${searchType}`} key={id}>
                        <MovieCard animate={true} result={media} />
                    </Link>
                ))}
            {page <= totalPages && (
                <div ref={loadingRef}>
                    {page >= totalPages ? '' : 'Loading...'}
                </div>
            )}
        </>
    )
}
