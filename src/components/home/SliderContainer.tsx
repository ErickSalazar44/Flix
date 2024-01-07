import { fetchData } from '@/utils/fetchData'
import SliderMedia from '../UI/slider/SliderMedia'

export default async function SliderContainer({
    path,
    title,
    page,
}: {
    path: string
    title: string
    page?: string
}) {
    const type = path.includes('movie') ? 'movie' : 'tv'
    const query = page ? `language=es-ES&page=${page}` : ''
    const { results: data } = await fetchData(path, query)

    return (
        <section>
            <header className='mb-2'>
                <h3 className='font-medium text-sm text-txtGray1'>{title}</h3>
            </header>
            <SliderMedia data={data} type={type} />
        </section>
    )
}
