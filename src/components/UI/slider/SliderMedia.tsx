"use client";
import { MoviesAndSeries } from "@/types/types";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MovieCard from "../card/MovieCard";
import { ArrowLeft, ArrowRight } from "@/components/icons/Icons";

export default function SliderMedia({
    data,
    type,
}: {
    data: MoviesAndSeries[];
    type: string;
}) {
    const containerRef = useRef<HTMLDivElement | null>(null);

    const handleScroll = (direction: "prev" | "next") => {
        const container = containerRef.current;
        if (container) {
            const cardWidth = container.clientWidth; // ancho de cada tarjeta
            const cardsInView = Math.floor(container.offsetWidth / cardWidth); // Número de tarjetas visibles
            const scrollAmount = cardWidth * cardsInView;

            if (direction === "prev") {
                container.scrollLeft -= scrollAmount;
            } else if (direction === "next") {
                container.scrollLeft += scrollAmount;
            }
        }
    };

    const [isScrollNeeded, setIsScrollNeeded] = useState(false);

    useEffect(() => {
        const container = containerRef.current;

        const checkScroll = () => {
            if (container) {
                setIsScrollNeeded(
                    container.scrollWidth > container.clientWidth
                );
            }
        };

        checkScroll();

        // Vuelve a verificar cada vez que cambia el tamaño de la ventana
        const handleResize = () => {
            checkScroll();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [containerRef]);

    return (
        <div className='relative'>
            <div className='w-full' />

            {isScrollNeeded && (
                <div className='absolute z-40 h-full left-0 size-10 grid place-content-center'>
                    <button
                        className={`size-10 flex justify-center items-center rounded-full`}
                        aria-label='Mover el carrusel hacia atrás'
                        onClick={() => handleScroll("prev")}
                    >
                        <ArrowLeft clasName='size-5' />
                    </button>
                </div>
            )}

            <div
                ref={containerRef}
                className='flex gap-6 overflow-scroll carrusel snap-x snap-mandatory scroll-smooth'
            >
                <div className='lg:w-12 2xl:w-16 snap-start'></div>
                {data.slice(0, 10).map((media) => (
                    <Link
                        href={`/media/${media.id}-${type}`}
                        as={`/media/${media.id}-${type}`}
                        key={media.id}
                        className='snap-start flex-shrink-0'
                    >
                        <div className='max-w-96'>
                            <MovieCard result={media} />
                        </div>
                    </Link>
                ))}
            </div>
            {isScrollNeeded && (
                <div className='absolute z-40 h-full right-0 size-10 grid place-content-center top-0'>
                    <button
                        className='size-10 flex justify-center items-center rounded-full'
                        aria-label='Mover el carrusel hacia adelante'
                        onClick={() => handleScroll("next")}
                    >
                        <ArrowRight clasName='size-5' />
                    </button>
                </div>
            )}
        </div>
    );
}
