import BgImage from "@/components/serieMovie/BgImage";
import ContenedorCarrusel from "@/components/serieMovie/ContenedorCarrusel";
import DetallesProduccion from "@/components/serieMovie/DetallesProduccion";
import Header from "@/components/serieMovie/Header";
import Reparto from "@/components/serieMovie/Reparto";
import { fetchDataMovieId } from "@/utils/fetchDataMovieId";
import { Suspense } from "react";

export default async function PageMedia({
    params,
}: {
    params: { mediaType: string, mediaId: string };
}) {

    const {mediaType, mediaId} = params;
    const data = await fetchDataMovieId(`/${mediaType}/${mediaId}`);


    return (
        <div className="scrollMove">
            {/* FONDO */}
            <BgImage data={data} />

            {/* SECCION PRINCIPAL */}
            <main className='relative w-full carrusel pb-0 mt-[60vh] bg-gradiantTop backdrop-blur-3xl lg:backdrop-blur-none lg:bg-none lg:mt-[70vh] xl:mt-[65vh]'>

                {/* INFO MOVIE */}
                <div className='pt-8 px-6 md:px-10 lg:px-12 2xl:px-16'>
                    <Header data={data}/>
                </div>

                <div className='flex flex-col md:flex-col-reverse'>
                    {/* SECCION ACTORES */}
                    <Suspense fallback={<span>CARGANDO ...</span>}>
                        <Reparto type={mediaType} id={mediaId} />
                    </Suspense>

                    {/* SECCION RECOMENDADOS */}
                    <Suspense fallback={<span>CARGANDO ...</span>}>
                        <ContenedorCarrusel type={mediaType} id={mediaId} />
                    </Suspense>
                </div>

                {/* INFORMACION DE LA PELICULA */}
                <div className='bg-[#EAEAEA] text-[#666666] py-8 pt-8 px-6 md:px-10 lg:px-12 2xl:px-16'>
                    <DetallesProduccion data={data}/>
                </div>
            </main>
        </div>
    );
}
