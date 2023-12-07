// Next
import Image from "next/image";
import Link from "next/link" 
import { Media } from '@/types/types'; // Type
import { Hd } from "../icons/Icons"; // Icons
import { formatDate } from "@/utils/formatDate"; // utils

const MoviePreview = ({ result, type }: { result: Media, type: string }) => {
    const title = result.title ?? result.name
    const time = result.release_date ?? result.first_air_date
    return (
        <Link href={`/media/${type}/${result.id}`}>
            <article className='relative md:grid-cols-2 md:grid lg:grid-cols-3 xl:grid-cols-1 h-full'>
                <header className="relative before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantTop before:absolute lg:col-span-2">
                    <div className='absolute scroll-parallax top-0 p-4 z-10 xl:bottom-0 xl:top-auto'>
                        <h4 className='font-semibold text-xl line-clamp-1 lg:text-2xl xl:text-xl'>
                            {title}
                        </h4>
                        <span className='text-xs md:text-sm lg:text-base xl:text-xs'> {formatDate(time)} </span>
                    </div>
                    <Image
                        src={`https://image.tmdb.org/t/p/w780${result.backdrop_path}`}
                        alt={`Poster ${title}`}
                        width={500}
                        height={300}
                        className="w-full h-full object-cover"
                    />
                </header>
                <footer className='bg-white text-black p-4 md:flex md:flex-col xl:hidden'>
                    <div className="md:flex-1">
                        <p className='text-xs leading-5 line-clamp-5 mb-4 md:line-clamp-6 md:text-sm lg:line-clamp-none'>
                            {result.overview}
                        </p>
                    </div>
                    <div>
                        <span className='text-white'>
                            <Hd />
                        </span>
                    </div>
                </footer>
            </article>
        </Link>
    )
}

export default MoviePreview