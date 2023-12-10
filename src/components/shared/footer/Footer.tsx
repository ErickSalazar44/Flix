import {
    GitHub,
    Instagram,
    Linkedin,
    Portafolio,
} from "@/components/icons/Icons";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className='lg:mt-20 w-full relative [background:#000_linear-gradient(180deg,#0000,#0890b23c)] pt-8 md:pt-20'>
            <div className='max-w-6xl mx-auto mb-8 '>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    <div className='px-6 md:px-10 lg:px-12'>
                        <h4 className='mb-4 uppercase'>Navegación</h4>
                        <ul className='text-[#A0A0A0] text-xs flex flex-col gap-4'>
                            <li>
                                <Link href={"/"}>Explora lo más popular</Link>
                            </li>

                            <li>
                                <Link href={"/"}>Explorar series populares</Link>
                            </li>

                            <li>
                                <Link href={"/"}>Explorar generos</Link>
                            </li>

                            <li>
                                <Link href={"/"}>Visitar version anterior</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='px-6 md:px-10 lg:px-12'>
                        <h4 className='mb-4 uppercase'>Contactame</h4>
                        <ul className='text-[#A0A0A0] text-xs flex flex-col gap-2'>
                            <li>
                                <Link
                                    className='flex items-center gap-2'
                                    href={"/"}
                                >
                                    <span>
                                        <GitHub />
                                    </span>
                                    <span>Git-Hub</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className='flex items-center gap-2'
                                    href={"/"}
                                >
                                    <span>
                                        <Portafolio />
                                    </span>
                                    <span>Portafolio</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className='flex items-center gap-2'
                                    href={"/"}
                                >
                                    <span>
                                        <Linkedin />
                                    </span>
                                    <span>Linkedin</span>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    className='flex items-center gap-2'
                                    href={"/"}
                                >
                                    <span>
                                        <Instagram />
                                    </span>
                                    <span>Instagram</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='px-6 md:px-10 lg:px-12 hidden sm:block'>
                        <h4 className='mb-4 uppercase'>AluraFlix</h4>
                        <p className='text-[#A0A0A0] text-xs leading-7'>
                            Ofrece entretenimiento 
                            <br />
                            y educación
                            <br />
                            a través de la API
                            <br />
                            The Movie Database (TMDb).
                            <br />
                            Nuestro enfoque es 
                            <br />
                            para fines
                            <br />
                            educativos y demostrar
                            <br />
                            las capacidades de la API.
                        </p>
                    </div>
                    <div className='px-6 md:px-10 lg:px-12 hidden lg:block'>
                        <h4 className='mb-4 uppercase'>Cuenta</h4>
                        <p className='text-[#A0A0A0] text-xs leading-7'>
                            proporcionamos servicios
                            <br />
                            de página web
                            <br />
                            y enlazamos a terceros.
                            <br />
                            Si tienes inquietudes sobre 
                            <br />
                            derechos de autor contáctanos
                            <br />
                            erickjosepsalazar2@gmail.com
                            <br />
                            ¡Disfruta de la experiencia Alura Flix!
                        </p>
                    </div>
                </div>
            </div>
            
            <div className='max-w-6xl mx-auto px-6 md:px-10 lg:px-12'>
                <div className="py-8 border-t-[1px] border-t-gray-700">
                    <h5 className="text-[#A0A0A0] text-xs">Hecho con 💙 <span className="text-xs">© 2023</span></h5>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
