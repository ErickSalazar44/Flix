import { Cast } from "@/types/types";
import Image from "next/image";
import Link from "next/link";


const RepartoCard = ({ actor, type }: { actor: Cast; type: string }) => {

    return (
        <Link
            href={`/actor/${actor.id}-${type}`}
            className='relative w-full'
            scroll={false}
        >
            <div className='h-full w-full'>
                <figure className='w-28 sm:w-40 relative after:content-[""] after:absolute after:inset-0 after:bg-gradiantBottonCard'>
                    <Image
                        src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                        alt={`Actor ${actor.name}`}
                        width={342}
                        height={513}
                        style={{
                            width: "auto",
                            height: "auto",
                            viewTransitionName: `actor-${actor.id}`
                        }}
                        className='rounded aspect-[9/13.5] opacity-90 w-auto h-auto'
                    />
                </figure>
                <footer className='text-center absolute bottom-0 w-full py-2 sm:p-[13px] sm:text-left sm:text-[#fff] md:max-w-[160px] bg-transparent'>
                    <h4 className='text-sm line-clamp-1 sm:font-semibold sm:text-base'>
                        {actor.character}
                    </h4>
                    <span className='hidden sm:block text-sm sm:line-clamp-1 truncate'>
                        {actor.name}
                    </span>
                </footer>
            </div>
        </Link>
    );
};

export default RepartoCard;
