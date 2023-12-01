import { Movie } from "@/types/types";
import { Time } from "../icons/Icons";
import GetStartRating from "./getStartRating";

const Header = ({ data }: { data: Movie }) => {
    const releaseDate = data.release_date;
    const parsedDate = new Date(releaseDate);

    const monthNames = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    const releaseMonth = monthNames[parsedDate.getMonth()];
    const releaseYear = parsedDate.getFullYear();
    const duracionEnSegundos = data.runtime;

    return (
        <header>
            <div className="mb-4 flex justify-between">
                <h1 className='font-bold text-2xl line-clamp-1'>
                    {data.title}
                </h1>
                <GetStartRating average={data.vote_average}/>
            </div>
            <div className='text-[#b3b3b3] flex justify-between items-center mb-4'>
                <ul className='text-xs flex gap-2  '>
                    {data.genres.slice(0, 2).map((genre) => (
                        <li key={genre.id}>{genre.name}</li>
                    ))}
                </ul>
                <div className='text-xs flex gap-2'>
                    <div className='flex gap-1'>
                        <Time />
                        <p>{duracionEnSegundos}</p>
                    </div>
                    <p>
                        {releaseMonth} {releaseYear}
                    </p>
                </div>
            </div>
            <div className='border-t border-t-[#616161]'></div>
        </header>
    );
};

export default Header;
