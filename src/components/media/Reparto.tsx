import { fetchRepartoMovie } from '@/lib/api'
import { Reparto } from '@/types/types'
import { obtenerActoresConImagenes } from '@/utils/obtenerActoresConImagenes'
import React from 'react'
import CarruselReparto from '../UI/slider/CarruselReparto'

export default async function Reparto({
    id,
    type,
}: {
    id: string
    type: string
}) {
    const start: Reparto = await fetchRepartoMovie(type, id)
    const director =
        start.crew.find(
            (miembro) =>
                miembro.job === 'Director' ||
                miembro.job === 'Series Director' ||
                miembro.job === 'Executive Producer'
        ) ?? start.crew[0]

    const actoresConImagenes = obtenerActoresConImagenes(start)

    // En el caso no haya actores no retornara nada
    if (start.cast.length === 0) return

    return (
        <section className='px-5 md:px-8 lg:px-12 lg:py-12 lg:bg-[#050505]'>
            <div className='md:px-8 lg:px-12 2xl:px-16 max-w-[1570px]  relative mx-auto pt-16 md:pt-24'>
                <h2 className='letterScroll font-medium text-2xl md:text-4xl text-txtGray2'>
                    Actores principales
                </h2>
            </div>
            <div className='px-12 md:px-16 lg:px-20 2xl:px-0 letterScroll2 relative mx-auto pt-16 md:pt-20 max-w-[1200px] opacity-90'>
                <span className='lg:text-4xl font-semibold text-txtGray1 text-3xl'>
                    {director?.known_for_department}
                </span>
                <br />
                <h3 className='lg:text-6xl font-semibold mt-3 text-3xl'>
                    {director?.name}
                </h3>
            </div>
            <div className='md:px-16 lg:px-20 2xl:px-0 h-full max-w-[1770px] mx-auto'>
                <CarruselReparto actores={actoresConImagenes} type={type} />
            </div>
        </section>
    )
}
