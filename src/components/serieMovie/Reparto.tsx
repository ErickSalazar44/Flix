import { fetchRepartoMovie } from "@/lib/api";
import { Reparto } from "@/types/types";
import { obtenerActoresConImagenes } from "@/utils/obtenerActoresConImagenes";
import Image from "next/image";
import React from "react";

const Reparto = async ({ id }: { id: string }) => {
    const start: Reparto = await fetchRepartoMovie(id);
    const director = start.crew.find((miembro) => miembro.job === "Director");
    const actoresConImagenes = obtenerActoresConImagenes(start);

    return (
        <section className='py-7 px-6 md:px-10 lg:px-12 2xl:px-16 sm:py-8 md:bg-[#EAEAEA]'>
            <div className='md:max-w-lg sm:mx-auto '>
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
                    <div className='flex gap-6 transition-transform ease-in-out duration-500 md:grid md:grid-cols-3 md:gap-x-1 md:gap-y-5'>
                        {actoresConImagenes.map((actor) => (
                            <article
                                className='relative w-full'
                                key={`Actor-${actor.credit_id}`}
                            >
                                <div className="h-full w-full">
                                    <figure className='w-28 sm:w-40 md:w-full md:h-[230px]'>
                                        <Image
                                            src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                                            alt={`Actor ${actor.name}`}
                                            width={128}
                                            height={192}
                                            quality={100}
                                            className='rounded object-center  opacity-90 sm:w-full sm:rounded-none h-full sm:object-cover'
                                        />
                                    </figure>
                                    <footer className='bg-white text-center absolute bottom-0 w-full text-[#101010] py-2 rounded-b sm:rounded-none sm:static sm:p-[13px] sm:text-left sm:text-[#666] '>
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
