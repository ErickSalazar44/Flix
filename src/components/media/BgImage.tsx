import { Media } from "@/types/types"; // TYPES
import Image from "next/image"; // NEXT
import { CloseIcon, Play } from "../icons/Icons"; // ICONS
import Link from "next/link";

const BgImage = ({ data }: { data: Media }) => {
    return (
        <div className='fixed -z-10 top-0 h-[60vh] w-full before:bg-gradiantBotton before:absolute before:w-full before:h-full before:top-0 before:content-[""] before:z-20 lg:h-screen lg:absolute scrollMove'>
            <Image
                src={`https://image.tmdb.org/t/p/w780${data.poster_path}`}
                alt={`Poster ${data.title}`}
                fill
                sizes='(min-width: 640px) 640px, 450px'
                className='block sm:hidden object-cover object-top aspect-[9/14]'
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    aspectRatio: '9/14'
                }}
            />
            <Image
                src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                alt={`Poster ${data.title}`}
                fill
                sizes='100vw'
                className='hidden sm:block object-cover object-top'
                style={{
                    width: '100%',
                    height: "100%",
                    objectFit: 'cover',
                }}
                priority={true}
            />
            <div className='relative z-50 w-full h-full'>
                <div className="absolute right-5 top-4">
                    <Link href={'/'}>
                        <CloseIcon/>
                    </Link>
                </div>
                <button className='lg:hidden text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 border rounded-full'>
                    <Play />
                </button>
                <div className="hidden lg:block absolute top-[10vh] z-50 right-[4rem] font-semibold text-sm">
                    <div className="flex items-start gap-2">
                        <span className="text-2xl">★</span>
                        <div className="flex flex-col">
                            <div className="text-2xl">
                                <span>{data.vote_average.toFixed(1)} </span>
                                <span className="text-sm">
                                    /
                                    <span> 10</span>
                                </span>
                            </div>
                            <span className="font-normal">{data.popularity} Calificaciones</span>   
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BgImage;
