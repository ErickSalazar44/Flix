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
        <section className="py-7">
            <header className='flex justify-between items-center mb-4'>
                <h3 className='text-base font-semibold'>Stars</h3>
                <span className='text-xs'>
                    Dirigido Por{" "}
                    <span className='font-semibold text-white'>
                        {director?.name}
                    </span>
                </span>
            </header>
            <div className='relative overflow-scroll carrusel'>
                <div
                    className='flex gap-6 2xl:gap-8 transition-transform ease-in-out duration-500 lg:duration-300'
                >
                    {actoresConImagenes.map((actor) => (
                        <article className="relative" key={`Actor-${actor.credit_id}`}>
                            <figure className="w-28">
                                <Image
                                    src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
                                    alt={`Actor ${actor.name}`}
                                    width={128}
                                    height={192}
                                    quality={100}
                                    className=" rounded object-center  opacity-90"
                                />
                            </figure>
                            <footer className="bg-white text-center absolute bottom-0 w-full text-[#101010] py-2 rounded-b">
                                <h4 className="text-sm line-clamp-1 ">{actor.character}</h4>
                            </footer>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reparto;
