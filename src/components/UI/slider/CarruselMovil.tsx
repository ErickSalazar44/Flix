import { MoviesAndSeries } from "@/types/types";
import { getPosterUrl } from "@/utils/getPosterUrl";
import Image from "next/image";
import Link from "next/link";

const CarruselMovil = ({ data, type }: { data: MoviesAndSeries[], type: string }) => {
    const dataFilter = data.filter(
        (movie) => movie.poster_path !== null && movie.backdrop_path !== null
    );
    
    const title = dataFilter[0].original_name ?? dataFilter[0].original_title

    return (
        <section className='relative'>
            <div className='carrusel overflow-x-scroll '>
                <figure className='flex gap-3 md:gap-5 lg:gap-6 2xl:gap-8 transition-transform ease-in-out duration-500 lg:duration-300'>
                    {dataFilter?.map((movie, index) => (
                        <div key={index}>
                            <Link href={`/media/${movie.id}-${type}`}>
                                <Image 
                                    src={getPosterUrl(movie)}
                                    alt={`Imagen ${title}`}
                                    width={342}
                                    height={184}
                                    className="aspect-[9/14] object-cover"
                                    placeholder='empty'
                                    
                                />
                                <div className='mt-2 text-center w-32 md:w-36 lg:w-44 px-2'>
                                    <h3 className='text-xs font-light line-clamp-1'>
                                        {title}
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </figure>
            </div>
        </section>
    );
};

export default CarruselMovil;
