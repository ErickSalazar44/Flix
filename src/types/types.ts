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
    page: number;
    results: SeriesTV[] | Movies[];
    total_pages: number;
    total_results: number;
};

export type SeriesTV = {
    adult: boolean;
    backdrop_path: string;
    id: number;
    name: string;
    original_language: OriginalLanguage;
    original_name: string;
    overview: string;
    poster_path: string;
    media_type: MediaType;
    genre_ids: number[];
    popularity: number;
    first_air_date: Date;
    vote_average: number;
    vote_count: number;
    origin_country: OriginCountry[];
};

//* Result Movies
export type Movies = {
    adult: boolean;
    backdrop_path: string;
    id: number;
    title: string;
    original_language: string;
    original_title: string;
    overview: string;
    poster_path: string;
    media_type: string;
    genre_ids: number[];
    popularity: number;
    release_date: Date;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

//* Result Movie ID

export type ProductionCompany = {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
};

export type ProductionCountry = {
    iso_3166_1: string;
    name: string;
};

type SpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
};

type VideoResult = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: string;
    id: string;
};

export type Movie = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null | any;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: ProductionCompany[];
    production_countries: ProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    videos: {
        results: VideoResult[];
    };
};


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
};

export type Genre = {
    id: number;
    name: string;
};

//* Repart

interface Cast {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
}

interface Crew {
    adult: boolean,
    gender: number,
    id: number,
    known_for_department: string,
    name: string,
    original_name: string,
    popularity: number,
    profile_path: string,
    credit_id: string,
    department: string,
    job: string
}

export interface Reparto {
    id: number,
    cast: Cast[],
    crew: Crew[]
}

//* Galeria 

export interface ImageInfo {
    aspect_ratio: number;
    height: number;
    iso_639_1: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}


export interface Galeria {

    backdrops: ImageInfo[],
    id: number,
    logos: ImageInfo[],
    posters: ImageInfo[]

}