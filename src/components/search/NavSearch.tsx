import Image from "next/image"
import Link from "next/link"

const NavSearch = ({type, children}: {type: string, children: React.ReactNode}) => {
    return (
        <nav className='fixed text-sm w-full bg-[rgba(22,22,23,0.8)] [backdrop-filter:blur(20px)_saturate(180%)] z-50 top-0 px-6 md:px-10 lg:px-12 2xl:px-16 h-[60px] flex justify-between items-center border-b border-white/40 text-[#999]'>
            <div className="flex gap-10 items-center">
                <Link href='/'>
                    <Image
                        alt='Logo de la pagina'
                        src='/logo.webp'
                        width={169}
                        height={40}
                        quality={100}
                        className='w-24'
                        priority={true}
                    />
                </Link>

                <Link
                    href='/search/movie'
                    className={`hover:text-white transition-colors 
                ${type === "movie" ? "text-white" : "text-[#999]"}`}
                >
                    Películas
                </Link>

                <Link
                    href='/search/tv'
                    className={`hover:text-white transition-colors ${type === "tv" ? "text-white" : "text-[#999]"
                        }`}
                >
                    Series
                </Link>

            </div>

            <div className='uppercase flex gap-4 text-sm font-medium items-center'>

                {children}
            </div>
        </nav>
    )
}

export default NavSearch