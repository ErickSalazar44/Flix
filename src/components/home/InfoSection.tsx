import { Play } from "@/icons/Icons";
import type { GenreTv, MoviesAndSeries } from "@/types/types";
import { getGenreNamesByIds } from "@/utils/getGenreNamesByIds";

const InfoSection = ({
    movies,
    currentIndex,
    genresMovies,
}: {
    movies: MoviesAndSeries[] ;
    currentIndex: number;
    genresMovies: GenreTv;
}) => {

    const genreNamesByIds =  getGenreNamesByIds(
        genresMovies.genres,
        movies[currentIndex]?.genre_ids
    );

    return (
        <div className='relative px-6 md:px-10 lg:px-12 2xl:px-16 pb-10 z-10 transition-all'>
            <div
                className={`flex flex-col gap-4 justify-end sm:max-w-lg min-h-homeSpaceFondo`}
            >
                <div className="flex flex-col gap-4 [view-transition-name:_title-home]">
                    <h2
                        className={`text-white line-clamp-2 text-2xl mv:text-3xl md:text-[1.9rem] font-medium lg:text-4xlb uppercase`}
                    >
                        {movies?.[currentIndex]?.title}
                    </h2>

                    <ul className='flex text-xs gap-4 text-white lg:text-sm lg:gap-6'>
                        {genreNamesByIds?.slice(0, 3).map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                </div>

                <button className='mt-4 w-[36px] h-[36px] lg:w-[45px] lg:h-[45px]'>
                    <Play />
                </button>
            </div>
        </div>
    );
};

export default InfoSection;
