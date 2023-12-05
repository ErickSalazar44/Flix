// Next
import Image from "next/image";
import Link from "next/link" 
import { Movie } from '@/types/types'; // Type
import { Hd } from "../icons/Icons"; // Icons
import { formatDate } from "@/utils/formatDate"; // utils

const MoviePreview = ({ result }: { result: Movie }) => {
    return (
        <Link href={`/movie/${result.id}`} className="md:col-span-2 lg:col-span-3 xl:col-span-1">
            <article className='relative letterScroll md:grid-cols-2 md:grid lg:grid-cols-3 xl:grid-cols-1'>
                <header className="relative before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantTop before:absolute lg:col-span-2">
                    <div className='absolute top-0 p-4 z-10 xl:bottom-0 xl:top-auto'>
                        <h4 className='font-semibold text-xl line-clamp-1 lg:text-2xl xl:text-xl'>
                            {result.title}
                        </h4>
                        <span className='text-xs md:text-sm lg:text-base xl:text-xs'> {formatDate(result.release_date)} </span>
                    </div>
                    <Image
                        src={`https://image.tmdb.org/t/p/w780${result.backdrop_path}`}
                        alt={`Poster ${result.title}`}
                        width={500}
                        height={300}
                        className="w-full"
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