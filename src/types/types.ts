
//*Estado global 
export interface MoviesContextProps {
    movies: any[]; // Puedes ajustar el tipo según la estructura de tus películas
    setMovies: React.Dispatch<React.SetStateAction<any[]>>;
}

export interface MenuContextProps {
    isMenuOpen: boolean;
    toggleMenu: () => void;
}


//* useFetch
export type FetchResult<T> = [T | null, (url: string) => Promise<void>];


//* Result SERIES
export type Result = {
    page:          number;
    results:       SeriesTV[];
    total_pages:   number;
    total_results: number;
}

export type SeriesTV = {
    adult:             boolean;
    backdrop_path:     string;
    id:                number;
    name:              string;
    original_language: OriginalLanguage;
    original_name:     string;
    overview:          string;
    poster_path:       string;
    media_type:        MediaType;
    genre_ids:         number[];
    popularity:        number;
    first_air_date:    Date;
    vote_average:      number;
    vote_count:        number;
    origin_country:    OriginCountry[];
}

//* Result Movies
export type Movies = {
    adult:             boolean;
    backdrop_path:     string;
    id:                number;
    title:             string;
    original_language: string;
    original_title:    string;
    overview:          string;
    poster_path:       string;
    media_type:        string;
    genre_ids:         number[];
    popularity:        number;
    release_date:      Date;
    video:             boolean;
    vote_average:      number;
    vote_count:        number;
}


// Type guard para verificar si es un objeto de tipo Movies
export const isMovies = (data: SeriesTV | Movies): data is Movies => {
    return (data as Movies).original_title !== undefined;
  };
  

export enum MediaType {
    Tv = "tv",
}

export enum OriginCountry {
    Br = "BR",
    GB = "GB",
    Jp = "JP",
    Us = "US",
}

export enum OriginalLanguage {
    En = "en",
    Ja = "ja",
    Pt = "pt",
}
//* Result genres tv
export type GenreTv = {
    genres: Genre[];
}

export type Genre = {
    id:   number;
    name: string;
}
