import Image from "next/image"; // NEXT
// componentes
import GetStartRating from "./GetStartRating";
import Button from "../UI/Button";
import type { Galeria, Media } from "@/types/types"; // types
import { Time } from "../icons/Icons"; // Icons

const Header = ({ data, galeria }: { data: Media; galeria: Galeria }) => {
    const releaseDate = data.release_date
        ? data.release_date
        : data.last_air_date;
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
        <header>
            <div className='hidden mb-4 lg:flex lg:flex-col lg:gap-8 lg:mb-6 xl:gap-10 2xl:gap-12'>
                {galeria?.logos[0] ? (
                    <picture className='flex w-full max-w-[500px] max-h-[200px]'>
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${galeria?.logos[0].file_path}`}
                            alt={`Logo ${data.title}`}
                            width={500}
                            height={382}
                            className='object-contain lg:[width:calc(18vw+70px)] h-auto'
                            priority={true}
                        />
                    </picture>
                ) : (
                    <h1 className='font-bold text-5xl xl:text-6xl'>
                        {title}
                    </h1>
                )}
                <Button text='Ver Ahora' />
            </div>

            <div className='mb-2 sm:mb-4 flex flex-col gap-1 sm:gap-4 lg:hidden'>
                <h1 className='font-bold text-2xl line-clamp-2 sm:text-3xl lg:font-normal'>
                    {title}
                </h1>
                <GetStartRating average={data.vote_average} />
            </div>

            <div className='flex flex-col lg:flex-col-reverse lg:min-h-[192px]'>
                <div className='text-[#b3b3b3] flex justify-between items-center mb-4 text-xs sm:text-sm'>
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
                <section className='mb-7'>
                    <header className='max-w-4xl'>
                        <h3 className='mb-2 sm:font-semibold sm:text-lg lg:font-normal lg:mb-4'>
                            {data.tagline ? data.tagline : "Synopsis"}
                        </h3>
                        <p className='leading-8 text-sm sm:leading-9 text-[#f7f7f7] font-light [text-wrap:balance] sm:[text-wrap:wrap] sm:text-base lg:leading-7 lg:line-clamp-5'>
                            {data.overview}
                        </p>
                    </header>
                </section>
            </div>

            <div className='border-t border-t-[#616161] lg:hidden' />
        </header>
    );
};

export default Header;
