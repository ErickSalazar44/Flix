export const menuItems = [
    {
        name: 'Inicio',
        ruta: '/'
    },
    {
        name: 'Series',
        ruta: '/search/tv'
    },
    {
        name: 'Películas',
        ruta: '/search/movie'
    },
    {
        name: 'Originales',
        ruta: '/search/movie?filter=popular'
    },
    {
        name: 'Tendencias',
        ruta: '/search/tv?filter=top_rated'
    },
    {
        name: 'Ver más',
        ruta: '/search/movie?filter=upcoming'
    },
];


export const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
];


export const genresPanel = {
    movie: {
        generos: [
            { id: 28, name: 'Acción' },
            { id: 12, name: 'Aventura' },
            { id: 16, name: 'Animación' },
            { id: 35, name: 'Comedia' },
            { id: 80, name: 'Crimen' },
            { id: 99, name: 'Documental' },
            { id: 18, name: 'Drama' },
            { id: 10751, name: 'Familia' },
            { id: 14, name: 'Fantasía' },
            { id: 36, name: 'Historia' },
            { id: 27, name: 'Terror' },
            { id: 10402, name: 'Música' },
            { id: 9648, name: 'Misterio' },
            { id: 10749, name: 'Romance' },
            { id: 878, name: 'Ciencia ficción' },
            { id: 10770, name: 'Película de TV' },
            { id: 53, name: 'Suspense' },
            { id: 10752, name: 'Bélica' },
            { id: 37, name: 'Western' }
        ],
    },
    tv: {
        generos: [
            { id: 10759, name: 'Action & Adventure' },
            { id: 16, name: 'Animación' },
            { id: 35, name: 'Comedia' },
            { id: 80, name: 'Crimen' },
            { id: 99, name: 'Documental' },
            { id: 18, name: 'Drama' },
            { id: 10751, name: 'Familia' },
            { id: 10762, name: 'Kids' },
            { id: 9648, name: 'Misterio' },
            { id: 10763, name: 'News' },
            { id: 10764, name: 'Reality' },
            { id: 10765, name: 'Sci-Fi & Fantasy' },
            { id: 10766, name: 'Soap' },
            { id: 10767, name: 'Talk' },
            { id: 10768, name: 'War & Politics' },
            { id: 37, name: 'Western' }
        ],
    }
}

export const categoriaPanel = {
    movie: {
        organizarPor: [
            { id: 'trending', name: 'Tendencias' },
            { id: 'now_playing', name: 'Lo más buscado' },
            { id: 'popular', name: 'Popular' },
            { id: 'top_rated', name: 'Mejor Calificado' },
            { id: 'upcoming', name: 'Estrenos' },
        ]
    },
    tv: {
        organizarPor: [
            { id: 'trending', name: 'Tendencias' },
            { id: 'top_rated', name: 'Mejor Calificado' },
            { id: 'popular', name: 'Popular' },
        ]
    }
}
