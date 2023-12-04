import { fetchDataMovieId } from "@/utils/fetchDataMovieId";
import React, { Suspense } from "react";
import BgImage from "@/components/serieMovie/BgImage";
import Header from "@/components/serieMovie/Header";
import Reparto from "@/components/serieMovie/Reparto";
import { Movie, ProductionCompany, ProductionCountry } from "@/types/types";
import ContenedorCarrusel from "@/components/serieMovie/ContenedorCarrusel";
import Galeria from "@/components/serieMovie/Galeria";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import { fetchGaleriaMovie } from "@/lib/api";

export default async function MovieId({ params }: { params: { id: string } }) {
    const { id } = params;

    const data: Movie = await fetchDataMovieId(`/movie/${id}`);
    const galeria = await fetchGaleriaMovie(id)

    if (data === null) {
        throw new Error(`Failed to fetch data. Status: ${data}`);
    }

    return (
        <div className=''>
            <BgImage data={data} />

            {/* MAIN */}
            <div className='mt-[60vh] bg-gradiantTop backdrop-blur-3xl w-full lg:backdrop-blur-none lg:bg-none lg:mt-[45vh]'>
                <main className='relative w-full carrusel pb-0'>

                    {/* INFO MOVIE O SERIE */}
                    <div className='pt-8 px-6 md:px-10 lg:px-12 2xl:px-16'>
                        <Header data={data} galeria={galeria} />
                    </div>

                    <Suspense fallback={<h3>CARGANDO ...</h3>}>
                        <Reparto id={id} />
                    </Suspense>

                    <Suspense fallback={<p>CARGANDO ...</p>}>
                        <ContenedorCarrusel id={id} />
                    </Suspense>
                    
                    <article className="mt-8 px-6 md:px-10 lg:px-12 2xl:px-16 bg-[#EAEAEA] text-[#666666] flex flex-col gap-10 py-8">
                        <div>
                            <h4 className='mb-2 font-semibold'>
                                Compañías de Producción:
                            </h4>
                            <ul className='text-xs flex flex-col gap-1'>
                                {data.production_companies.map(
                                    (company: ProductionCompany) => (
                                        <li key={company.id}>{company.name}</li>
                                    )
                                )}
                            </ul>
                        </div>
                        <div>
                            <h4 className='mb-2 font-semibold'>
                                Países de Producción:
                            </h4>
                            <ul className='text-xs flex flex-col gap-1'>
                                {data.production_countries.map(
                                    (country: ProductionCountry) => (
                                        <li key={country.iso_3166_1}>
                                            {country.name}
                                        </li>
                                    )
                                )}
                            </ul>
                        </div>
                    </article>

                    <div className="mb-7 relative before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantBotton before:absolute lg:hidden">
                        <Image
                            src={`https://image.tmdb.org/t/p/w780${data.backdrop_path}`}
                            alt={`Poster ${data.title}`}
                            width={500}
                            height={300}
                            className="object-cover h-full w-full"
                        />
                        <div className='absolute bottom-0 p-4 z-10'>
                            <h4 className='font-semibold text-xl line-clamp-1'>
                                {data.original_title}
                            </h4>
                            <span className='text-xs'>
                                {formatDate(data.release_date)}
                            </span>
                        </div>
                    </div>

                    <Galeria id={id} />
                </main>
            </div>
        </div>
    );
}
