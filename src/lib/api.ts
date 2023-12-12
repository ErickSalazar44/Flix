import { fetchData } from "@/utils/fetchData";

// HOME MOVIES
export const trendingMoviesWeekly = () => {
    const path = "/trending/movie/week";
    return fetchData(path);
}

// OBTENER GENEROS MOVIE
export const movieGenresList = () => {
    const path = "/genre/movie/list";
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
