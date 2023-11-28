import { fetchData } from "@/utils/fetchData";
//!
export const trendingMoviesWeekly = () => {
    const path = "/trending/movie/week";
    return fetchData(path);
}

//!
export const trendingTvWeekly = () => {
    const path = "/trending/tv/week";
    return fetchData(path);
}
//!
export const movieGenresList = () => {
    const path = "/genre/movie/list";
    return fetchData(path);
}
//!
export const moviePopular = () => {
    const path = "/movie/popular"
    return fetchData(path);
}

export const tvTopRated = () => {
    const path ='/tv/top_rated'
    return fetchData(path);
}

export const movieTopRated = () => {
    const path='/movie/top_rated'
    return fetchData(path);
}