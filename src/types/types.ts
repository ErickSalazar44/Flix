//*Estado global
export interface MoviesContextProps {
    movies: any[] // Puedes ajustar el tipo según la estructura de tus películas
    setMovies: React.Dispatch<React.SetStateAction<any[]>>
}

export interface YouTubePlayerProps {
    videoId: string
}

export interface MenuContextProps {
    isMenuOpen: boolean
    toggleMenu: () => void
}

//* useFetch
export type FetchResult<T> = [T | null, (url: string) => Promise<void>]

//* Result SERIES
export type Result = {
    page: number
    results: MoviesAndSeries[]
    total_pages: number
    total_results: number
}

//* Result Movies
export type MoviesAndSeries = {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    release_date: Date
    video: boolean
    name: string
    original_name: string
    first_air_date: Date
    vote_average: number
    vote_count: number
    origin_country: OriginCountry[]
}

//* Result Movie o Serie ID
export type ProductionCompany = {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
}

export type ProductionCountry = {
    iso_3166_1: string
    name: string
}

type SpokenLanguage = {
    english_name: string
    iso_639_1: string
    name: string
}

export type VideoResult = {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published_at: string
    id: string
}

export type Media = {
    belongs_to_collection: null | any
    budget: number
    imdb_id: string
    original_title: string
    release_date: string
    revenue: number
    runtime: number
    title: string
    video: boolean
    adult: boolean
    backdrop_path: string
    created_by: any[]
    episode_run_time: any[]
    first_air_date: string
    genres: Genre[]
    homepage: string
    id: number
    in_production: boolean
    languages: string[]
    last_air_date: string
    last_episode_to_air: LastEpisode
    name: string
    next_episode_to_air: null
    networks: Network[]
    number_of_episodes: number
    number_of_seasons: number
    origin_country: string[]
    original_language: string
    original_name: string
    overview: string
    popularity: number
    poster_path: string
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    seasons: Season[]
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    type: string
    vote_average: number
    vote_count: number
    videos: {
        results: VideoResult[]
    }
}

type Network = {
    id: number
    logo_path: string
    name: string
    origin_country: string
}

type Season = {
    air_date: string
    episode_count: number
    id: number
    name: string
    overview: string
    poster_path: string
    season_number: number
    vote_average: number
}

type LastEpisode = {
    id: number
    name: string
    overview: string
    vote_average: number
    vote_count: number
    air_date: string
    episode_number: number
    episode_type: string
    production_code: string
    runtime: number
    season_number: number
    show_id: number
    still_path: string
}

export enum MediaType {
    Tv = 'tv',
}

export enum OriginCountry {
    Br = 'BR',
    GB = 'GB',
    Jp = 'JP',
    Us = 'US',
}

export enum OriginalLanguage {
    En = 'en',
    Ja = 'ja',
    Pt = 'pt',
}
//* Result genres tv
export type GenreTv = {
    genres: Genre[]
}

export type Genre = {
    id: number
    name: string
}

//* Repart

export interface Cast {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    cast_id: number
    character: string
    credit_id: string
    order: number
}

interface Crew {
    adult: boolean
    gender: number
    id: number
    known_for_department: string
    name: string
    original_name: string
    popularity: number
    profile_path: string
    credit_id: string
    department: string
    job: string
}

export interface Reparto {
    id: number
    cast: Cast[]
    crew: Crew[]
}

export interface Actor {
    adult: boolean
    also_known_as: string[]
    biography: string
    birthday: string
    deathday: string | null
    gender: number
    homepage: string | null
    id: number
    imdb_id: string
    known_for_department: string
    name: string
    place_of_birth: string
    popularity: number
    profile_path: string | null
}

//* Galeria

export interface ImageInfo {
    aspect_ratio: number
    height: number
    iso_639_1: string
    file_path: string
    vote_average: number
    vote_count: number
    width: number
}

export interface Galeria {
    backdrops: ImageInfo[]
    id: number
    logos: ImageInfo[]
    posters: ImageInfo[]
}

// Filter Panel Search

export interface OrganizarPorItem {
    id: string | number
    name: string
}

export interface CategoriaPanel {
    movie: {
        organizarPor: OrganizarPorItem[]
    }
    tv: {
        organizarPor: OrganizarPorItem[]
    }
}
export type OrganizadoPorMovie =
    | 'trending'
    | 'now_playing'
    | 'popular'
    | 'top_rated'
    | 'upcoming'
export type OrganizadoPorTv = 'trending' | 'popular' | 'top_rated'
