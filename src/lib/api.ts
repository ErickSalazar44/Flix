import { fetchData } from "@/utils/fetchData";


export const trendingTvWeekly = () => {
    const path = "/trending/tv/week";
    return fetchData(path);
}


export const tvGenresList = () => {
    const path = "/genre/tv/list";
    return fetchData(path);
}

