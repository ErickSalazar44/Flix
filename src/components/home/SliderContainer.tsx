import { fetchData } from "@/utils/fetchData";
import Carrusel from "../UI/Carrusel";


export default async function SliderContainer({
    path,
    children,
    carruselID
}: {
    path: string;
    children: React.ReactNode;
    carruselID: string
}) {

    const { results: data } = await fetchData(path);

    return (
        <section>
            <header className='mb-4'>{children}</header>
            <Carrusel data={data} carruselId={carruselID}/>
        </section>
    );
}
