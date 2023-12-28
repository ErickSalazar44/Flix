'use client'
import RevisaNuestroCatalogo from "@/components/home/RevisaNuestroCatalogo";
import {
    GitHub,
    Instagram,
    Linkedin,
    Portafolio,
} from "@/components/icons/Icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <div className="bg-black">
            <RevisaNuestroCatalogo/>        
            <footer className='scrollMove lg:mt-20 w-full relative bg-footerGradiant pt-8 md:pt-20'>
                <div className='max-w-6xl mx-auto mb-8 '>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                        <div className='px-6 md:px-10 lg:px-12'>
                            <h4 className='text-sm mb-4 uppercase'>Navegación</h4>
                            <ul className='text-txtGray1 text-xs flex flex-col gap-4'>
                                <li>
                                    <Link href={"/search/movie"}>Explora lo más popular</Link>
                                </li>

                                <li>
                                    <Link href={"/search/tv"}>Explorar series populares</Link>
                                </li>

                                <li>
                                    <Link href={"/search/movie?genre=27"}>Explorar generos</Link>
                                </li>

                                <li>
                                    <a href='https://aluraflix-ericksalazar.netlify.app/#/' target="_blank" rel="noopener noreferrer">Visitar version anterior</a>
                                </li>
                            </ul>
                        </div>
                        <div className='px-6 md:px-10 lg:px-12'>
                            <h4 className='text-sm mb-4 uppercase'>Contactame</h4>
                            <ul className='text-txtGray1 text-xs flex flex-col gap-2'>
                                <li>
                                    <a
                                        className='flex items-center gap-2'
                                        href='https://github.com/ErickSalazar44/Flix'
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <span>
                                            <GitHub />
                                        </span>
                                        <span>Git-Hub</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className='flex items-center gap-2'
                                        href='https://newportafolio-one.vercel.app/'
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <span>
                                            <Portafolio />
                                        </span>
                                        <span>Portafolio</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className='flex items-center gap-2'
                                        href='https://www.linkedin.com/in/erick-josep-salazar-8b8b6024b/'
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <span>
                                            <Linkedin />
                                        </span>
                                        <span>Linkedin</span>
                                    </a>
                                </li>

                                <li>
                                    <a
                                        className='flex items-center gap-2'
                                        href='https://www.instagram.com/erickcsalazar22/'
                                        target="_blank" rel="noopener noreferrer"
                                    >
                                        <span>
                                            <Instagram />
                                        </span>
                                        <span>Instagram</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className='px-6 md:px-10 lg:px-12 hidden sm:block'>
                            <h4 className='text-sm mb-4 uppercase'>Flix</h4>
                            <p className='text-txtGray1 text-xs leading-7'>
                                Ofrece entretenimiento
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
                            <h4 className='text-sm mb-4 uppercase'>Cuenta</h4>
                            <p className='text-txtGray1 text-xs leading-7'>
                                Proporcionamos servicios
                                <br />
                                de página web
                                <br />
                                y enlazamos a terceros.
                                <br />
                                Si tienes inquietudes sobre
                                <br />
                                derechos de autor contáctanos
                                <br />
                                <span className="select-text">erickjosepsalazar2@gmail.com</span>
                                <br />
                                ¡Disfruta de la experiencia Flix!
                            </p>
                        </div>
                    </div>
                </div>

                <div className='max-w-6xl mx-auto px-6 md:px-10 lg:px-12'>
                    <div className="text-txtGray1 py-8 border-t-[1px] border-t-gray-700 flex justify-between">
                        <h5 className="text-xs">Hecho con 💙<span className="text-xs"> © {currentYear}</span></h5>
                        <h6 className="text-xs">Erick Salazar</h6>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
