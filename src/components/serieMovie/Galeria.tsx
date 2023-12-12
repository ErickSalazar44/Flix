"use client";
// REACT
import { useState } from "react";
// NEXT
import Image from "next/image";
// TYPES
import { Galeria } from "@/types/types";
// STYLES
import "../UI/scrollAnimate.css";
import "../../styles/animate.css";

import { usePathname } from "next/navigation";
import { ImageInfo } from "@/types/types";



const Galeria = () => {
    const [galeria, setGaleria] = useState<Galeria | null>(null)
    const [showImages, setShowImages] = useState(false);
    const pathname = usePathname()
    const id = pathname.split('/')[3]

    const fetchGaleriaMovie = () => {
        fetch(`/api/galeria?id=${id}`)
        .then(res => res.json())
        .then(data => setGaleria(data))
        .catch(err => setShowImages(false))
    }


    const handleClick = () => {
        // Toggle the state to show/hide images
        if (galeria) {
            setShowImages(!showImages);
        }
        fetchGaleriaMovie()
        setShowImages(!showImages);
    };

    return (
        <div>
            <div className='flex gap-4 sticky top-[5vh] z-50 lg:top-[10vh]'>
                <button
                    onClick={handleClick}
                    className='text-SemiTransparentWhite bg-black/70 py-2 px-4 rounded'
                >
                    {showImages ? "Ocultar Galeria" : "Desplegar Galeria"}
                </button>
            </div>

            {showImages && galeria && (
                <picture className='flex flex-col gap-[20vh] pt-[6vh] lg:grid lg:grid-cols-3 lg:gap-8'>
                    {galeria.posters.map((poster: ImageInfo, index: number) => (
                        <Image
                            key={poster.file_path}
                            src={`https://image.tmdb.org/t/p/w342${poster.file_path}`}
                            alt={`Galeria de Imagen ${galeria.id}`}
                            width={342}
                            height={513}
                            className={`self-center sticky top-[14vh] object-contain rounded lg:static lg:top-auto ${
                                index % 2 === 0 ? "imgScroll" : "imgScroll2"
                            }`}
                            style={{
                                width: 'auto',
                                height: 'auto'
                            }}
                        />
                    ))}
                </picture>
            )}
        </div>
    );
};

export default Galeria;
