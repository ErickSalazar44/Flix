import { fetchRepartoMovie } from "@/lib/api";
import { Reparto } from "@/types/types";
import { obtenerActoresConImagenes } from "@/utils/obtenerActoresConImagenes";
import Image from "next/image";
import React from "react";

const Reparto = async ({ id, type }: { id: string, type: string }) => {

    const start: Reparto = await fetchRepartoMovie(type, id);
    const director = start.crew.find((miembro) => miembro.job === "Director" || miembro.job === 'Series Director');
    const actoresConImagenes = obtenerActoresConImagenes(start);

    return (
        <section className='py-7 px-6 md:px-10 lg:px-12 2xl:px-16 sm:py-8 md:bg-[#EAEAEA]'>
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
                            <article
                                className='relative w-full'
                                key={`Actor-${actor.credit_id}`}
                            >
                                <div className="h-full w-full">
                                    <figure className='w-28 sm:w-40'>
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                                            alt={`Actor ${actor.name}`}
                                            width={342}
                                            height={513}
                                            style={{
                                                width: 'auto',
                                                height: 'auto'
                                            }}
                                            className='rounded aspect-[9/13.5] opacity-90 w-auto sm:rounded-none h-auto '
                                        />
                                    </figure>
                                    <footer className='bg-white text-center absolute bottom-0 w-full text-[#101010] py-2 rounded-b sm:rounded-none sm:static sm:p-[13px] sm:text-left sm:text-[#666] md:max-w-[160px]'>
                                        <h4 className='text-sm line-clamp-1 sm:font-semibold sm:text-base'>
                                            {actor.character}
                                        </h4>
                                        <span className="hidden sm:block text-sm sm:line-clamp-1 truncate">{actor.name}</span>
                                    </footer>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reparto;
