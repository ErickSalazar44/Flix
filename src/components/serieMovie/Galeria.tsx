"use client";
import { Galeria } from "@/types/types";
import "../UI/scrollAnimate.css";
import "../../styles/animate.css"
import { useState } from "react";

const Galeria = ({ id }: { id: string }) => {
    const [galeria, setGaleria] = useState<Galeria | null>(null);
    const [showImages, setShowImages] = useState(false);
    const [showBackdrops, setShowBackdrops] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        // Check if images are already loaded; if not, make the API call
        if (!galeria && !loading) {
            setLoading(true);
            fetch(`/api/galeria?id=${id}`)
                .then((res) => res.json())
                .then((galeria) => setGaleria(galeria))
                .catch((err) => console.error(err))
                .finally(() => setLoading(false));
        }

        // Toggle the state to show/hide images
        setShowImages((prevState) => !prevState);
    };

    const handleToggleBackdrops = () => {
        setShowBackdrops((prevState) => !prevState);
    };

    if (loading) {
        return (
            <div className="w-full grid place-content-center py-10">
                <div className='loader'></div>
            </div>
        )
    }

    return (
        <div className="px-8 pt-10">
            <div className='flex gap-4 sticky top-[5vh] z-50'>
                <button
                    onClick={handleClick}
                    className='text-SemiTransparentWhite bg-black/40 py-2 px-4 rounded'
                >
                    {showImages ? "Ocultar Galeria" : "Desplegar Galeria"}
                </button>
                <button
                    onClick={handleToggleBackdrops}
                    className={` ${showImages ? "block scale-in-hor-center" : "hidden"
                        } text-SemiTransparentWhite bg-black/40 py-2 px-4 rounded`}
                >
                    {showBackdrops ? "Mostrar Posters" : "Mostrar Backdrops"}
                </button>
            </div>

            {showImages && galeria && (

                <div className='flex flex-col gap-[20vh] pt-[6vh]'>
                    {showBackdrops
                        ? galeria?.backdrops.map(
                            (backdrop: any, index: number) => (
                                <img
                                    key={backdrop.file_path}
                                    src={`https://image.tmdb.org/t/p/w500${backdrop.file_path}`}
                                    alt=''
                                    className={`self-center sticky top-[15vh] object-contain  ${index % 2 === 0
                                        ? "imgScroll"
                                        : "imgScroll2"
                                        }`}
                                />
                            )
                        )
                        : galeria?.posters.map(
                            (poster: any, index: number) => (
                                <img
                                    key={poster.file_path}
                                    src={`https://image.tmdb.org/t/p/w500${poster.file_path}`}
                                    alt=''
                                    className={`self-center sticky top-[14vh] object-contain  ${index % 2 === 0
                                        ? "imgScroll"
                                        : "imgScroll2"
                                        }`}
                                />
                            )
                        )}
                </div>

            )}
        </div>
    );
};

export default Galeria;
