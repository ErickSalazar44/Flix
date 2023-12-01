
import { fetchGaleriaMovie } from "@/lib/api"
import '../UI/scrollAnimate.css'

const Galeria = async ({ id }: { id: string }) => {

    const galaeria = await fetchGaleriaMovie(id)

    //TODO crear una api con app router este componente sera cliente al dar click en desplegar galeria se mostraran las imagenes 
    return (
        <div>
            <h4>Desplegar Galeria</h4>
            <div className="flex flex-col gap-[20vh] pt-[30vh]">
                {
                    galaeria.posters.map((image: any, index: number) => (
                        <img 
                            key={image.file_path} 
                            src={`https://image.tmdb.org/t/p/w780${image.file_path}`} 
                            alt="" 
                            className={`self-center sticky top-[14vh] object-contain  ${index % 2 === 0 ? 'imgScroll' : 'imgScroll2'}`}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Galeria