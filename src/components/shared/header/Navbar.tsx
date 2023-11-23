import Link from "next/link";
import MenuFunction from "./MenuFunction";
import NavbarScroll from "./NavbarScroll";
import { MenuIcon, Search } from "@/icons/Icons";
import Image from "next/image";
import NavbarItem from "./NavbarItems";

const Navbar = () => {
    return (
        <header className={`fixed top-0 z-50 w-full main`}>
            <NavbarScroll /> {/* cliente */}
            <nav className='relative z-10 w-full h-navbar md:h-navbar-md flex justify-between items-center px-6 md:px-10 lg:px-12 2xl:px-16'>
                <ul className='flex items-center gap-7 text-neutral-400 flex-1'>
                    <li className='h-6'>
                        <MenuFunction>{/* cliente */}
                            <MenuIcon /> {/* servidor */}
                        </MenuFunction>{/* cliente */}
                    </li>
                    <NavbarItem>Películas</NavbarItem>
                    <NavbarItem>Series</NavbarItem>
                </ul>

                <Link href={"/"}>
                    <Image
                        alt='Logo de la pagina'
                        src='/logo.webp'
                        width={169}
                        height={40}
                        className='w-24 md:w-28'
                        priority={true}
                    />
                </Link>
                <div className="flex flex-1 justify-end">
                    <Link href={"/"} className=''>
                        <Search />
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
