import { fetchRecomendacionMovie } from "@/lib/api";
import React from "react";
import CarruselMovil from "../UI/CarruselMovil";
import { Movie, Result, SeriesTV, isMovies } from "@/types/types";
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
    // if (recomendacion?.results) return;

    return (
        <div className='py-7'>
            <h3 className='font-semibold mb-6 text-xl'>Recomendaciones</h3>
            <div className='flex flex-col gap-10'>
                {dataFilter.map((result: Movie, index: number) =>
                    index === 0 ? (
                        <Link href={`/movie/${result.id}`}>
                            <article className='relative letterScroll'>
                                <header className='absolute top-0 p-4 z-10'>
                                    <h4 className='font-semibold text-xl line-clamp-1'>
                                        {result.title}
                                    </h4>
                                    <span className='text-xs'>
                                        {formatDate(result.release_date)}
                                    </span>
                                </header>
                                <div className="relative before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantTop before:absolute">
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w780${result.backdrop_path}`}
                                        alt={`Poster ${result.title}`}
                                        width={500}
                                        height={300}
                                    />
                                </div>
                                <footer className='bg-white text-black p-4'>
                                    <p className='text-xs leading-5 line-clamp-5 mb-4'>
                                        {result.overview}
                                    </p>
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
