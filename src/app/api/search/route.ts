import { Media } from '@/types/types'
import { fetchDataNoStore } from '@/utils/fetchDataNoStore'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams
    const query = searchParams.get('q')
    const type = searchParams.get('type')
    const genre = searchParams.get('genre')
    const page = searchParams.get('page')
    const filter = searchParams.get('filter')

    // BUSQUEDA
    if (query) {
        const path = `/search/${type}`
        const busqueda = `query=${encodeURIComponent(
            query
        )}&include_adult=false&language=es-MX&page=${page}`

        const data = await fetchDataNoStore(path, busqueda)
        const filterData = data.results.filter(
            (result: Media) =>
                result.poster_path !== null &&
                result.backdrop_path !== null &&
                result.popularity > 10.0
        )
        return NextResponse.json({ ...data, results: filterData })
    }

    // FILTRADO
    if (!genre) {
        const option =
            filter === 'trending'
                ? `/trending/${type}/week`
                : `/${type}/${filter}`
        const data = await fetchDataNoStore(
            option,
            `page=${page}&language=es-MX`
        )
        return NextResponse.json(data)
    }

    // CATEGORIA
    const data = await fetchDataNoStore(
        `/discover/${type}`,
        `with_genres=${genre}&page=${page}&language=es-MX`
    )
    return NextResponse.json(data)
}
