import Publicity from '@/components/home/Publicity'
import HomeHeader from '@/components/home/HomeHeader'
import { movieGenresList, trendingMoviesWeekly } from '@/lib/api'
import Footer from '@/components/shared/footer/Footer'
import NavSearch from '@/components/search/NavSearch'
import FormSearch from '@/components/shared/header/FormSearch'
import dynamic from 'next/dynamic'
import EspaciadoLayout from '@/components/layout/EspaciadoLayout'
const DynamicSliderContainer = dynamic(
    () => import('@/components/home/SliderContainer')
)
const DynamicColeccionContainer = dynamic(
    () => import('@/components/home/ColeccionContainer')
)

export default async function Home({
    searchParams,
}: {
    searchParams: { q: string }
}) {
    const { results: moviesTrends } = await trendingMoviesWeekly()
    const generos = await movieGenresList()

    return (
        <main className='scrollMove'>
            {/* NAVBAR */}
            <NavSearch type='' duration={100}>
                <FormSearch
                    defaultValue={searchParams.q || ''}
                    type={'movie'}
                />
            </NavSearch>

            {/* HOME HEADER  */}
            <HomeHeader moviesTrends={moviesTrends} genresMovies={generos} />

            {/* COLECCION */}
            <DynamicColeccionContainer
                id='131296'
                textColor='#12c8ff'
                subTitle='Rivalidades y Redenciones'
            />

            {/* SLIDER MOVIE 1 */}
            <EspaciadoLayout
                component='section'
                className='my-8 flex flex-col gap-12 lg:gap-4 2xl:gap-8 text-txtGray2'
            >
                <DynamicSliderContainer
                    path='/trending/tv/week'
                    title='SERIES POPULARES'
                />
                <DynamicSliderContainer
                    path='/movie/popular'
                    title='OBRAS MAESTRAS MODERNAS'
                />
                <DynamicSliderContainer
                    path='/trending/tv/week'
                    page='2'
                    title='SERIES DESTACADAS'
                />
                <DynamicSliderContainer
                    path='/movie/top_rated'
                    title='DESTACADOS DE FLIX'
                />
            </EspaciadoLayout>
            {/* ANUNCIO */}
            <Publicity />

            {/* COLECCION 2 */}
            <DynamicColeccionContainer
                id='228446'
                textColor='#de4444'
                subTitle='Terror en cinta de video'
            />

            {/* SLIDER MOVIE AND SERIE 2 */}
            <EspaciadoLayout
                component='section'
                className='my-8 flex flex-col gap-12 lg:gap-4 2xl:gap-8 text-txtGray2'
            >
                <DynamicSliderContainer
                    path='/movie/now_playing'
                    title='SERIES POPULARES'
                />
                <DynamicSliderContainer
                    path='/trending/movie/week'
                    page='2'
                    title='PELÍCULAS EN TENDENCIA'
                />
                <DynamicSliderContainer
                    path='/movie/upcoming'
                    page='2'
                    title='PRÓXIMOS ESTRENOS DE PELÍCULAS'
                />
                <DynamicSliderContainer
                    path='/trending/tv/week'
                    page='3'
                    title='SERIES EN TENDENCIA'
                />
            </EspaciadoLayout>
            <Footer />
        </main>
    )
}
