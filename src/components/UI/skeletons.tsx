
// Loading animation
const shimmer =
    'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent';


export function CarruselSkeleton() {
    return (
        <div className='relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-10 2xl:grid-cols-7 3xl:grid-cols-8 justify-between md:h-auto w-full'>
            <div className="aspect-[9/14] bg-zinc-800 relative overflow-hidden">
                <span className={`${shimmer}`}></span>
            </div>
            <div className="aspect-[9/14] bg-zinc-800 relative overflow-hidden">
                <span className={`${shimmer}`}></span>
            </div>
            <div className="hidden sm:block aspect-[9/14] bg-zinc-800 relative overflow-hidden">
                <span className={`${shimmer}`}></span>
            </div>
            <div className="hidden md:block aspect-[9/14] bg-zinc-800 relative overflow-hidden">
                <span className={`${shimmer}`}></span>
            </div>
            <div className="hidden lg:block aspect-[9/14] bg-zinc-800 relative overflow-hidden">
                <span className={`${shimmer}`}></span>
            </div>
            <div className="hidden xl:block aspect-[9/14] bg-zinc-800 relative overflow-hidden">
                <span className={`${shimmer}`}></span>
            </div>
            <div className="hidden 2xl:block aspect-[9/14] bg-zinc-800 relative overflow-hidden">
                <span className={`${shimmer}`}></span>
            </div>
            <div className="hidden 3xl:block aspect-[9/14] bg-zinc-800 relative overflow-hidden">
                <span className={`${shimmer}`}></span>
            </div>
        </div>
    )
}

export function InfoSectionGenerosSkeleton() {
    return (
        <div className='flex gap-4 lg:gap-6'>
            <div className="w-20 md:w-40 h-3 md:h-5 bg-zinc-800 overflow-hidden relative">
                <span className={`${shimmer}`}></span>
            </div>
            <div className="w-20 md:w-40 h-3 md:h-5 bg-zinc-800 overflow-hidden relative">
                <span className={`${shimmer}`}></span>
            </div>
            <div className="w-20 md:w-40 h-3 md:h-5 bg-zinc-800 overflow-hidden relative">
                <span className={`${shimmer}`}></span>
            </div>
        </div>
    )
}

export function InfoSectionSkeleton() {
    return (
        <div className='relative px-5 md:px-8 lg:px-12 2xl:px-16 pb-10 z-10'>
            <div
                className={`flex flex-col gap-4 justify-end min-h-homeSpaceFondo`}
            >
                <div
                    className={`overflow-hidden relative w-48  md:w-96 h-10 bg-zinc-800`}
                >
                    <div className={`${shimmer}`}></div>
                </div>
                <InfoSectionGenerosSkeleton />
                <div className="bg-zinc-800 relative  mt-4 w-[36px] h-[36px] lg:w-[45px] lg:h-[45px] overflow-hidden">
                    <span className={`${shimmer}`}></span>
                </div>
            </div>
        </div>
    )
}

export function HomePageSkeleton() {

    return (
        <div>
            <InfoSectionSkeleton />
            <div className='px-5 md:px-8 lg:px-12 2xl:px-16'>
                <div className='w-32 h-5 md:h-7 overflow-hidden bg-zinc-800 relative mb-3'>
                    <span className={`${shimmer}`}></span>
                </div>
                <CarruselSkeleton/>
                {/* Paginacion */}
                <div className='w-full text-center mt-5'>
                    <div className="mr-auto ml-auto w-48 md:w-80 h-2 overflow-hidden relative bg-zinc-800">
                        <span className={`${shimmer}`}></span>
                    </div>
                </div>
            </div>
        </div>
    )
}