import { MoviesAndSeries } from '@/types/types'

export const getPosterUrl = (movie: MoviesAndSeries, Width: number = 400) => {
    const baseUrl = 'https://image.tmdb.org/t/p/'
    const size = Width < 700 ? 'w342' : 'w500'
    return movie?.poster_path
        ? `${baseUrl}${size}/${movie?.poster_path}`
        : '/noImage.avif'
}
