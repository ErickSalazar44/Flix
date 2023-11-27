
import { Movies, SeriesTV, isMovies } from "@/types/types";
import { getPosterUrl } from "@/utils/getPosterUrl";

const CarruselMovil = ({
    data,
}: {
    data: SeriesTV[] | Movies[];
}) => {

    return (
        <section className="relative">
            <div className='carrusel overflow-x-scroll '>
                <div
                    className='flex gap-3 md:gap-5 lg:gap-6 2xl:gap-8 transition-transform ease-in-out duration-500 lg:duration-300'
                >
                    {data?.map((movie, index) => (
                        <div key={index}>
                            <img

                                className={`w-auto h-auto object-cover aspect-[9/13] xl:aspect-[9/14]`}
                                src={getPosterUrl(movie)}
                                alt={`Imagen ${index + 1}`}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="mt-2 text-center w-32 md:w-36 lg:w-44 px-2">
                                <h3 className="text-xs font-light line-clamp-1">
                                    {isMovies(movie)
                                        ? (movie as Movies).original_title
                                        : (movie as SeriesTV).original_name}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CarruselMovil;
