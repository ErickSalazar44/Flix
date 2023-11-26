import { Play } from "@/icons/Icons";
import type { GenreTv, Movies } from "@/types/types";
import { getGenreNamesByIds } from "@/utils/getGenreNamesByIds";

const InfoSection = ({
    movies,
    currentIndex,
    genresMovies,
}: {
    movies: Movies[] ;
    currentIndex: number;
    genresMovies: GenreTv;
}) => {

    const genreNamesByIds =  getGenreNamesByIds(
        genresMovies.genres,
        movies[currentIndex].genre_ids
    );

    return (
        <div className='relative px-6 md:px-10 lg:px-12 2xl:px-16 pb-10 z-10'>
            <div
                className={`flex flex-col gap-4 justify-end min-h-homeSpaceFondo`}
            >
                <h2
                    className={`text-white text-[1.875rem] font-medium lg:text-4xl`}
                >
                    {movies?.[currentIndex]?.title}
                </h2>

                <ul className='flex text-xs movieId:text-sm gap-4 text-white lg:text-sm lg:gap-6'>
                    {genreNamesByIds?.slice(0, 3).map((genre) => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>

                <button className='mt-4 w-[36px] h-[36px] lg:w-[45px] lg:h-[45px]'>
                    <Play />
                </button>
            </div>
        </div>
    );
};

export default InfoSection;
