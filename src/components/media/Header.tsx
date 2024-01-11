import GetStartRating from '../UI/puntuacion/GetStartRating' // componentes
import { Play, Time } from '../icons/Icons' // Icons
import type { Media } from '@/types/types' // types
import { monthNames } from '@/lib/data' // meses
import TrailerTrigerBtn from '../UI/Btn/TrailerTrigerBtn'
import Link from 'next/link'

export default function Header({ data, type }: { data: Media; type: string }) {
    const releaseDate = data.release_date || data.last_air_date
    const parsedDate = new Date(releaseDate)

    const releaseMonth = monthNames[parsedDate.getMonth()]
    const releaseYear = parsedDate.getFullYear()

    const title = data.title ?? data.name

    return (
        <header className='lg:flex lg:justify-between lg:items-center'>
            <div className='mb-2 sm:mb-4 flex flex-col gap-1 sm:gap-4 items-start 2xl:flex-1'>
                <h2 className='font-bold text-2xl line-clamp-2 sm:text-3xl lg:font-semibold uppercase max-w-sm'>
                    {title}
                </h2>
                <div className='hidden lg:flex lg:flex-col gap-2 text-sm'>
                    <ul className='flex gap-2'>
                        {data.genres.map(({ id, name }) => (
                            <li
                                key={id}
                                className='text-txtGray1 hover:text-white'
                            >
                                <Link href={`/search/${type}?genre=${id}`}>
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='flex gap-2'>
                        <div className='flex gap-2'>
                            <span>
                                {data.runtime
                                    ? `Duracion ${data.runtime}`
                                    : `${data.number_of_seasons} temporadas ${data.number_of_episodes} capitulos`}
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

                <TrailerTrigerBtn videos={data.videos}>
                    <div className='hidden lg:flex uppercase border rounded-xl px-2 py-1 items-center text-xs font-bold justify-center hover:scale-105 transition-transform duration-300 hover:[backdrop-filter:blur(20px)_saturate(180%)]'>
                        <span className='w-6 block'>
                            <Play />
                        </span>
                        <span className='mr-2'>ver Tráiler</span>
                    </div>
                </TrailerTrigerBtn>
            </div>

            <div className='flex flex-col lg:min-h-[192px]'>
                <div className='text-txtGray2 flex justify-between items-center mb-4 text-xs sm:text-sm lg:hidden'>
                    <ul className='flex gap-2'>
                        {data.genres.slice(0, 2).map(({ name, id }) => (
                            <li key={id}>
                                <Link href={`/search/${type}?genre=${id}`}>
                                    {name}
                                </Link>
                            </li>
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
                    <header
                        className={`max-w-xl ${
                            data.overview === '' ? 'hidden' : 'block'
                        }`}
                    >
                        <h3 className='mb-2 sm:font-semibold sm:text-lg uppercase text-txtGray2'>
                            {data.tagline ? data.tagline : 'Synopsis'}
                        </h3>
                        <p className='leading-8 text-sm sm:leading-9 text-txtGray2 font-light [text-wrap:balance] sm:[text-wrap:wrap] sm:text-base lg:leading-7 lg:line-clamp-5'>
                            {data.overview}
                        </p>
                    </header>
                </section>
            </div>

            <div className='hidden xl:flex 2xl:flex-1 justify-end min-h-[270px]'>
                <img
                    src={`https://image.tmdb.org/t/p/w342${data.poster_path}`}
                    alt={`Poster ${title}`}
                    width={180}
                    height={270}
                    className='rounded'
                />
            </div>

            <div className='border-t border-t-[#616161] lg:hidden' />
        </header>
    )
}
