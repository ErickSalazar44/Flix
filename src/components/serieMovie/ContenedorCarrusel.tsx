import { fetchRecomendacionMovie } from "@/lib/api";
import React from "react";
import { Movie } from "@/types/types";
import "../UI/scrollAnimate.css";
import MovieCard from "../UI/MovieCard";
import MoviePreview from "./MoviePreview";

const ContenedorCarrusel = async ({ id }: { id: string }) => {
    const recomendacion = await fetchRecomendacionMovie(id);

    if (recomendacion.total_results === 0) return 

    const dataFilter = recomendacion.results.filter(
        (movie: Movie) =>
            movie.poster_path !== null && movie.backdrop_path !== null && movie.popularity > 100.000
    );

    return (
        <div className='py-8 px-6 md:px-10 lg:px-12 2xl:px-16'>
            <h3 className='font-semibold mb-6 text-xl md:text-2xl'>Recomendaciones</h3>
            <div className='flex flex-col gap-10 md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-2'>
                {dataFilter.map((result: Movie, index: number) =>
                    index === 0 ? (
                        <div key={result.id}>
                            <MoviePreview  result={result} />
                        </div>
                    ) : (
                        <div key={result.id}>
                            <MovieCard result={result} index={index}/>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default ContenedorCarrusel;
