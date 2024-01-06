import MovieCard from '@/components/UI/card/MovieCard'
import ScrollInfinity from '@/components/search/ScrollInfinity'
import NavSearch from '@/components/search/NavSearch'
import { fetchSearch } from '@/lib/api'
import { Media, OrganizadoPorMovie, OrganizadoPorTv } from '@/types/types'
import Link from 'next/link'
import FormSearch from '@/components/shared/header/FormSearch'
import EspaciadoLayout from '@/components/layout/EspaciadoLayout'

export async function generateStaticParams() {
    return [{ searchType: 'movie' }, { searchType: 'tv' }]
}

export default async function SearchPage({
    params,
    searchParams,
}: {
    params: { searchType: string }
    searchParams: {
        q: string
        filter: OrganizadoPorMovie | OrganizadoPorTv
        genre: string
    }
}) {
    // esta buscando una pelicula o una serie
    const type = params.searchType
    const nameType = type === 'movie' ? 'Películas' : 'Series'

    // lo que busca el usuario se vera reflejado en la query = q
    const moviesOrSeries = await fetchSearch(type, searchParams)

    const resultadoDeBusqueda = moviesOrSeries.results
    const totalPages = moviesOrSeries.total_pages

    return (
        <div>
            <NavSearch type={type}>
                <FormSearch defaultValue={searchParams.q || ''} type={type} />
            </NavSearch>
            <EspaciadoLayout
                component='header'
                className='text-center mb-10 mt-[60px] pt-8'
            >
                <h2 className='uppercase text-3xl font-semibold text-txtWhite1'>
                    Explorar
                </h2>
                <p className='text-sm text-txtGray1'>
                    Explora genéros. O directores. O títulos multipremiados.
                    Encuentra películas que no sabías que estabas buscando.
                </p>
            </EspaciadoLayout>
            <EspaciadoLayout
                component='main'
                className='min-h-screen bg-[#0a0a0a] pb-20'
            >
                <header className='text-center py-10 text-txtWhite2'>
                    <h3 className='uppercase text-lg'>
                        Todas las {nameType} disponibles actualmente en
                        aluraflix
                    </h3>
                </header>
                <section className='flex flex-col gap-10 md:grid md:gap-x-2 md:gap-y-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-9 lg:gap-x-4 xl:grid-cols-4 text-txtGray2'>
                    {resultadoDeBusqueda.map((result: Media) => (
                        <Link
                            href={`/media/${result.id}-${type}`}
                            key={result.id}
                        >
                            <MovieCard animate={true} result={result} />
                        </Link>
                    ))}
                    {totalPages >= 2 && (
                        <ScrollInfinity totalPages={totalPages} />
                    )}
                </section>
            </EspaciadoLayout>
        </div>
    )
}
