import { MoviesAndSeries } from "@/types/types";
import { getPosterUrl } from "@/utils/getPosterUrl";
import Link from "next/link";

const CarruselMovil = ({ data, type }: { data: MoviesAndSeries[], type: string }) => {
    const dataFilter = data.filter(
        (movie) => movie.poster_path !== null && movie.backdrop_path !== null
    );

    return (
        <section className='relative'>
            <div className='carrusel overflow-x-scroll '>
                <div className='flex gap-3 md:gap-5 lg:gap-6 2xl:gap-8 transition-transform ease-in-out duration-500 lg:duration-300'>
                    {dataFilter?.map((movie, index) => (
                        <div key={index}>
                            <Link href={`/media/${type}/${movie.id}`}>
                                <img
                                    className={`w-auto h-auto object-cover aspect-[9/13] xl:aspect-[9/14]`}
                                    src={getPosterUrl(movie)}
                                    alt={`Imagen ${index + 1}`}
                                    loading='lazy'
                                    decoding='async'
                                />
                                <div className='mt-2 text-center w-32 md:w-36 lg:w-44 px-2'>
                                    <h3 className='text-xs font-light line-clamp-1'>
                                        {
                                            movie.original_title ?? movie.original_name
                                        }
                                    </h3>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarruselMovil;
