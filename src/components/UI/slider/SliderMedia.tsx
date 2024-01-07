'use client'
import { MoviesAndSeries } from '@/types/types'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import MovieCard from '../card/MovieCard'
import { ArrowLeft, ArrowRight } from '@/components/icons/Icons'

export default function SliderMedia({
    data,
    type,
    className,
}: {
    data: MoviesAndSeries[]
    type: string
    className?: string
}) {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const [isInit, setIsInit] = useState(false)
    const [isEnd, setIsEnd] = useState(false)
    const [isScrollNeeded, setIsScrollNeeded] = useState(false)

    const handleWheel = () => {
        const container = containerRef.current
        if (container) {
            setIsInit(container.scrollLeft === 0)
            setIsEnd(
                container.scrollLeft >=
                    container.scrollWidth - container.offsetWidth
            )
            container.removeEventListener('transitionend', handleWheel)
        }
    }

    const handleScroll = (direction: 'prev' | 'next') => {
        const container = containerRef.current
        if (container) {
            const cardWidth = container.clientWidth // ancho de cada tarjeta
            const cardsInView = Math.floor(container.offsetWidth / cardWidth) // Número de tarjetas visibles
            const scrollAmount = cardWidth * cardsInView // desplazamiento
            const maxScroll = container.scrollWidth - container.offsetWidth // width maximo del scroll

            container.addEventListener('transitionend', handleWheel)
            if (direction === 'prev') {
                container.scrollLeft = Math.max(
                    0,
                    container.scrollLeft - scrollAmount
                )
            } else if (direction === 'next') {
                container.scrollLeft = Math.min(
                    maxScroll,
                    container.scrollLeft + scrollAmount
                )
            }
        }
    }

    useEffect(() => {
        const container = containerRef.current
        const checkScroll = () => {
            if (container) {
                setIsScrollNeeded(container.scrollWidth > container.clientWidth)
            }
        }

        checkScroll() // valida si es necesario el controlador < >
        handleWheel() // verifica la navegacion

        const handleResize = () => {
            checkScroll()
        }

        window.addEventListener('resize', handleResize) // Vuelve a verificar cada vez que cambia el tamaño de la ventana

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [containerRef])

    return (
        <div className='relative group/control'>
            {isScrollNeeded && (
                <div
                    className={`invisible opacity-0 transition duration-300 absolute z-40 h-full sm:-left-5 lg:-left-9 size-10 grid place-content-center rounded-l-lg ${
                        !isInit &&
                        'sm:group-hover/control:bg-black/10 sm:group-hover/control:visible sm:group-hover/control:opacity-100'
                    }`}
                >
                    <button
                        className={`size-10 flex justify-center items-center rounded-full ${
                            isInit && 'hidden'
                        }`}
                        aria-label='Mover el carrusel hacia atrás'
                        onClick={() => handleScroll('prev')}
                    >
                        <ArrowLeft clasName='size-5 md:size-6 lg:size-7' />
                    </button>
                </div>
            )}

            <div
                ref={containerRef}
                className='flex gap-2 overflow-x-scroll carrusel snap-x snap-mandatory scroll-smooth'
            >
                {data.map((media) => (
                    <Link
                        href={`/media/${media.id}-${type}`}
                        as={`/media/${media.id}-${type}`}
                        key={media.id}
                        className='snap-start flex-shrink-0'
                    >
                        <div
                            className={`${
                                className
                                    ? className
                                    : 'w-[calc(100vw-4rem)] sm:w-[calc(50vw-3rem)] lg:w-[calc(33.33vw-3rem)] 2xl:w-[calc(25vw-3rem)] 3xl:w-[calc(20vw-2.3rem)]'
                            } h-full`}
                        >
                            <MovieCard result={media} />
                        </div>
                    </Link>
                ))}
            </div>
            {isScrollNeeded && (
                <div
                    className={`invisible opacity-0 transition duration-300 absolute z-40 h-full sm:-right-5 lg:-right-9 size-10 grid place-content-center top-0 rounded-r-lg 
                    ${
                        !isEnd &&
                        'sm:group-hover/control:bg-black/10 sm:group-hover/control:visible sm:group-hover/control:opacity-100'
                    }`}
                >
                    <button
                        className={`size-10 flex justify-center items-center rounded-full ${
                            isEnd && 'hidden'
                        } `}
                        aria-label='Mover el carrusel hacia adelante'
                        onClick={() => handleScroll('next')}
                    >
                        <ArrowRight clasName='size-5 md:size-6 lg:size-7' />
                    </button>
                </div>
            )}
        </div>
    )
}
