import { Movie } from "@/types/types";
import { Time } from "../icons/Icons";

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
            <h1 className='font-bold text-2xl line-clamp-1 mb-4'>
                {data.title}
            </h1>
            <div className='text-[#909090] flex justify-between items-center mb-4'>
                <ul className='text-xs flex gap-2  '>
                    {data.genres.slice(0, 2).map((genre) => (
                        <li>{genre.name}</li>
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
