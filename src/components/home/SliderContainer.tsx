import { fetchData } from "@/utils/fetchData";
import SliderBackdrop from "../UI/slider/SliderBackdrop";
import SliderPoster from "../UI/slider/SliderPoster";

export default async function SliderContainer({
    path,
    title,
    page,
    backdrop,
    autoPlay = false,
}: {
    path: string;
    title: string;
    page?: string;
    backdrop?: boolean;
    autoPlay?: boolean
}) {
    const type = path.includes("movie") ? "movie" : "tv";
    const query = page ? `language=es-ES&page=${page}` : "";
    const { results: data } = await fetchData(path, query);

    return (
        <section>
            <header className='mb-2'>
                <h3 className='font-medium text-sm text-txtGray1 '>{title}</h3>
            </header>
            {backdrop ? (
                <SliderBackdrop data={data} type={type} autoPlay={autoPlay}/>
            ) : (
                <SliderPoster data={data} type={type} />
            )}
        </section>
    );
}
