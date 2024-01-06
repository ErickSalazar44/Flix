'use client'
import { Cast } from '@/types/types'
import RepartoCard from '../card/RepartoCard'
import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from '@/components/icons/Icons'

export default function CarruselReparto({
    actores,
    type,
}: {
    actores: Cast[]
    type: string
}) {
    const containerRef = useRef<HTMLDivElement | null>(null)

    const handleScroll = (direction: 'prev' | 'next') => {
        const container = containerRef.current

        if (container) {
            const cardWidth =
                container.querySelector('#contenedorImageReparto')
                    ?.clientWidth || 0 // Ancho de una tarjeta

            if (direction === 'prev') {
                container.scrollLeft -= cardWidth
            } else if (direction === 'next') {
                container.scrollLeft += cardWidth
            }
        }
    }

    return (
        <div className='mx-auto mt-16 mb-20 md:mb-40 max-w-[1200px]'>
            <div
                className={`flex w-full justify-end gap-2 mb-4 
                ${actores.length < 2 && 'hidden'}
                ${actores.length < 3 && 'sm:hidden'}`}
            >
                <button
                    className={`bg-[oklch(25.63%_0_0)] hover:bg-white md:border md:border-[oklch(25.63%_0_0)]  size-10 flex justify-center items-center rounded-full group hover:text-[oklch(25.63%_0_0)] transition-all duration-300`}
                    aria-label='Mover el carrusel hacia atrás'
                    onClick={() => handleScroll('prev')}
                >
                    <ArrowLeft clasName='size-5' />
                </button>
                <button
                    className='bg-[oklch(25.63%_0_0)] hover:bg-white md:border md:border-[oklch(25.63%_0_0)]  size-10 flex justify-center items-center rounded-full group hover:text-[oklch(25.63%_0_0)] transition-all duration-300'
                    aria-label='Mover el carrusel hacia adelante'
                    onClick={() => handleScroll('next')}
                >
                    <ArrowRight clasName='size-5' />
                </button>
            </div>
            <div
                ref={containerRef}
                className='relative overflow-x-scroll carrusel snap-x snap-mandatory scroll-smooth'
            >
                <div className='flex gap-6 transition-transform ease-in-out duration-500'>
                    {actores.map((actor) => (
                        <RepartoCard
                            key={`Actor-${actor.credit_id}`}
                            actor={actor}
                            type={type}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
