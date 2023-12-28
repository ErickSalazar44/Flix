"use client";
import Galeria from "@/components/media/Galeria";
import type {
    Media,
    ProductionCompany,
    ProductionCountry,
} from "@/types/types";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import TitleProducction from "./TitleProducction";

const DetallesProduccion = ({ data }: { data: Media }) => {
    // Calcular ganancias
    const ganancias = data.revenue;

    // Calcular inversión
    const inversion = data.budget;
    const pathName = usePathname();

    const articleRef = useRef(null);
    const [isArticleVisible, setArticleVisible] = useState(false);


    useEffect(() => {
        const options = {
            threshold: 0.5, 
        };

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setArticleVisible(true);
                } else {
                    // Restablecer el estado cuando el elemento sale de pantalla
                    setArticleVisible(false);
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, options);

        if (articleRef.current) {
            observer.observe(articleRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, [articleRef.current]);

    return (
        <article
            ref={articleRef}
            className='md:px-16 lg:px-20 2xl:px-0 h-full max-w-[1770px] mx-auto'>
            <div className='mx-auto max-w-[1200px] my-10 flex flex-col lg:flex-row lg:justify-between gap-10'>
                <div className={isArticleVisible ? "animate-fadeInUp" : ""}>
                    <TitleProducction>
                        Compañías de Producción
                    </TitleProducction>
                    <ul className='text-sm flex flex-col gap-1 text-txtWhite1'>
                        {data.production_companies.map(
                            (company: ProductionCompany) => (
                                <li key={company.id}>{company.name}</li>
                            )
                        )}
                    </ul>
                </div>
                <div className={isArticleVisible ? "animate-fadeInUp" : ""}>
                    <TitleProducction >
                        Países de Producción
                    </TitleProducction>
                    <ul className='text-sm flex flex-col gap-1 text-txtWhite1'>
                        {data.production_countries.map(
                            (country: ProductionCountry) => (
                                <li key={country.iso_3166_1}>{country.name}</li>
                            )
                        )}
                    </ul>
                </div>
                <div className={isArticleVisible ? "animate-fadeInUp" : ""}>
                    <TitleProducction>
                        Ingresos Generados
                    </TitleProducction>

                    <span className='text-sm text-txtWhite1'>
                        {ganancias
                            ? `$${ganancias}`
                            : "No tenemos informacion por el momento"}
                    </span>
                </div>
                <div className={isArticleVisible ? "animate-fadeInUp" : ""}>
                    <TitleProducction>
                        Inversion
                    </TitleProducction>

                    <span className='text-sm text-txtWhite1'>
                        {inversion
                            ? `$${inversion}`
                            : "No tenemos informacion por el momento"}
                    </span>
                </div>
                {/* SECCION DE IMAGENES */}
                {/* {!pathName.includes('tv') && <Galeria />}  */}
            </div>
        </article>
    );
};

export default DetallesProduccion;
