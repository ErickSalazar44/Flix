import { MoviesAndSeries } from "@/types/types";
import { getPosterUrl } from "@/utils/getPosterUrl";
import Image from "next/image";

export default function MediaCardPoster({ data }: { data: MoviesAndSeries }) {
    const title = data.name ?? data.title;
    return (
        <div className='cursor-pointer transition duration-300 filter hover:saturate-[1.1] border-transparent border-2 hover:border-cyan-600 rounded'>
            <Image
                src={getPosterUrl(data)}
                width={342}
                height={450}
                alt={title}
                placeholder='empty'
                className='w-full aspect-[9/13] h-auto object-cover rounded'
            />
        </div>
    );
}
