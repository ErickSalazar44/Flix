import Link from "next/link";
import '../UI/scrollAnimate.css'

const RevisaNuestroCatalogo = () => {
    return (
        <div className='RevisaTodoNuestroCatalogo relative w-full grid place-content-center'>
            <div className='flex flex-col gap-8 items-center'>
                <img
                    src='https://www.crunchyroll.com/build/assets/img/home/yuzu.png'
                    alt='michi'
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
