'use client'
import type { Media, ProductionCompany, ProductionCountry } from '@/types/types'
import { useEffect, useRef, useState } from 'react'
import TitleProducction from './TitleProducction'

export default function DetallesProduccion({ data }: { data: Media }) {
    // Calcular ganancias
    const ganancias = data.revenue

    // Calcular inversión
    const inversion = data.budget

    const articleRef = useRef(null)
    const [isArticleVisible, setArticleVisible] = useState(false)

    useEffect(() => {
        const options = {
            threshold: 0,
        }

        const handleIntersection = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setArticleVisible(true)
                } else {
                    // Restablecer el estado cuando el elemento sale de pantalla
                    setArticleVisible(false)
                }
            })
        }

        const observer = new IntersectionObserver(handleIntersection, options)

        if (articleRef.current) {
            observer.observe(articleRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <article className='md:px-16 lg:px-0 h-full max-w-[1770px] mx-auto'>
            <div
                ref={articleRef}
                className='mx-auto max-w-[1200px] my-10 flex flex-col md:flex-row md:flex-wrap lg:justify-between gap-10'
            >
                <div className={isArticleVisible ? 'animate-fadeInUp' : ''}>
                    <TitleProducction>Compañías de Producción</TitleProducction>
                    <ul className='text-xs lg:text-sm flex flex-col gap-1 text-txtGray2'>
                        {data.production_companies.map(
                            (company: ProductionCompany) => (
                                <li key={company.id}>{company.name}</li>
                            )
                        )}
                    </ul>
                </div>
                <div className={isArticleVisible ? 'animate-fadeInUp' : ''}>
                    <TitleProducction>Países de Producción</TitleProducction>
                    <ul className='text-sm flex flex-col gap-1 text-txtGray2'>
                        {data.production_countries.map(
                            (country: ProductionCountry) => (
                                <li key={country.iso_3166_1}>{country.name}</li>
                            )
                        )}
                    </ul>
                </div>
                <div className={isArticleVisible ? 'animate-fadeInUp' : ''}>
                    <TitleProducction>Ingresos Generados</TitleProducction>

                    <span className='text-sm text-txtGray2'>
                        {ganancias
                            ? `$${ganancias}`
                            : 'Sin informacion por el momento'}
                    </span>
                </div>
                <div className={isArticleVisible ? 'animate-fadeInUp' : ''}>
                    <TitleProducction>Inversion</TitleProducction>

                    <span className='text-sm text-txtGray2'>
                        {inversion
                            ? `$${inversion}`
                            : 'Sin informacion por el momento'}
                    </span>
                </div>
            </div>
        </article>
    )
}
