import Link from "next/link";
import Image from "next/image";
import '../UI/scrollAnimate.css'

const RevisaNuestroCatalogo = () => {
    return (
        <div className='mt-7 py-7 sm:mt-20 RevisaTodoNuestroCatalogo relative w-full grid place-content-center'>
            <div className='flex flex-col gap-8 items-center'>
                <Image
                    src={'/michi.png'}
                    alt="imagen de gato acostado"
                    width={249}
                    height={94}
                />

                <h3 className='font-semibold text-xl text-center'>
                    ¿Sigues buscando algo que ver?
                    <br />
                    Revisa todo nuestro catálogo
                </h3>
                <Link
                    href={"/"}
                    className='border-solid border-[2px] text-[#0891B2] border-[#0891B2] px-4 py-2'
                >
                    VER TODO
                </Link>
            </div>
        </div>
    );
};

export default RevisaNuestroCatalogo;
