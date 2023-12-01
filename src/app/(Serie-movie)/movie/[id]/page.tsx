import { fetchDataMovieId } from "@/utils/fetchDataMovieId";
import React, { Suspense } from "react";
import BgImage from "@/components/serieMovie/BgImage";
import Header from "@/components/serieMovie/Header";
import Reparto from "@/components/serieMovie/Reparto";
import { Movie, ProductionCompany, ProductionCountry } from "@/types/types";
import ContenedorCarrusel from "@/components/serieMovie/ContenedorCarrusel";
import Galeria from "@/components/serieMovie/Galeria";




export default async function MovieId({ params }: { params: { id: string } }) {
    const { id } = params;

    const data: Movie = await fetchDataMovieId(`/movie/${id}`);

    if (data === null) {
        throw new Error(`Failed to fetch data. Status: ${data}`);
    }

    return (
        <div className=''>
            <BgImage data={data} />
            {/* <div className="h-[60vh] w-full bg-gradiantBotton"></div> */}
            <div className='mt-[60vh] py-8 px-8 bg-gradiantTop backdrop-blur-3xl'>
                <div className='relative w-full carrusel pb-32'>
                    <Header data={data} />

                    <section className='py-7'>
                        <header>
                            <h3 className='mb-2'>{data.tagline}</h3>
                            <p className='leading-8 text-sm text-[#f7f7f7] font-light [text-wrap:balance]'>
                                {data.overview}
                            </p>
                        </header>
                    </section>

                    <Suspense fallback={<h3>CARGANDO ...</h3>}>
                        <Reparto id={id} />
                    </Suspense>

                    <Suspense fallback={<p>CARGANDO ...</p>}>
                        <ContenedorCarrusel id={id} />
                    </Suspense>

                    <div className='py-7'>
                        <h4 className="mb-2 font-semibold">Compañías de Producción:</h4>
                        <ul className='text-xs text-[#f7f7f7] flex flex-col gap-1'>
                            {data.production_companies.map((company: ProductionCompany) => (
                                <li key={company.id}>{company.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='py-7'>
                        <h4 className="mb-2 font-semibold">Países de Producción:</h4>
                        <ul className='text-xs text-[#f7f7f7] flex flex-col gap-1'>
                            {data.production_countries.map((country: ProductionCountry) => (
                                <li key={country.iso_3166_1}>{country.name}</li>
                            ))}
                        </ul>
                    </div>
                    <div className='py-7'>
                        <h4 className="mb-2 font-semibold">Recaudación:</h4>
                        <p className="text-xs text-[#f7f7f7]">{`$${data.revenue.toLocaleString()}`}</p>
                    </div>
                    <div className='py-7'>
                        <h4 className="mb-2 font-semibold">Presupuesto:</h4>
                        <p className="text-xs text-[#f7f7f7]">{`$${data.budget.toLocaleString()}`}</p>
                    </div>
                    <div className='py-7'>
                        <h4 className="mb-2 font-semibold">Rentabilidad:</h4>
                        <p className="text-xs text-[#f7f7f7]">{`$${(data.revenue - data.budget).toLocaleString()}`}</p>
                    </div>


                    <Suspense fallback={<span>CARGANDO ...</span>}>
                        <Galeria id={id}/>
                    </Suspense>

                </div>
            </div>
        </div>
    );
}
