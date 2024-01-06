// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent'

export function CarruselSkeleton() {
    return (
        <ul className='relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-10 2xl:grid-cols-7 3xl:grid-cols-8 md:h-auto w-full *:aspect-[9/14] *:bg-zinc-800 *:relative *:overflow-hidden *:rounded'>
            <li>
                <span className={`${shimmer}`}></span>
            </li>
            <li>
                <span className={`${shimmer}`}></span>
            </li>
            <li className='hidden sm:block'>
                <span className={`${shimmer}`}></span>
            </li>
            <li className='hidden md:block'>
                <span className={`${shimmer}`}></span>
            </li>
            <li className='hidden lg:block'>
                <span className={`${shimmer}`}></span>
            </li>
            <li className='hidden xl:block'>
                <span className={`${shimmer}`}></span>
            </li>
            <li className='hidden 2xl:block'>
                <span className={`${shimmer}`}></span>
            </li>
            <li className='hidden 3xl:block'>
                <span className={`${shimmer}`}></span>
            </li>
        </ul>
    )
}

export function SliderSkeleton() {
    return (
        <ul className='relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 w-full h-auto *:w-full *:sm:w-[390px] *:h-[219px] gap-[5px] *:overflow-hidden *:relative lg:*:w-[332px] lg:*:h-[187px]'>
            <li>
                <span className={`${shimmer}`}></span>
            </li>
            <li>
                <span className={`hidden sm:block ${shimmer}`}></span>
            </li>
            <li className='hidden lg:block'>
                <span className={`${shimmer}`}></span>
            </li>
            <li className='hidden 2xl:block'>
                <span className={`${shimmer}`}></span>
            </li>
            <li className='hidden 3xl:block'>
                <span className={`${shimmer}`}></span>
            </li>
        </ul>
    )
}
