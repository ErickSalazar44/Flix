import { GitHub, Instagram, Linkedin, Portafolio } from "@/components/icons/Icons";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className='w-full relative [background:#000_linear-gradient(180deg,#0000,#213944)]'>
            <div className='max-w-[1400px] mx-auto flex'>
                <div className='max-w-[1400px] mx-auto flex-[0_0_25%]'>
                    <h4>Navegación</h4>
                    <ul>
                        <li>
                            <Link href={"/"}>Explora lo más moviePopular</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href={"/"}>Explorar series populares</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href={"/"}>Explorar generos</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href={"/"}>Visitar version anterior</Link>
                        </li>
                    </ul>
                </div>
                <div className='max-w-[1400px] mx-auto flex-[0_0_25%]'>
                    <h4>Conecta conmigo</h4>
                    <ul>
                        <li>
                            <Link href={"/"}>
                                <span>
                                    <GitHub/>
                                </span>
                                <span>Git-Hub</span>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href={"/"}>
                            <span>
                                <Portafolio/>
                            </span>
                                <span>Portafolio</span>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href={"/"}>
                            <span>
                                <Linkedin/>
                            </span>
                                <span>Linkedin</span>
                            </Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href={"/"}>
                            <span>
                                <Instagram/>
                            </span>
                                <span>Instagram</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='max-w-[1400px] mx-auto flex-[0_0_25%]'>
                    <h4>AluraFlix</h4>
                    <p>
                    Alura Flix ofrece entretenimiento y educación a través de la API de The Movie Database (TMDb). Nuestro enfoque es para fines educativos y demostrar las capacidades de la API. No almacenamos videos; simplemente proporcionamos servicios de página web y enlazamos a terceros. Si tienes inquietudes sobre derechos de autor, contáctanos en dmca@aluraflix.com. Para consultas generales, escríbenos a contacto@aluraflix.com. ¡Disfruta de la experiencia Alura Flix! 🎬✨
                    </p>
                </div>
                <div className='max-w-[1400px] mx-auto flex-[0_0_25%]'>
                    <h4>Navegación</h4>
                    <ul>
                        <li>
                            <Link href={"/"}>Explora lo más moviePopular</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href={"/"}>Explorar series populares</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href={"/"}>Explorar generos</Link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <Link href={"/"}>Visitar version anterior</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className='max-w-[1400px] mx-auto'></div>
        </footer>
    );
};

export default Footer;
