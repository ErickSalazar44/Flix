'use client'

import { useEffect, useState } from "react"
import clsx from 'clsx';

const NavbarScroll = () => {

	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		// Función para actualizar el valor de scrollY cuando se desplace la página
		const handleScroll = () => {
			setScrollY(window.scrollY)
		}
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div
			className={clsx(
				'absolute top-0 left-0 w-full h-[74.5px] lg:h-[84px] z-40 transition-all duration-500 ease-in-out opacity-[0.96]',
				{
					'bg-navbar translate-y-[0%]' : scrollY > 50,
					'bg-transparent -translate-y-full' : scrollY <= 50,
				}
			)}
		/>
	)
}

export default NavbarScroll