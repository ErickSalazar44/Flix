import { Movie } from "@/types/types"; // TYPES
import Image from "next/image"; // NEXT
import { Play } from "../icons/Icons"; // ICONS

const BgImage = ({ data }: { data: Movie }) => {
    return (
        <div className='fixed -z-10 top-0 h-[60vh] w-full before:bg-gradiantBotton before:absolute before:w-full before:h-full before:top-0 before:content-[""] before:z-20 lg:h-[90vh] lg:absolute'>
            <Image
                src={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
                alt={`Poster ${data.title}`}
                fill
                sizes='(min-width: 640px) 640px, 450px'
                className='block sm:hidden object-cover object-top aspect-[9/14] '
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    aspectRatio: '9/14'
                }}
                priority={true}
            />
            <Image
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt={`Poster ${data.title}`}
                fill
                sizes='80vw'
                className='hidden sm:block object-cover object-top aspect-[9/14] '
                style={{
                    width: '100%',
                    height: "100%",
                    objectFit: 'cover',
                    aspectRatio: '9/14'
                }}
                priority={true}
            />
            <div className='relative z-50 w-full h-full lg:hidden'>
                <button className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 fill-transparent border rounded-full'>
                    <Play />
                </button>
            </div>
        </div>
    );
};

export default BgImage;
