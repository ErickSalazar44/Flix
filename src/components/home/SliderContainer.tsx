import { fetchData } from "@/utils/fetchData";
import Carrusel from "../UI/slider/Carrusel";

export default async function SliderContainer({
    path,
    title,
    subtitle,
    page,
}: {
    path: string;
    title: string;
    subtitle?: string;
    page?: string
}) {

    const type = path.includes('movie') ? 'movie' : 'tv'
    const query = page ? `language=es-ES&page=${page}` : ''
    const { results: data } = await fetchData(path,query);

    return (
        <section>
            <header className='mb-2'>
                <h3 className='font-medium text-sm mb-1 text-[#9c9c9c] '>
                    {title}
                </h3>
            </header>
            <Carrusel data={data} type={type}/>
        </section>
    );
}
