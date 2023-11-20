import Link from "next/link";
import MenuFunction from "./MenuFunction";
import NavbarScroll from "./NavbarScroll";
import { MenuIcon, Search } from "@/icons/Icons";
import Image from "next/image";
import NavbarItem from "./NavbarItems";


const Navbar = () => {
    return (
        <header className={`fixed top-0 z-50 text-white w-full`}>
            <NavbarScroll /> {/* cliente */}
            <nav className='w-full h-[74.5px] lg:h-[84px] flex justify-between items-center z-50 px-8 md:px-10 lg:px-12 2xl:px-16'>
                <ul className='flex gap-7 font-bold left-14 text-neutral-400 flex-1'>
                    <li>
                         <MenuFunction> {/* cliente */}
                            <MenuIcon /> {/* servidor */}
                        </MenuFunction> {/* cliente */}
                    </li>
                    <NavbarItem>Películas</NavbarItem>
                    <NavbarItem>Series</NavbarItem>
                </ul>

                <Link href={'/'}>
                    <Image
                        alt='Logo de la pagina'
                        src='/logo.webp'
                        width={169}
                        height={40}
                        className='w-28'
                        priority={true}
                    />
                </Link>
                <Link href={'/'} className="flex flex-1 justify-end">
                    <Search />
                </Link>
            </nav>
        </header>
    )
}

export default Navbar