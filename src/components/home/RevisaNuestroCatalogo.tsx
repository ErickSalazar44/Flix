import Link from "next/link";
import Image from "next/image";
import '../UI/scrollAnimate.css'

const RevisaNuestroCatalogo = () => {
    return (
        <section className='py-10 sm:mt-20 RevisaTodoNuestroCatalogo relative w-full grid place-content-center'>
            <div className='flex flex-col gap-8 items-center'>
                <Image
                    src={'/michi.png'}
                    alt="imagen de gato acostado"
                    width={249}
                    height={94}
                    className="w-full h-full max-w-[180px]"
                />
                <h3 className='font-semibold  lg:text-xl text-center'>
                    ¿Sigues buscando algo que ver?
                    <br />
                    Revisa todo nuestro catálogo
                </h3>
                <Link
                    href='/search/movie'
                    className='border-solid border-[1px] text-[#0891B2] border-white/30 rounded-lg px-4 py-2'
                >
                    VER TODO
                </Link>
            </div>
        </section>
    );
};

export default RevisaNuestroCatalogo;
