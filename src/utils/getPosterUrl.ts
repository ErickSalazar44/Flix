import { Movies, SeriesTV } from "@/types/types";

export const getPosterUrl = (movie: Movies | SeriesTV) => {
    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = "w500";
    return movie?.poster_path
        ? `${baseUrl}${size}/${movie?.poster_path}`
        : "/noImage.avif";
};
