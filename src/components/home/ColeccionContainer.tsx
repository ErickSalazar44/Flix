import { fetchData } from "@/utils/fetchData";
import Image from "next/image";
import MovieCard from "../UI/card/MovieCard";
import Link from "next/link";
import { MoviesAndSeries } from "@/types/types";
import GetstartRatingUI2 from "../UI/puntuacion/GetstartRatingUI2";

const ColeccionContainer = async ({
    id,
    textColor,
    subTitle,
}: {
    id: string;
    textColor: string;
    subTitle: string;
}) => {
    const details = await fetchData(`/collection/${id}`);
    const width = details.parts.length * 438 + details.parts.length * 8;

    return (
        <section className='my-10 sm:my-16 relative h-full min-h-[700px] sm:h-[800px] lg:h-[96vh] xl:h-[100vh] flex flex-col'>
            <figure className='absolute -z-10 opacity-40 sm:opacity-50 w-full h-full bottom-0'>
                <Image
                    src={`https://image.tmdb.org/t/p/original${details.parts[1].backdrop_path}`}
                    alt={`Movie Collection ${details.name}`}
                    width={1920}
                    height={1080}
                    className='hidden 2xl:block object-cover h-full object-top'
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
                <Image
                    src={`https://image.tmdb.org/t/p/w1280${details.backdrop_path}`}
                    alt={`Movie Collection ${details.name}`}
                    width={1280}
                    height={800}
                    className='hidden md:block 2xl:hidden object-cover h-full object-top'
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
                <Image
                    src={`https://image.tmdb.org/t/p/w780${details.backdrop_path}`}
                    alt={`Movie Collection ${details.name}`}
                    width={780}
                    height={439}
                    className='md:hidden object-cover  object-top'
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </figure>
            <div className='relative z-10 p-6 md:p-10 lg:p-12 2xl:px-16 2xl:py-12 flex flex-col gap-4 flex-1'>
                <div className="max-w-xl text-txtGray2">
                    <strong>COLECCIÓN SEMANAL</strong>
                </div>
                <div className='text-3xl md:text-4xl lg:text-5xl font-semibold uppercase max-w-xl'>
                    <span>{subTitle}</span>
                    <h2
                        style={{ color: textColor }}
                        className={`[text-wrap:wrap]`}
                    >
                        {details.name.split("-")[0]}
                    </h2>
                </div>
                <p className='max-w-xs sm:max-w-md line-clamp-6'>
                    {details.parts[1].overview}
                </p>
            </div>
            <div className='overflow-x-auto lg:mx-12 2xl:mx-16 my-7 carrusel text-txtGray2'>
                <div
                    className={`flex gap-2 items-end`}
                    style={{
                        width: `${width}px`,
                    }}
                >
                    {details.parts.map((part: MoviesAndSeries) => (
                        <Link
                            key={part.id}
                            href={`/media/${part.id}-movie`}
                            as={`/media/${part.id}-movie`}
                        >
                            <MovieCard animate={false} result={part} />
                        </Link>
                    ))}
                </div>
            </div>
            <div className="absolute top-12 hidden 2xl:block right-16">
                <GetstartRatingUI2 data={details.parts[0]} />
            </div>
        </section>
    );
};

export default ColeccionContainer;
