import { Media } from '@/types/types' // TYPES
import { CloseIcon, Play } from '../icons/Icons' // ICONS
import Link from 'next/link'
import GetstartRatingUI2 from '../UI/puntuacion/GetstartRatingUI2'
import TrailerTrigerBtn from '../UI/Btn/TrailerTrigerBtn'

export default function BgImage({ data }: { data: Media }) {
    const { poster_path, backdrop_path } = data
    const title = data.title ?? data.name

    return (
        <div className='fixed -z-10 top-0 h-[60vh] w-full before:bg-gradiantBotton before:absolute before:w-full before:h-full before:top-0 before:content-[""] before:z-20 after:bg-gradiantTop2 after:absolute after:w-full after:h-full after:top-0 after:content-[""] after:z-20 lg:h-screen lg:absolute scrollMove'>
            <img
                src={`https://image.tmdb.org/t/p/w780${poster_path}`}
                alt={`Poster ${title}`}
                sizes='(min-width: 640px) 640px, 450px'
                className='block sm:hidden object-cover object-top aspect-[9/14] saturate-[1.2]'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    aspectRatio: '9/14',
                }}
            />
            <img
                src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                alt={`Poster ${title}`}
                sizes='(min-width: 641px) and (max-width: 1024px) 50vw, (min-width: 1025px) and (max-width: 1400px) 60vw, (min-width: 1401px) and (max-width: 1980px) 100vw'
                className='hidden sm:block object-cover object-top saturate-[1.2]'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                }}
            />
            <section className='relative z-50 w-full h-full'>
                <div className='absolute right-5 top-4 lg:hidden'>
                    <Link href='/' aria-label='Volver al inicio'>
                        <CloseIcon />
                    </Link>
                </div>

                <TrailerTrigerBtn videos={data.videos}>
                    <span className='lg:hidden text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 border rounded-full'>
                        <Play />
                    </span>
                </TrailerTrigerBtn>

                <div className='hidden lg:block absolute top-[10vh] z-50 right-[4rem] font-semibold text-sm'>
                    <GetstartRatingUI2 data={data} />
                </div>
            </section>
        </div>
    )
}
