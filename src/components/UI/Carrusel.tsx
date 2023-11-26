"use client";
import { useEffect, useRef, useState } from "react";
import { Movies, SeriesTV } from "@/types/types";
import { getPosterUrl } from "@/utils/getPosterUrl";
import './carrusel.css'
import { ArrowLeft, ArrowRight } from "../icons/Icons";
import clsx from "clsx";

const Carrusel = ({
    data,
    carruselId,
}: {
    data: SeriesTV[] | Movies[];
    carruselId: string;
}) => {
    const [totalTranslate, setTotalTranslate] = useState(0);
    const [isEndReached, setIsEndReached] = useState(false);
    const containerRef = useRef<HTMLDivElement | null>(null);

    const calculateTranslate = (direction?: "next" | "prev") => {
        const element = containerRef.current;
        if (!element) return;

        const widthTotal = element.scrollWidth;
        const widthVisibleElement = element.offsetWidth;
        const spaceTranslateX = (widthTotal - widthVisibleElement) / 3;
        const directionMap = {
            next: () => {
                const newTranslate = totalTranslate - spaceTranslateX;

                updateTranslate(newTranslate);
                setIsEndReached(
                    newTranslate <= -(widthTotal - widthVisibleElement)
                );
            },
            prev: () => {
                const newTranslate = totalTranslate + spaceTranslateX;
                updateTranslate(newTranslate);
                setIsEndReached(false);
            },
            none: () => {
                const distanceFromEnd = (widthTotal - widthVisibleElement) / 2;
                const distanceFromStart = Math.abs(totalTranslate);

                if (distanceFromEnd < distanceFromStart) {
                    const newTranslate = -widthTotal + widthVisibleElement;
                    updateTranslate(newTranslate);
                    setIsEndReached(true);
                } else {
                    // De lo contrario, mueve hacia el principio
                    updateTranslate(0);
                    setIsEndReached(false);
                }
            },
        };

        const updateTranslate = (newTranslate: number) => {
            element.style.transform = `translateX(${newTranslate}px)`;
            setTotalTranslate(newTranslate);
        };

        const directionHandler = directionMap[direction || "none"];
        directionHandler();
    };

    const handleResize = () => {
        calculateTranslate();
    };

    const nextSlide = () => {
        calculateTranslate("next");
    };

    const prevSlide = () => {
        calculateTranslate("prev");
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [totalTranslate, carruselId]);



    return (
        <section className="relative">
            <button
                className={clsx(
                    'hidden md:block sm:transition-opacity sm:duration-300 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:p-2 sm:-left-8 lg:-left-10',
                    { 'opacity-0 pointer-events-none': totalTranslate >= - 3 },
                    { 'opacity-100 pointer-events-auto': totalTranslate < - 3 }
                )}
                onClick={prevSlide}
            >
                <ArrowLeft />
            </button>
            <button
                className={clsx(
                    'hidden md:block sm:transition-opacity sm:duration-300 sm:absolute sm:top-1/2 sm:-translate-y-1/2 sm:p-2 sm:-right-8 lg:-right-10',
                    { 'opacity-0 pointer-events-none': isEndReached },
                    { 'opacity-100 pointer-events-auto': !isEndReached }
                )}
                onClick={nextSlide}
                disabled={isEndReached}
            >
                <ArrowRight />
            </button>
            <div className='carrusel overflow-x-scroll '>
                <div
                    ref={containerRef}
                    className={`carrusel-container-${carruselId} flex gap-3 md:gap-5 lg:gap-6 2xl:gap-8 transition-transform ease-in-out duration-500 lg:duration-300`}
                >
                    {data?.map((movie, index) => (
                        <div key={index}>
                            <img

                                className={`w-auto h-auto object-cover aspect-[9/13] xl:aspect-[9/14]`}
                                src={getPosterUrl(movie)}
                                alt={`Imagen ${index + 1}`}
                            />
                            <div className="mt-2 text-center w-32 md:w-36 lg:w-44 px-2">
                                <h3 className="text-xs font-light line-clamp-1">
                                    {movie?.original_name ? movie.original_name : movie.original_title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Carrusel;
