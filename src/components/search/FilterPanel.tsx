"use client";
import { categoriaPanel, genresPanel } from "@/lib/data";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import SelectDesign from "./SelectDesign";



export default function FilterPanel() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const type = pathname.split("/").at(-1);


    const [selectedGenero, setSelectedGenero] = useState("all");
    const [selectedOrganizadaPor, setSelectedOrganizadaPor] = useState("all");

    const createQueryString = (
        paramName: string,
        selectedValue: string,
        oppositeParamName: string
    ) => {
        const params = new URLSearchParams(searchParams);

        // Establecer el nuevo valor del parámetro actual
        params.set(paramName, selectedValue);

        // Eliminar el parámetro opuesto si existe
        if (params.has(oppositeParamName)) {
            params.delete(oppositeParamName);
        }

        router.push(pathname + "?" + params.toString());
    };


    const handleGeneroChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;

        setSelectedGenero(selectedValue);
        setSelectedOrganizadaPor("all"); // Restablecer el otro select
        createQueryString("genre", selectedValue, "filter");
    };

    const handleOrganizadaPorChange = (
        event: ChangeEvent<HTMLSelectElement>
    ) => {
        const selectedValue = event.target.value;

        setSelectedOrganizadaPor(selectedValue);
        setSelectedGenero("all"); // Restablecer el otro select
        createQueryString("filter", selectedValue, "genre");
    };

    const optionsGenre = type === "tv" ? genresPanel.tv.generos : genresPanel.movie.generos;
    const optionsCategoria = type === "tv" ? categoriaPanel.tv.organizarPor : categoriaPanel.movie.organizarPor;



        // Restablecer los select al montar el componente
        useEffect(() => {
            setSelectedGenero("all");
            setSelectedOrganizadaPor("all");
        }, [type]);

    return (
        <div className='flex gap-2 text-black'>
            {/* <select value={selectedGenero} onChange={handleGeneroChange}>
                <option value="">Todos los Generos</option>
                {optionsGenre.generos.map((genero) => (
                    <option key={genero.id} value={genero.id}>
                        {genero.name}
                    </option>
                ))}
            </select>

            <select value={selectedOrganizadaPor} onChange={handleOrganizadaPorChange}>
                {Object.entries(options.organizarPor).map(([key, value]) => (
                    <option key={key} value={key}>
                        {value}
                    </option>
                ))}
            </select> */}
            <SelectDesign title='Selecciona una categoria' options={optionsCategoria}/>
            <SelectDesign title='Selecciona un genero' options={optionsGenre}/>
        </div>
    );
}
