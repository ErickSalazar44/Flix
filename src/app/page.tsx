import Publicity from "@/components/home/Publicity";
import HomeHeader from "@/components/home/HomeHeader";
import SliderContainer from "@/components/home/SliderContainer";
import { movieGenresList, trendingMoviesWeekly } from "@/lib/api";
import RevisaNuestroCatalogo from "@/components/home/RevisaNuestroCatalogo";
import Navbar from "@/components/shared/header/Navbar";


export default async function Home() {
    const { results: moviesTrends } = await trendingMoviesWeekly();
    const generos = await movieGenresList();

    return (
        <main className='main '>
            {/* <Navbar /> */}
            {/* HOME HEADER  */}
            <HomeHeader moviesTrends={moviesTrends} genresMovies={generos} />

            {/* ANUNCIO */}
            <Publicity />

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
                    path='/movie/upcoming'
                    title='FAVORITAS DE FESTIVALES DE CINE'
                />
                <SliderContainer
                    path='/movie/top_rated'
                    title='DESTACADOS DE ALURA'
                />
            </section>
            <RevisaNuestroCatalogo />
        </main>
    );
}
