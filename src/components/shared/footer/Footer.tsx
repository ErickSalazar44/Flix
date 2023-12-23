'use client'
import {
    GitHub,
    Instagram,
    Linkedin,
    Portafolio,
} from "@/components/icons/Icons";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {

    // Inicializamos el estado con el año actual
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

    // Utilizamos useEffect para actualizar el año cuando el componente se monta
    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    return (
        <footer className='scrollMove lg:mt-20 w-full relative [background:#000_linear-gradient(180deg,#0000,#0890b23c)] pt-8 md:pt-20'>
            <div className='max-w-6xl mx-auto mb-8 '>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
                    <div className='px-6 md:px-10 lg:px-12'>
                        <h4 className='text-sm mb-4 uppercase'>Navegación</h4>
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
                        <h4 className='text-sm mb-4 uppercase'>Contactame</h4>
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
                        <h4 className='text-sm mb-4 uppercase'>AluraFlix</h4>
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
                        <h4 className='text-sm mb-4 uppercase'>Cuenta</h4>
                        <p className='text-[#A0A0A0] text-xs leading-7'>
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
                            ¡Disfruta de la experiencia Alura Flix!
                        </p>
                    </div>
                </div>
            </div>

            <div className='max-w-6xl mx-auto px-6 md:px-10 lg:px-12'>
                <div className="text-[#A0A0A0] py-8 border-t-[1px] border-t-gray-700 flex justify-between">
                    <h5 className="text-xs">Hecho con 💙<span className="text-xs"> © {currentYear}</span></h5>
                    <h6 className="text-xs">Erick Salazar</h6>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
