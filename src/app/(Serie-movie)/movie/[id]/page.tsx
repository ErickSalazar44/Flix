import { fetchDataMovieId } from "@/utils/fetchDataMovieId";
import React, { Suspense } from "react";
import BgImage from "@/components/serieMovie/BgImage";
import Header from "@/components/serieMovie/Header";
import Reparto from "@/components/serieMovie/Reparto";

export default async function MovieId({ params }: { params: { id: string } }) {
    const { id } = params;

    const data = await fetchDataMovieId(`/movie/${id}`);

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
                        <h3 className='mb-2'>{data.tagline}</h3>
                        <p className='leading-8 text-sm text-[#f7f7f7] font-light [text-wrap:balance]'>
                            {data.overview}
                        </p>
                    </section>

                    <Suspense fallback={<h3>CARGANDO ...</h3>}>
                        <Reparto id={id}/>
                    </Suspense>
                </div>
                    <div className="min-h-screen "></div>
            </div>

        </div>
    );
}
