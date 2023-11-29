import Publicity from "@/components/home/Publicity";
import Publicity2 from "@/components/home/Publicity2";
import HomeHeader from "@/components/home/HomeHeader";
import SliderContainer from "@/components/home/SliderContainer";
import { movieGenresList, trendingMoviesWeekly } from "@/lib/api";
import RevisaNuestroCatalogo from "@/components/home/RevisaNuestroCatalogo";


export default async function Home() {
    const { results: moviesTrends } = await trendingMoviesWeekly();
    const generos = await movieGenresList();

    return (
        <main className='main'>
            {/* HOME HEADER  */}
            <HomeHeader moviesTrends={moviesTrends} genresMovies={generos} />

            {/* ANUNCIO */}
            <Publicity />

            {/* SLIDER MOVIE 1 */}
            <section className='px-6 md:px-10 lg:px-12 2xl:px-16 my-8 flex flex-col gap-12 lg:gap-14 xl:gap-16'>
                <SliderContainer
                    path='/trending/tv/week'
                    title='Lo más popular'
                />

                <SliderContainer
                    path='/movie/now_playing'
                    title='Del cine a tu casa'
                    subtitle='Culturas valiosas. Historias diversas. Energía vibrante.'
                />
            </section>

            {/* ANUNCIO 2*/}
            <Publicity2
                textLarge="¡Loki Temporada 2, solo en Disney+! Explora el multiverso y descubre detalles exclusivos."
                imgLarge='/publicidad/loki_s2.jpg'
                imgSmall='/publicidad/anuncio2.jpeg'
                titleSmall='¡Descubre el cine en casa con nosotros!'
                btnTextLarge='VER TODO'
                btnTextSmall='CÁTEGORIA'
            />

            <RevisaNuestroCatalogo/>
        </main>
    );
}
