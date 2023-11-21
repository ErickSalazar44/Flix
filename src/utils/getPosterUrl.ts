import { SeriesTV } from "@/types/types";

export const getPosterUrl = (movie: SeriesTV, windowWidth: number) => {
    const baseUrl = "https://image.tmdb.org/t/p/";
    const size = windowWidth < 700 ? "w185" : "w500";
    return movie?.poster_path
        ? `${baseUrl}${size}/${movie?.poster_path}`
        : "/noImage.avif";
};
