import { Play } from "@/icons/Icons";
import type { GenreTv, MoviesAndSeries } from "@/types/types";
import { getGenreNamesByIds } from "@/utils/getGenreNamesByIds";
import Link from "next/link";
import EspaciadoLayout from "../layout/EspaciadoLayout";

const InfoSection = ({
    movies,
    currentIndex,
    genresMovies,
}: {
    movies: MoviesAndSeries[];
    currentIndex: number;
    genresMovies: GenreTv;
}) => {
    const genreNamesByIds = getGenreNamesByIds(
        genresMovies.genres,
        movies[currentIndex]?.genre_ids
    );

    return (
        <EspaciadoLayout className='relative pb-10 z-10 transition-all'>
            <div className={`flex flex-col gap-4 justify-end sm:max-w-lg `}>
                <div className='animate-fadeInUp flex flex-col justify-end gap-4 min-h-[100px]'>
                    <h2
                        className={`text-white line-clamp-2 text-xl mv:text-2xl md:text-[1.9rem] font-medium lg:text-4xlb uppercase`}
                    >
                        {movies?.[currentIndex]?.title}
                    </h2>

                    <ul className='flex text-xs gap-4 text-white lg:text-sm lg:gap-6'>
                        {genreNamesByIds?.slice(0, 3).map((genre) => (
                            <li key={genre}>{genre}</li>
                        ))}
                    </ul>
                </div>

                <Link
                    aria-label={`Ver trailer de ${movies?.[currentIndex]?.title}`}
                    href={`/media/${movies?.[currentIndex].id}-movie`}
                    className='sm:mt-4 w-[36px] h-[36px] lg:w-[45px] lg:h-[45px]'
                >
                    <Play />
                </Link>
            </div>
        </EspaciadoLayout>
    );
};

export default InfoSection;
