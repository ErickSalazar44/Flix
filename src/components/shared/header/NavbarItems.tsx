
const NavbarItem = ({children}:{children: React.ReactNode}) => {
    return (
        <li
            className={`hidden lg:block hover:text-white transition-colors duration-300 cursor-pointer`}
        >
            {children}
        </li>
    )
}

export default NavbarItem