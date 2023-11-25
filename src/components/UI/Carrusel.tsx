'use client';
import { useEffect, useRef, useState } from 'react';
import { Movies, SeriesTV } from '@/types/types';
import { getPosterUrl } from '@/utils/getPosterUrl';

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

    const calculateTranslate = (direction?: 'next' | 'prev') => {
        const element = containerRef.current;

        if (!element) {
            return;
        }

        const widthTotal = element.scrollWidth;
        const widthVisibleElement = element.offsetWidth;
        const spaceTranslateX = (widthTotal - widthVisibleElement) / 4
        const directionMap = {
            'next': () => {
                const newTranslate = totalTranslate - spaceTranslateX;

                updateTranslate(newTranslate);
                setIsEndReached(newTranslate <= -(widthTotal - widthVisibleElement));
            },
            'prev': () => {
                const newTranslate = totalTranslate + spaceTranslateX;
                updateTranslate(newTranslate);
                setIsEndReached(false);
            },
            'none': () => {

                const distanceFromEnd = (widthTotal - widthVisibleElement) / 2;
                const distanceFromStart = Math.abs(totalTranslate);

                if (distanceFromEnd < distanceFromStart) {
                    const newTranslate = - widthTotal + widthVisibleElement;
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

        const directionHandler = directionMap[direction || 'none'];
        directionHandler();
    };


    const handleResize = () => {
        calculateTranslate();
    };

    const nextSlide = () => {
        calculateTranslate('next');
    };

    const prevSlide = () => {
        calculateTranslate('prev');
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [totalTranslate, carruselId]);

    return (
        <div className='overflow-x-auto relative'>
            <button
                className={`prev ${totalTranslate >= 0 && 'hidden'}`}
                onClick={prevSlide}
            >
                MOVER ATRAS
            </button>
            <button
                className={`next ${isEndReached && 'hidden'}`}
                onClick={nextSlide}
            >
                MOVER ADELANTE
            </button>
            <div
                ref={containerRef}
                className={`carrusel-container-${carruselId} flex gap-10 max-h-[294px] transition-transform duration-500`}
            >
                {data?.map((movie, index) => (
                    <img
                        key={index}
                        className={`h-[292px] aspect-[9/14] object-contain`}
                        src={getPosterUrl(movie)}
                        alt={`Imagen ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrusel;
