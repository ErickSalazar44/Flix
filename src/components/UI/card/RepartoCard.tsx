import { Cast } from '@/types/types'
import Link from 'next/link'

interface RepartoCardProps {
    actor: Cast
    type: string
}

export default function RepartoCard({ actor, type }: RepartoCardProps) {
    return (
        <Link
            href={`/actor/${actor.id}-${type}`}
            className='relative snap-start'
            scroll={false}
        >
            <figure
                id='contenedorImageReparto'
                className='w-40 lg:w-48 xl:w-[230px] relative after:content-[""] after:absolute after:inset-0 after:bg-gradiantBottonCard'
            >
                <img
                    src={`https://image.tmdb.org/t/p/w342/${actor.profile_path}`}
                    alt={`Actor ${actor.name}`}
                    width={342}
                    height={513}
                    style={{
                        width: 'auto',
                        height: 'auto',
                        viewTransitionName: `actor-${actor.id}`,
                    }}
                    className='rounded-lg saturate-[1.2] w-auto h-auto'
                />
            </figure>
            <footer className='text-center absolute bottom-0 w-full py-2 sm:p-[13px] sm:text-left sm:text-[#fff] bg-transparent'>
                <h4 className='text-sm line-clamp-1 sm:font-semibold sm:text-base'>
                    {actor.character}
                </h4>
                <span className='hidden sm:block text-sm sm:line-clamp-1 truncate'>
                    {actor.name}
                </span>
            </footer>
        </Link>
    )
}
