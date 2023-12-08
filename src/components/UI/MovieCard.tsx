import { formatDate } from "@/utils/formatDate"
import Image from "next/image"
import Link from "next/link"
import './scrollAnimate.css'

const MovieCard = ({ result }: { result: any}) => {

    const title = result.title ?? result.name
    const time = result.release_date ?? result.first_air_date

    return (
        <div className={`relative before:content-[''] before:top-0 before:w-full before:h-full before:bg-gradiantBotton before:absolute`}>
            <Image
                src={`https://image.tmdb.org/t/p/w780${result.backdrop_path}`}
                alt={`Poster ${title}`}
                width={500}
                height={300}
                className="w-full"
            />
            <div className='absolute scroll-parallax bottom-0 p-4 z-10'>
                <h4 className='font-semibold text-xl line-clamp-1'>
                    {title}
                </h4>
                <span className='text-xs'>
                    {formatDate(time)}
                </span>
            </div>
        </div>
    )
}

export default MovieCard