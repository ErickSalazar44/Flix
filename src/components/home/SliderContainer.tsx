import { fetchData } from "@/utils/fetchData";
import Carrusel from "../UI/Carrusel";

export default async function SliderContainer({
    path,
    title,
    subtitle,
}: {
    path: string;
    title: string;
    subtitle?: string;
}) {
    const { results: data } = await fetchData(path);

    return (
        <section>
            <header className='mb-2 sm:mb-3'>
                <h3 className='font-medium text-lg mb-1'>{title}</h3>
                <p className='text-xs font-light text-SemiTransparentWhite sm:text-sm'>
                    {subtitle}
                </p>
            </header>
            <Carrusel data={data}/>
        </section>
    );
}
