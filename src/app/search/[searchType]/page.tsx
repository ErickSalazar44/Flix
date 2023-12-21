import MovieCard from "@/components/UI/card/MovieCard";
import { Search } from "@/components/icons/Icons";
import ScrollInfinity from "@/components/search/ScrollInfinity";
import NavSearch from "@/components/search/NavSearch";
import { fetchSearch } from "@/lib/api";
import { Media, OrganizadoPorMovie, OrganizadoPorTv } from "@/types/types";
import Link from "next/link";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
    return [{searchType: 'movie'}, {searchType: 'tv'}]
}


export default async function SearchPage({
    params,
    searchParams,
}: {
    params: { searchType: string };
    searchParams: { q: string; filter: OrganizadoPorMovie | OrganizadoPorTv, genre: string };
}) {
    // esta buscando una pelicula o una serie
    const type = params.searchType;

    // lo que busca el usuario se vera reflejado en la query = q
    const moviesOrSeries = await fetchSearch(type, searchParams);

    async function searchAction(formData: FormData) {
        "use server";
        redirect(`/search/${type}?q=${formData.get("query")}`);
    }

    const resultadoDeBusqueda = moviesOrSeries.results;
    const totalPages = moviesOrSeries.total_pages;

    return (
        <div>
            <NavSearch type={type}>
                <form className='relative w-72' action={searchAction}>
                    <input
                        id="myInputSearch"
                        defaultValue={searchParams.q || ""}
                        name='query'
                        type='text'
                        className='w-full px-4 py-3 text-xs rounded-lg bg-[#111] text-white text-opacity-80 pl-10 placeholder:text-xs outline-none placeholder:text-[#999] placeholder:tracking-wide focus:bg-[#1B1A20]'
                        placeholder={"¿Qué estás buscando?"}
                    />
                    <button
                        type='submit'
                        className='absolute top-[50%] transform -translate-y-1/2 left-3'
                    >
                        <Search clasName="w-4 h-4"/>
                    </button>
                </form>
            </NavSearch>
            <header className='px-6 md:px-10 lg:px-12 2xl:px-16 text-center mb-10 mt-[60px] pt-5'>
                <h1 className='uppercase text-3xl font-semibold text-[#EEE]'>
                    Explorar
                </h1>
                <p className='text-sm text-[#999]'>
                    Explora genéros. O directores. O títulos multipremiados.
                    Encuentra películas que no sabías que estabas buscando.
                </p>
            </header>
            <section className='px-6 md:px-10 lg:px-12 2xl:px-16 uppercase flex items-center gap-4 md:gap-6 mb-10'>


            </section>
            <main className='px-6 md:px-10 lg:px-12 2xl:px-16 min-h-screen bg-[#0a0a0a] text-[#999] pb-20'>
                <header className='text-center py-10'>
                    <h3 className='uppercase text-lg'>
                        Todas las {type}s disponibles actualmente en aluraflix
                    </h3>
                </header>
                <section className='flex flex-col gap-10 md:grid md:gap-x-2 md:gap-y-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-9 lg:gap-x-4 xl:grid-cols-4 text-[#e0e0e0]'>
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
            </main>
        </div>
    );
}
