import BgImage from "@/components/media/BgImage";
import ContenedorCarrusel from "@/components/media/ContenedorCarrusel";
import DetallesProduccion from "@/components/media/DetallesProduccion";
import Header from "@/components/media/Header";
import Reparto from "@/components/media/Reparto";
import { fetchDataNoStore } from "@/utils/fetchDataNoStore";
import { Suspense } from "react";

export default async function PageMedia({
    params,
}: {
    params: { mediaInfo: string };
}) {

    const [id, type ] = params.mediaInfo.split('-')
    // traer los datos con su trailer
    const query = 'language=es-ES&append_to_response=videos'
    const data = await fetchDataNoStore(`/${type}/${id}`,query);

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
                        <Reparto type={type} id={id} />
                    </Suspense>

                    {/* SECCION RECOMENDADOS */}
                    <Suspense fallback={<span>CARGANDO ...</span>}>
                        <ContenedorCarrusel type={type} id={id} />
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
