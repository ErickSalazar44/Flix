import { fetchRepartoMovie } from "@/lib/api";
import { Reparto } from "@/types/types";
import { obtenerActoresConImagenes } from "@/utils/obtenerActoresConImagenes";
import React from "react";
import RepartoCard from "../UI/card/RepartoCard";

const Reparto = async ({ id, type }: { id: string, type: string }) => {

    const start: Reparto = await fetchRepartoMovie(type, id);
    const director = start.crew.find((miembro) => miembro.job === "Director" || miembro.job === 'Series Director');
    const actoresConImagenes = obtenerActoresConImagenes(start);

    // En el caso no haya actores no retornara nada
    if (start.cast.length === 0) return 

    return (
        <section className='py-7 px-5 md:px-8 lg:px-12 2xl:px-16 sm:py-8 md:bg-[#EAEAEA]'>
            <div className='md:max-w-5xl md:mx-auto'>
                <header className='flex justify-between items-center mb-4 sm:text-[#666] sm:mb-5'>
                    <h3 className='text-base sm:text-lg font-bold '>
                        Stars
                    </h3>
                    <span className='text-xs font-medium'>
                        Dirigido Por{" "}
                        <span className='font-bold '>{director?.name}</span>
                    </span>
                </header>
                <div className='relative overflow-scroll carrusel'>
                    <div className='flex gap-6 transition-transform ease-in-out duration-500 '>
                        {actoresConImagenes.map((actor) => (
                            <RepartoCard key={`Actor-${actor.credit_id}`} actor={actor} type={type}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reparto;
