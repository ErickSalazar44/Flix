import { fetchData } from "@/utils/fetchData";

// HOME
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

// PROXIMOS EXTRENOS
export const movieUpconmming = () => {
    const path = '/movie/upcoming'
    return fetchData(path)
}

// SECCION DE REPARTO MOVIES
export const fetchRepartoMovie = (type: string, id: string) => {
    const path = `/${type}/${id}/credits`
    return fetchData(path)
}

// VIDEOS RECOMENDADO MOVIES
export const fetchRecomendacionMovie = (type: string, id: string) => {
    const path = `/${type}/${id}/recommendations`
    return fetchData(path)
}

export const fetchGaleriaMovie = (id: string) => {
    ///movie/12345/images?include_image_language=en,es&language=es
    const path = `/movie/${id}/images?include_image_language=en&language=es-ES`
    return fetchData(path,'','')
}