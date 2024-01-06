import { fetchActorForId } from '@/lib/api'
import { Actor } from '@/types/types'
import Image from 'next/image'

export default async function Frame({ path }: { path: any }) {
    const [id] = path.id.split('-')
    const actor: Actor = await fetchActorForId(id)

    return (
        <div className='h-full w-full relative z-50'>
            <figure className='relative after:content-[""] after:absolute after:inset-0 after:bg-gradiantBottonCard'>
                <Image
                    src={`https://image.tmdb.org/t/p/w780/${actor.profile_path}`}
                    alt={`Actor ${actor.name}`}
                    width={342}
                    height={513}
                    style={{
                        width: 'auto',
                        height: 'auto',
                        viewTransitionName: `actores-${actor.id}`,
                    }}
                    className='rounded aspect-[9/13.5] w-auto h-auto '
                />
            </figure>
            <footer className='absolute bottom-0 w-full py-2 sm:p-[13px] sm:text-left sm:text-[#fff] bg-transparent'>
                <h4 className='text-center text-sm line-clamp-1 sm:font-semibold sm:text-base md:text-xl'>
                    {actor.name}
                </h4>
            </footer>
        </div>
    )
}
