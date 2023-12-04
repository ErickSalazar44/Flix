import { Movie, Movies, SeriesTV } from "@/types/types";

export const getPosterUrl = (movie: Movies | SeriesTV | Movie) => {
    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = "w342";
    return movie?.poster_path
        ? `${baseUrl}${size}/${movie?.poster_path}`
        : "/noImage.avif";
};
