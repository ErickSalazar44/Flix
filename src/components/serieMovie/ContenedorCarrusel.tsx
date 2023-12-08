import { fetchRecomendacionMovie } from "@/lib/api";
import React from "react";
import { Media } from "@/types/types";
import "../UI/scrollAnimate.css";
import MovieCard from "../UI/MovieCard";
import MoviePreview from "./MoviePreview";
import Link from "next/link";

const ContenedorCarrusel = async ({
    id,
    type,
}: {
    id: string;
    type: string;
}) => {
    const recomendacion = await fetchRecomendacionMovie(type, id);

    if (recomendacion.total_results === 0) return;

    const dataFilter = recomendacion.results.filter(
        (movie: Media) =>
            movie.poster_path !== null &&
            movie.backdrop_path !== null &&
            movie.popularity > 100.0
    );

    return (
        <div className='py-8 px-6 md:px-10 lg:px-12 2xl:px-16'>
            <h3 className='font-semibold mb-6 text-xl md:text-2xl'>
                Recomendaciones
            </h3>
            <div className='flex flex-col gap-10 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4'>
                {dataFilter.map((result: Media, index: number) =>
                    index === 0 ? (
                        <div
                            key={result.id}
                            className='md:col-span-2 lg:col-span-3 xl:col-span-1 '
                        >
                            <MoviePreview type={type} result={result} />
                        </div>
                    ) : (
                        <Link
                            href={`/media/${type}/${result.id}`}
                            key={result.id}
                        >
                            <MovieCard result={result} />
                        </Link>
                    )
                )}
            </div>
        </div>
    );
};

export default ContenedorCarrusel;
