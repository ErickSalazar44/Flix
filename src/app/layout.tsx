import type { Metadata } from "next";
import "../styles/globals.css";
import { DMSans } from "../fonts/fonts";
import ShowTrailer from "@/components/media/ShowTrailer";

export const metadata: Metadata = {
    title: {
        default:
            "Flix: Descubre y Disfruta de los Últimos Estrenos y Clásicos del Cine en una Plataforma de Películas Todo en Uno",
        template: "%s - Flix",
    },
    description:
        "Descubre un mundo cinematográfico emocionante en Flix, tu plataforma de películas en línea. Explora los últimos estrenos y encuentra información detallada sobre películas recientes y antiguas. Desde trailers cautivadores hasta resúmenes informativos, Flix te sumerge en el universo del cine. Obtén reseñas y recomendaciones, descubre proveedores de transmisión y encuentra las mejores opciones para ver tus películas favoritas. Desde los éxitos más recientes hasta las joyas inolvidables, Flix es tu destino para explorar y disfrutar del mundo del cine en cualquier momento y en cualquier lugar. ¡Únete a nosotros para una experiencia cinematográfica única!",
    keywords: [
        "Plataforma de Streaming",
        "Películas y Series en Línea",
        "Entretenimiento Audiovisual",
        "Trailers de Películas",
        "Detalles de Películas y Series",
        "Base de Datos de Películas",
        "Películas en línea",
        "Últimos estrenos",
        "Reseñas de películas",
        "Experiencia Interactiva",
        "Mejores Películas",
        "Series Populares",
        "Gemas Ocultas de Series",
        "Descubre qué Ver",
        "Trailers de películas",
    ],
    openGraph: {
        title: "Flix",
        description:
            "Descubre y Disfruta de los Últimos Estrenos y Clásicos del Cine en una Plataforma de Películas Todo en Uno",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 636,
            },
        ],
        type: "video.movie",
    },
};

export default function RootLayout(props: {
    children: React.ReactNode;
    modal: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <head>
                <link rel='icon' href='/favicon.ico' sizes='any' />
                <link
                    rel='icon'
                    href='/icon?<generated>'
                    type='image/<generated>'
                    sizes='<generated>'
                />
                <meta property='og:image' content='<generated>' />
                <meta property='og:image:type' content='<generated>' />
                <meta property='og:image:width' content='<generated>' />
                <meta property='og:image:height' content='<generated>' />
            </head>
            <body
                className={`select-none max-w-[1920px] mx-auto ${DMSans.className}`}
            >
                {props.modal}
                {props.children}
                <ShowTrailer />
            </body>
        </html>
    );
}
