import { fetchData } from "@/utils/fetchData"
import Image from "next/image"
import { MoviesAndSeries } from '../../types/types';

const ContainerCard = async () => {

    const data = await fetchData('/trending/tv/week')

    console.log(data)

    return (
        <section className="grid [grid-template-columns:repeat(auto-fill,_minmax(160px,1fr))] gap-2">
            {
                data.results.map((result: MoviesAndSeries) => (
                    <div key={result.id}>
                        <picture>
                            <Image
                                src={`https://image.tmdb.org/t/p/w342${result.poster_path}`}
                                alt={`${result.name ?? result.title}`}
                                width={195}
                                height={292}
                                style={{
                                    width: 'auto',
                                    height: 'auto'
                                }}
                                className="aspect-[9/14]"
                            />
                        </picture>
                    </div>
                ))
            }
        </section>
    )
}

export default ContainerCard