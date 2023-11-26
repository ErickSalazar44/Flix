
// Este estado global almacena las peliculas mostradas en el primer slider home, el uso de esta es para evitar hacer doble renderizado

import { createContext, useState } from 'react';
// import type { MoviesContextProps } from '@/types/types.ts'


// const inicialState = {
//     movies: [],
//     setMovies: () => {}
// }

// const MoviesContext = createContext(inicialState);

// const MoviesProvider = ({ children }: { children: React.ReactNode }) => {

//     const [movies, setMovies] = useState<any[]>([]); // Estado para las películas

//     return (
//         <MoviesContext.Provider value={{ movies, setMovies }}>
//             {children}
//         </MoviesContext.Provider>
//     )
// };


// export default MoviesProvider;
