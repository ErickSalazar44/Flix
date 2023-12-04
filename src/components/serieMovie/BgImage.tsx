import { Movie } from "@/types/types";
import Image from "next/image";
import { Play } from "../icons/Icons";

const BgImage = ({ data }: { data: Movie }) => {
    return (
        <div className='fixed -z-10 top-0 h-[60vh] w-full before:bg-gradiantBotton before:absolute before:w-full before:h-full before:top-0 before:content-[""] before:z-20 lg:h-[90vh] lg:absolute'>
            <Image
                src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
                alt={`Poster ${data.title}`}
                fill
                sizes='80vw'
                className='block sm:hidden object-top aspect-[9/14] '
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
                priority={true}
            />
            <Image
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt={`Poster ${data.title}`}
                        fill
                        sizes='80vw'
                className='hidden sm:block object-top aspect-[9/14] '
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                }}
                priority={true}
            />
            <div className='relative z-50 w-full h-full'>
                <button className='text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 fill-transparent border rounded-full'>
                    <Play />
                </button>
            </div>
        </div>
    );
};

export default BgImage;
