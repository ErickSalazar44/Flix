import { fetchData } from "@/utils/fetchData";
import { fetchDataNoStore } from "@/utils/fetchDataNoStore";

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

// SECCION DE REPARTO MOVIES
export const fetchRepartoMovie = (type: string, id: string) => {
    const path = `/${type}/${id}/credits`
    return fetchDataNoStore(path)
}

// VIDEOS RECOMENDADO MOVIES
export const fetchRecomendacionMovie = (type: string, id: string) => {
    const path = `/${type}/${id}/recommendations`
    return fetchDataNoStore(path)
}

// Informacion del Actor por Id 
export const fetchActorForId = (type: string, id: string) => {
    const path = `/person/${id}`
    return fetchDataNoStore(path)
}