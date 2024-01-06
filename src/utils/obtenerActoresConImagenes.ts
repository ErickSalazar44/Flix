import { Reparto } from '@/types/types'

export function obtenerActoresConImagenes(reparto: Reparto) {
    // Filtra y selecciona los primeros 20 actores únicos con una ruta de imagen válida
    const actoresConImagenes = reparto?.cast
        .filter(
            (actor, index, self) =>
                actor.profile_path !== null &&
                self.findIndex((a) => a.id === actor.id) === index
        )
        .slice(0, 20)

    return actoresConImagenes || []
}
