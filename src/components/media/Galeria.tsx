'use client';

import { useState } from 'react'; // REACT
import { Galeria } from "@/types/types"; // TYPES
import "@/styles/scrollAnimate.css"; // STYLES
import { useParams } from "next/navigation";
import { ImageInfo } from "@/types/types";


const Galeria = () => {
    const [galeria, setGaleria] = useState<Galeria | null>(null)
    const [showImages, setShowImages] = useState(false);
    const params = useParams()

    const id = String(params.mediaInfo).split('-')[0];

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
            <div className='flex gap-4 sticky top-[5vh] z-50 sm:top-[10vh] justify-center items-center'>
                <button
                    onClick={handleClick}
                    className='text-SemiTransparentWhite bg-black/70 uppercase border rounded-xl px-4 py-2 text-xs font-bold hover:text-white transition-colors duration-300'
                >
                    {showImages ? 'Ocultar Galeria' : 'Desplegar Galeria'}
                </button>
            </div>

            {showImages && galeria && (
                <picture className='flex px-10 flex-col gap-[20vh] pt-[6vh] sm:grid sm:grid-cols-2 sm:gap-2 lg:grid-cols-3 lg:px-0 2xl:grid-cols-4'>
                    {galeria.posters.map((poster: ImageInfo, index: number) => (
                        <img
                            key={poster.file_path}
                            src={`https://image.tmdb.org/t/p/w500${poster.file_path}`}
                            alt={`Galeria de Imagen ${galeria.id}`}
                            width={500}
                            height={750}
                            className={`self-center sticky top-[14vh] object-contain rounded sm:static sm:top-auto ${
                                index % 2 === 0 ? 'imgScroll' : 'imgScroll2'
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
