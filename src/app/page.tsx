import AnuncioSection from "@/components/home/AnuncioSection";
import HomeHeader from "@/components/home/HomeHeader";
import SliderContainer from "@/components/home/SliderContainer";
import { movieGenresList, trendingMoviesWeekly } from "@/lib/api";
import { Suspense } from "react";

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
            <section className='px-6 md:px-10 lg:px-12 2xl:px-16 my-8'>
                <div className='mb-7'>
                    <Suspense fallback={<h3>HOLAAAA...</h3>}>
                        <SliderContainer path='/trending/tv/week' carruselID='1'>
                            <h3 className='font-semibold text-lg mb-1'>Lo más popular</h3>
                        </SliderContainer>
                    </Suspense>
                </div>
                <div className='mb-7'>
                    <SliderContainer path='/movie/popular' carruselID='2'>
                        <h3 className="font-semibold text-lg mb-1">Del cine a tu casa</h3>
                        <p className="opacity-80 text-xs sm:text-sm">Culturas valiosas. Historias diversas. Energía vibrante.</p>
                    </SliderContainer>
                </div>
            </section>
        </main>
    );
}
