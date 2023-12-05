import { Movie } from "@/types/types"
import { formatDate } from "@/utils/formatDate"
import Image from "next/image"
import Link from "next/link"

const MovieCard = ({ result, index }: { result: Movie, index: number }) => {
    return (
        <Link href={`/movie/${result.id}`}>
            <div className={`relative ${index % 2 === 0 ? 'letterScroll2' : 'letterScroll'} before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantBotton before:absolute`}>
                <Image
                    src={`https://image.tmdb.org/t/p/w780${result.backdrop_path}`}
                    alt={`Poster ${result.title}`}
                    width={500}
                    height={300}
                    className="w-full"
                />
                <div className='absolute bottom-0 p-4 z-10'>
                    <h4 className='font-semibold text-xl line-clamp-1'>
                        {result.original_title}
                    </h4>
                    <span className='text-xs'>
                        {formatDate(result.release_date)}
                    </span>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard