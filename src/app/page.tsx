import AnuncioSection from "@/components/home/AnuncioSection";
import HomeHeader from "@/components/home/HomeHeader";
import { trendingTvWeekly, tvGenresList } from "@/lib/api";

export default async function Home() {
    const { results: seriesTrends } = await trendingTvWeekly();
    const generos = await tvGenresList();
    return (
        <main className='main'>
            {/* HOME HEADER  */}

            <HomeHeader seriesTrends={seriesTrends} genresTv={generos} />

            {/* ANUNCIO */}
            <AnuncioSection />

            {/* SLIDER MOVIE 1 */}
            <section className='px-6 md:px-10 lg:px-12 2xl:px-16 my-8'>
                <div className='mb-7'>
                    {/* <Slider
                        path='/movie/popular'
                        titulo='Lo más popular'
                        isMovie='/movie'
                    /> */}
                </div>
                <div className='mb-7'>
                    {/* <Slider
                        path='/movie/popular'
                        query={"page=2"}
                        titulo='Del cine a tu casa'
                        subtitulo={
                            "Culturas valiosas. Historias diversas. Energía vibrante."
                        }
                        isMovie='/movie'
                    /> */}
                </div>
            </section>
        </main>
    );
}
