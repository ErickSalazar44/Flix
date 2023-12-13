import { fetchRepartoMovie } from "@/lib/api";
import { Reparto } from "@/types/types";
import { obtenerActoresConImagenes } from "@/utils/obtenerActoresConImagenes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Reparto = async ({ id, type }: { id: string, type: string }) => {

    const start: Reparto = await fetchRepartoMovie(type, id);
    const director = start.crew.find((miembro) => miembro.job === "Director" || miembro.job === 'Series Director');
    const actoresConImagenes = obtenerActoresConImagenes(start);

    // En el caso no haya actores no retornara nada
    if (start.cast.length === 0) return 

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
                            <Link
                                href={`/actor/${actor.id}-${type}`}
                                className='relative w-full'
                                key={`Actor-${actor.credit_id}`}
                                scroll={false}
                            >
                                <div className="h-full w-full">
                                    <figure className='w-28 sm:w-40 relative after:content-[""] after:absolute after:inset-0 after:bg-gradiantBottonCard'>
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                                            alt={`Actor ${actor.name}`}
                                            width={342}
                                            height={513}
                                            style={{
                                                width: 'auto',
                                                height: 'auto'
                                            }}
                                            className='rounded aspect-[9/13.5] opacity-90 w-auto h-auto '
                                        />
                                    </figure>
                                    <footer className='text-center absolute bottom-0 w-full py-2 sm:p-[13px] sm:text-left sm:text-[#fff] md:max-w-[160px] bg-transparent'>
                                        <h4 className='text-sm line-clamp-1 sm:font-semibold sm:text-base'>
                                            {actor.character}
                                        </h4>
                                        <span className="hidden sm:block text-sm sm:line-clamp-1 truncate">{actor.name}</span>
                                    </footer>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reparto;
