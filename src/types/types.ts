
//*Estado global 


export interface MoviesContextProps {
    movies: any[]; // Puedes ajustar el tipo según la estructura de tus películas
    setMovies: React.Dispatch<React.SetStateAction<any[]>>;
}