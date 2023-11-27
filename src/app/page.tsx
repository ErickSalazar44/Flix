import AnuncioSection from "@/components/home/AnuncioSection";
import HomeHeader from "@/components/home/HomeHeader";
import SliderContainer from "@/components/home/SliderContainer";
import { movieGenresList, trendingMoviesWeekly } from "@/lib/api";


export default async function Home() {
    const { results: moviesTrends } = await trendingMoviesWeekly();
    const generos = await movieGenresList();

    return (
        <main className='main'>
            {/* HOME HEADER  */}
            <HomeHeader moviesTrends={moviesTrends} genresMovies={generos} />

            {/* ANUNCIO */}
            <AnuncioSection />

            {/* SLIDER MOVIE 1 */}
            <section className='px-6 md:px-10 lg:px-12 2xl:px-16 my-8 flex flex-col gap-12 lg:gap-14 xl:gap-16'>

                <SliderContainer
                    path='/trending/tv/week'
                    title='Lo más popular'
                />

                <SliderContainer
                    path='/movie/popular'
                    title='Del cine a tu casa'
                    subtitle='Culturas valiosas. Historias diversas. Energía vibrante.'
                />
            </section>
        </main>
    );
}
