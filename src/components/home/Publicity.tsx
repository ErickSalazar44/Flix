import Image from 'next/image'
import '@/styles/scrollAnimate.css'
import Link from 'next/link'
import EspaciadoLayout from '../layout/EspaciadoLayout'

export default function Publicity() {
    return (
        <div>
            <EspaciadoLayout className='relative mx-auto pt-24 opacity-50'>
                <h2 className='letterScroll font-medium text-4xl '>
                    ¡Cine y Series:
                </h2>
            </EspaciadoLayout>
            <div className='hidden md:block px-12 md:px-16 lg:px-20 2xl:px-0 letterScroll2 relative mx-auto pt-20 max-w-[1400px] opacity-90'>
                <span className=' text-5xl lg:text-6xl font-semibold'>
                    Tu Pantalla,
                </span>
                <br />
                <span className='hidden md:inline-block text-5xl lg:text-6xl font-semibold'>
                    Nuestro Escenario!
                </span>
            </div>
            <div className='md:px-16 lg:px-20 2xl:px-0 h-full max-w-[1770px] mx-auto'>
                <div className='mx-auto mt-20 mb-20 md:mb-40 max-w-[1400px]'>
                    <div className='max-h-[88vh]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-10'>
                        <div className='hidden md:block md:col-span-2 md:row-span-1'>
                            <Link href='/media/209867-tv'>
                                <figure className='imgScroll h-full cursor-pointer'>
                                    <Image
                                        src={'/publicidad/frieren.png'}
                                        alt='Banner Publicitario Frieren - Más allá del final del viaje'
                                        width={920}
                                        height={371}
                                        className='hover:opacity-100 hover:saturate-[1.2] transition-opacity duration-500 sm:opacity-40 h-full w-full object-center rounded-lg'
                                    />
                                </figure>
                            </Link>
                        </div>
                        <div className='hidden lg:block col-span-1 row-span-2'>
                            <Link href='/media/181812-movie'>
                                <figure className='imgScroll h-full cursor-pointer'>
                                    <Image
                                        src={'/publicidad/starwars.jpg'}
                                        alt='Banner Publicitario star wars'
                                        width={440}
                                        height={782}
                                        quality={60}
                                        className='hover:opacity-100 hover:saturate-[1.2] transition-opacity duration-500 sm:opacity-40 h-full w-full object-left object-cover  rounded-lg'
                                    />
                                </figure>
                            </Link>
                        </div>
                        <div className='imgScroll col-span-1 lg:row-span-1'>
                            <Link href='/search/movie?q=harry%20potter'>
                                <figure className=' h-full cursor-pointer '>
                                    <Image
                                        src={'/publicidad/harryPotter.jpeg'}
                                        alt='Banner Publicitario harry potter'
                                        width={600}
                                        quality={90}
                                        height={338}
                                        className='hover:opacity-100 hover:saturate-[1.2] transition-opacity duration-500 sm:opacity-40 h-full w-full object-left object-cover rounded-lg '
                                    />
                                </figure>
                            </Link>
                        </div>
                        <div className='col-span-[3/4] row-span-[4/1]'>
                            <Link href='/media/100088-tv'>
                                <figure className='imgScroll h-full cursor-pointer overflow-hidden'>
                                    <Image
                                        src={'/publicidad/theLastOfUs.jpeg'}
                                        alt='Banner Publicitario the last of us'
                                        width={600}
                                        quality={90}
                                        height={338}
                                        className='hover:opacity-100 hover:saturate-[1.2] transition-opacity duration-500 sm:opacity-40 h-full w-full object-left object-cover rounded-lg '
                                    />
                                </figure>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
