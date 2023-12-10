import Publicity from "@/components/home/Publicity";
import HomeHeader from "@/components/home/HomeHeader";
import SliderContainer from "@/components/home/SliderContainer";
import { movieGenresList, trendingMoviesWeekly } from "@/lib/api";
import RevisaNuestroCatalogo from "@/components/home/RevisaNuestroCatalogo";
import Navbar from "@/components/shared/header/Navbar";
import ColeccionContainer from "@/components/home/ColeccionContainer";

export default async function Home() {
    const { results: moviesTrends } = await trendingMoviesWeekly();
    const generos = await movieGenresList();

    return (
        <main className='main '>
            <Navbar />
            {/* HOME HEADER  */}
            <HomeHeader moviesTrends={moviesTrends} genresMovies={generos} />

            {/* COLECCION */}
            <ColeccionContainer
                id='131296'
                textColor='#12c8ff'
                subTitle='Rivalidades y Redenciones'
            />
            {/* SLIDER MOVIE 1 */}
            <section className='px-6 md:px-10 lg:px-12 2xl:px-16 my-8 flex flex-col gap-12 lg:gap-4 text-[#e0e0e0]'>
                <SliderContainer
                    path='/trending/tv/week'
                    title='SERIES POPULARES'
                />
                <SliderContainer
                    path='/movie/popular'
                    title='OBRAS MAESTRAS MODERNAS'
                />
                <SliderContainer
                    path='/trending/tv/week'
                    page='2'
                    title='FAVORITAS DE FESTIVALES DE CINE'
                />

                <SliderContainer
                    path='/movie/top_rated'
                    title='DESTACADOS DE ALURA'
                />
            </section>
            {/* ANUNCIO */}
            <Publicity />

            {/* COLECCION 2 */}
            <ColeccionContainer
                id='228446'
                textColor='#de4444'
                subTitle='Terror en cinta de video'
            />

            {/* SLIDER MOVIE AND SERIE 2 */}
            <section className='px-6 md:px-10 lg:px-12 2xl:px-16 my-8 flex flex-col gap-12 lg:gap-6 text-[#e0e0e0]'>
                <SliderContainer
                    path='/movie/now_playing'
                    title='SERIES POPULARES'
                />
                <SliderContainer
                    path='/trending/movie/week'
                    page='2'
                    title='OBRAS MAESTRAS MODERNAS'
                />
                <SliderContainer
                    path='/movie/upcoming'
                    page='2'
                    title='FAVORITAS DE FESTIVALES DE CINE'
                />
                <SliderContainer
                    path='/trending/tv/week'
                    page='3'
                    title='FAVORITAS DE FESTIVALES DE CINE'
                />
            </section>

            <RevisaNuestroCatalogo />
        </main>
    );
}
