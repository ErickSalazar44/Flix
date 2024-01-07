import { Genre } from '@/types/types'

// Usa el selector para obtener los nombres de géneros
export const getGenreNamesByIds = (state: Genre[], idArray: number[]) => {
    return idArray.map((id) => {
        const genre = state.find((genre) => genre.id === id)
        return genre
    })
}
