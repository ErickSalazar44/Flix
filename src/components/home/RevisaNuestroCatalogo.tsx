import Link from 'next/link'
import Image from 'next/image'
import '@/styles/scrollAnimate.css'

export default function RevisaNuestroCatalogo() {
    return (
        <section className='py-14 sm:pt-20 RevisaTodoNuestroCatalogo relative w-full grid place-content-center bg-black'>
            <div className='flex flex-col gap-8 items-center'>
                <Image
                    src={'/michi.png'}
                    alt='imagen de gato acostado'
                    width={249}
                    height={94}
                    className='w-full h-full max-w-[200px]'
                />
                <h3 className='font-semibold  lg:text-xl text-center'>
                    ¿Sigues buscando algo que ver?
                    <br />
                    Revisa todo nuestro catálogo
                </h3>
                <Link
                    href='/search/movie'
                    className='border-solid border-[1px] text-[#0891B2] border-white/30 rounded-lg px-4 py-2 font-semibold text-sm hover:scale-110 hover:text-[#08a4b2] transition duration-300'
                >
                    VER TODO
                </Link>
            </div>
        </section>
    )
}
