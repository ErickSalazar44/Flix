import { Media, OrganizadoPorMovie, OrganizadoPorTv } from '@/types/types'
import { fetchData } from '@/utils/fetchData'
import { fetchDataNoStore } from '@/utils/fetchDataNoStore'

// HOME MOVIES
export const trendingMoviesWeekly = () => {
    const path = '/trending/movie/week'
    return fetchData(path)
}

// OBTENER GENEROS MOVIE
export const movieGenresList = () => {
    const path = '/genre/movie/list'
    return fetchData(path)
}

// SECCION DE REPARTO MOVIES
export const fetchRepartoMovie = (type: string, id: string) => {
    const path = `/${type}/${id}/credits`
    return fetchDataNoStore(path)
}

// VIDEOS RECOMENDADO MOVIES
export const fetchRecomendacionMovie = (type: string, id: string) => {
    const path = `/${type}/${id}/recommendations`
    return fetchDataNoStore(path, 'language=es-MX')
}

// Informacion del Actor por Id
export const fetchActorForId = (id: string) => {
    const path = `/person/${id}`
    return fetchDataNoStore(path)
}

interface QueryProps {
    q?: string
    filter?: OrganizadoPorMovie | OrganizadoPorTv
    genre?: string
}

// Buscador
export const fetchSearch = async (
    type: string,
    searchParams: QueryProps,
    page: number = 1
) => {
    const search = searchParams.q
    const filter = searchParams.filter ?? 'trending'
    const genre = searchParams.genre

    // BUSQUEDA
    if (search) {
        const path = `/search/${type}`

        try {
            const response = await fetchDataNoStore(
                path,
                `query=${encodeURIComponent(
                    search
                )}&include_adult=false&language=es-ES`
            )

            const filteredResults = response.results.filter(
                (result: Media) =>
                    result.poster_path !== null &&
                    result.backdrop_path !== null &&
                    result.popularity > 10.0
            )

            // Actualiza los resultados en la respuesta original
            response.results = filteredResults

            // Retorna la respuesta modificada
            return response
        } catch (error) {
            console.error('Error en la llamada a la API:', error)
            throw error
        }
    }

    // FILTRADO
    const option =
        filter === 'trending' ? `/trending/${type}/week` : `/${type}/${filter}`
    if (!genre) {
        return fetchDataNoStore(option, `page=${page}&language=es-MX`)
    }

    // Categoria
    return fetchDataNoStore(
        `/discover/${type}`,
        `with_genres=${genre}&language=es-MX`
    )
}
