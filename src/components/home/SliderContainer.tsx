import { fetchData } from "@/utils/fetchData";
import Slider from "../UI/Slider";


export default async function SliderContainer({
    path,
    children,
}: {
    path: string;
    children: React.ReactNode;
}) {

    const { results: data } = await fetchData(path);

    return (
        <section>
            <header className='mb-4'>{children}</header>
            <div className='relative'>
                <Slider data={data} />
            </div>
        </section>
    );
}
