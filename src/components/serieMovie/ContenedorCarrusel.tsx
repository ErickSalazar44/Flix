import { fetchRecomendacionMovie } from "@/lib/api";
import React from "react";
import { Movie } from "@/types/types";
import Image from "next/image";
import { formatDate } from "@/utils/formatDate";
import { Hd } from "../icons/Icons";
import "../UI/scrollAnimate.css";
import Link from "next/link";

const ContenedorCarrusel = async ({ id }: { id: string }) => {
    const recomendacion = await fetchRecomendacionMovie(id);

    const dataFilter = recomendacion.results.filter(
        (movie: Movie) =>
            movie.poster_path !== null && movie.backdrop_path !== null && movie.popularity > 100.000
    );

    return (
        <div className='py-8 px-6 md:px-10 lg:px-12 2xl:px-16'>
            <h3 className='font-semibold mb-6 text-xl md:text-2xl'>Recomendaciones</h3>
            <div className='flex flex-col gap-10 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-2'>
                {dataFilter.map((result: Movie, index: number) =>
                    index === 0 ? (
                        <Link href={`/movie/${result.id}`} className="md:col-span-2 lg:col-span-3">
                            <article className='relative letterScroll md:grid-cols-2 md:grid'>
                                <header className="relative before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantTop before:absolute">
                                    <div className='absolute top-0 p-4 z-10'>
                                        <h4 className='font-semibold text-xl line-clamp-1 lg:text-2xl'>
                                            {result.title}
                                        </h4>
                                        <span className='text-xs md:text-sm  lg:text-base'> {formatDate(result.release_date)} </span>
                                    </div>
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w780${result.backdrop_path}`}
                                        alt={`Poster ${result.title}`}
                                        width={500}
                                        height={300}
                                        className="w-full"
                                    />
                                </header>
                                <footer className='bg-white text-black p-4 md:flex md:flex-col'>
                                    <div className="md:flex-1">
                                        <p className='text-xs leading-5 line-clamp-5 mb-4 md:line-clamp-6 md:text-sm lg:line-clamp-none'>
                                            {result.overview}
                                        </p>
                                    </div>
                                    <div>
                                        <span className='text-white'>
                                            <Hd />
                                        </span>
                                    </div>
                                </footer>
                            </article>
                        </Link>
                    ) : (
                        <Link href={`/movie/${result.id}`}>
                            <div className="relative letterScroll2 before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantBotton before:absolute">
                                <Image
                                    src={`https://image.tmdb.org/t/p/w780${result.backdrop_path}`}
                                    alt={`Poster ${result.title}`}
                                    width={500}
                                    height={300}
                                    className="w-full"
                                />
                                <div className='absolute bottom-0 p-4 z-10'>
                                    <h4 className='font-semibold text-xl line-clamp-1'>
                                        {result.original_title}
                                    </h4>
                                    <span className='text-xs'>
                                        {formatDate(result.release_date)}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </div>
    );
};

export default ContenedorCarrusel;
