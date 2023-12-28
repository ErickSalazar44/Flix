import { fetchRepartoMovie } from "@/lib/api";
import { Reparto } from "@/types/types";
import { obtenerActoresConImagenes } from "@/utils/obtenerActoresConImagenes";
import React from "react";
import RepartoCard from "../UI/card/RepartoCard";

const Reparto = async ({ id, type }: { id: string; type: string }) => {
    const start: Reparto = await fetchRepartoMovie(type, id);
    const director = start.crew.find(
        (miembro) =>
            miembro.job === "Director" || miembro.job === "Series Director"
    );
    const actoresConImagenes = obtenerActoresConImagenes(start);

    // En el caso no haya actores no retornara nada
    if (start.cast.length === 0) return;

    return (
        <section className='md:px-8 lg:px-12 lg:py-12 md:bg-[#050505]'>
            <div className='px-5 md:px-8 lg:px-12 2xl:px-16 max-w-[1570px]  relative mx-auto pt-16 md:pt-24'>
                <h2 className='letterScroll font-medium text-2xl md:text-4xl text-txtWhite1'>
                    Actores principales
                </h2>
            </div>
            <div className='px-12 md:px-16 lg:px-20 2xl:px-0 letterScroll2 relative mx-auto pt-16 md:pt-20 max-w-[1200px] opacity-90'>
                <span className='lg:text-4xl font-semibold text-txtGray1'>
                    Dirigido por
                </span>
                <br />
                <span className='lg:text-6xl font-semibold'>
                    {director?.name}
                </span>
            </div>
            <div className='md:px-16 lg:px-20 2xl:px-0 h-full max-w-[1770px] mx-auto'>
                <div className='mx-auto mt-20 mb-20 md:mb-40 max-w-[1200px]'>
                    <div
                        className={`relative ${
                            actoresConImagenes.length > 2
                                ? "overflow-scroll carrusel"
                                : ""
                        } `}
                    >
                        <div className='flex gap-6 transition-transform ease-in-out duration-500 '>
                            {actoresConImagenes.slice(0,10).map((actor) => (
                                <RepartoCard
                                    key={`Actor-${actor.credit_id}`}
                                    actor={actor}
                                    type={type}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reparto;
