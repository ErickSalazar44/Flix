import type { Metadata } from 'next'
import { inter } from '../fonts/fonts'
import '../styles/globals.css'
import { Providers } from './providers'
import Navbar from '@/components/shared/header/Navbar'


export const metadata: Metadata = {
	title: 'Aluraflix 2',
	description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} pt-[74.5px] pt:h-[84px]`}>
				<Navbar/>
				<Providers>
					{children}
				</Providers>
			</body>
		</html>
	)
}
