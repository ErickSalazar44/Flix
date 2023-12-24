import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/viewTransitions.css'
import { DMSans } from '../fonts/fonts'
import ShowTrailer from '@/components/media/ShowTrailer'

export const metadata: Metadata = {
	title: 'Alura Flix: Descubre una Plataforma de Streaming Única 🎬🍿',
	description: 'Explora películas y series en Alura Flix, el proyecto final de Oracle Next Education. Con tecnologías avanzadas como React.js y Vite, disfruta de una experiencia interactiva y eficiente. Encuentra detalles, trailers y reseñas, y descubre nuevas joyas en nuestra base de datos de The Movie Database. ¡Sumérgete en el entretenimiento audiovisual ahora!',
	keywords: [
		"Plataforma de Streaming",
		"Películas y Series en Línea",
		"Entretenimiento Audiovisual",
		"Trailers de Películas",
		"Detalles de Películas y Series",
		"Base de Datos de Películas",
		"Experiencia Interactiva",
		"Mejores Películas",
		"Series Populares",
		"Gemas Ocultas de Series",
		"Descubre qué Ver",
	]
}

export default function RootLayout(props: {children: React.ReactNode, modal: React.ReactNode}) {
	return (
		<html lang="en">
			<body className={`select-none max-w-[1920px] mx-auto ${DMSans.className}`}>
					{props.modal}
					{props.children}
					<ShowTrailer/>
			</body>
		</html>
	)
}
