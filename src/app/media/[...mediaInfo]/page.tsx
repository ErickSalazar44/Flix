import BgImage from "@/components/serieMovie/BgImage";
import ContenedorCarrusel from "@/components/serieMovie/ContenedorCarrusel";
import DetallesProduccion from "@/components/serieMovie/DetallesProduccion";
import Header from "@/components/serieMovie/Header";
import Reparto from "@/components/serieMovie/Reparto";
import { fetchGaleriaMovie } from "@/lib/api";
import { fetchDataMovieId } from "@/utils/fetchDataMovieId";
import { Suspense } from "react";

export default async function PageMedia({
    params,
}: {
    params: { mediaInfo: string[] };
}) {
    const [type, id] = params.mediaInfo;
    const data = await fetchDataMovieId(`/${type}/${id}`);
    const galeria = type === "movie" ? await fetchGaleriaMovie(id) : undefined;

    return (
        <div>
            {/* FONDO */}
            <BgImage data={data} />

            {/* SECCION PRINCIPAL */}
            <main className='relative w-full carrusel pb-0 mt-[60vh] bg-gradiantTop backdrop-blur-3xl lg:backdrop-blur-none lg:bg-none lg:mt-[45vh]'>
                {/* INFO MOVIE */}
                <div className='pt-8 px-6 md:px-10 lg:px-12 2xl:px-16'>
                    <Header data={data} galeria={galeria} />
                </div>

                <div className='flex flex-col md:flex-col-reverse'>
                    {/* SECCION ACTORES */}
                    <Suspense fallback={<span>CARGANDO ...</span>}>
                        <Reparto type={type} id={id} />
                    </Suspense>

                    {/* SECCION RECOMENDADOS */}
                    <Suspense fallback={<span>CARGANDO ...</span>}>
                        <ContenedorCarrusel type={type} id={id} />
                    </Suspense>
                </div>

                {/* INFORMACION DE LA PELICULA */}
                <div className='bg-[#EAEAEA] text-[#666666] py-8 mb-60 pt-8 px-6 md:px-10 lg:px-12 2xl:px-16'>
                    <DetallesProduccion data={data} galeria={galeria} />
                </div>
            </main>
        </div>
    );
}
