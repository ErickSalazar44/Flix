import Image from "next/image"; // NEXT
// componentes
import GetStartRating from "./GetStartRating";
import { Time, Play } from "../icons/Icons"; // Icons
import type { Media } from "@/types/types"; // types
import Link from "next/link";

const Header = ({ data }: { data: Media }) => {
    const releaseDate = data.release_date || data.last_air_date
    const parsedDate = new Date(releaseDate);
    const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    const releaseMonth = monthNames[parsedDate.getMonth()];
    const releaseYear = parsedDate.getFullYear();

    //title
    const title = data.title ?? data.name;

    return (
        <header className='lg:flex lg:justify-between lg:items-center'>
            <div className='mb-2 sm:mb-4 flex flex-col gap-1 sm:gap-4 items-start flex-1'>
                <h1 className='font-bold text-2xl line-clamp-2 sm:text-3xl lg:font-semibold uppercase max-w-sm'>
                    {title}
                </h1>
                <div className='hidden lg:flex lg:flex-col gap-2 text-sm'>
                    <ul className='flex gap-2 opacity-80'>
                        {data.genres.map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <div className='flex gap-2'>
                        <div className='flex gap-2'>
                            <span>
                                {data.runtime ? `Duracion ${data.runtime}` : `${data.number_of_seasons} temporadas ${data.number_of_episodes} capitulos`}
                            </span>
                            <Time />
                        </div>

                        <div>
                            {releaseMonth} {releaseYear}
                        </div>
                    </div>
                </div>
                <span className='lg:hidden'>
                    <GetStartRating average={data.vote_average} />
                </span>

                <Link href={`/trailer/movie/123`} className='hidden lg:flex uppercase border rounded-xl px-2 py-1 items-center text-xs font-bold justify-center'>
                    <span className='w-6 block'>
                        <Play />
                    </span>
                    <span className='mr-2'>ver Tráiler</span>
                </Link>
            </div>

            <div className='flex flex-col lg:min-h-[192px]'>
                <div className='text-[#b3b3b3] flex justify-between items-center mb-4 text-xs sm:text-sm lg:hidden'>
                    <ul className='flex gap-2'>
                        {data.genres.slice(0, 2).map((genre) => (
                            <li key={genre.id}>{genre.name}</li>
                        ))}
                    </ul>
                    <div className='flex gap-2'>
                        <div className='flex gap-1'>
                            <Time />
                            <span className='sm:hidden'>
                                {data.runtime ?? `${data.number_of_seasons}T`}
                            </span>
                            <span className='hidden sm:inline-block'>
                                {data.runtime ??
                                    `${data.number_of_seasons} temporadas ${data.number_of_episodes} capitulos`}
                            </span>
                        </div>
                        <span>
                            {releaseMonth} {releaseYear}
                        </span>
                    </div>
                </div>
                <section className='mb-7 flex justify-between gap-6'>
                    <header className='max-w-xl'>
                        <h3 className='mb-2 sm:font-semibold sm:text-lg lg: text-xl uppercase'>
                            {data.tagline ? data.tagline : "Synopsis"}
                        </h3>
                        <p className='leading-8 text-sm sm:leading-9 text-[#f7f7f7] font-light [text-wrap:balance] sm:[text-wrap:wrap] sm:text-base lg:leading-7 lg:line-clamp-5'>
                            {data.overview}
                        </p>
                    </header>
                </section>
            </div>

            <div className='hidden xl:flex flex-1 justify-end'>
                <Image
                    src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
                    alt={`Poster ${title}`}
                    width={180}
                    height={270}
                    className="rounded"
                />
            </div>

            <div className='border-t border-t-[#616161] lg:hidden' />
        </header>
    );
};

export default Header;
