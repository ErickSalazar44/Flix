"use cliente";

import { ArrowRight } from "../icons/Icons";
import { useState } from "react";
import { OrganizarPorItem } from "../../types/types";

const SelectDesign = ({ options, title }: { options: OrganizarPorItem[], title: string }) => {
    const [titleInicial, setTitleInicial] = useState(title)
    const [activeSelect, setActiveSelect] = useState(false);

    const handleActiveSelect = () => {
        setActiveSelect(!activeSelect);
    };

    return (
        <div className='relative w-52 text-xs font-semibold text-[#999]'>
            <button
                onClick={handleActiveSelect}
                className='w-full flex items-center justify-between bg-[#111] px-4 py-3 rounded-lg cursor-pointer'
            >
                <span>{title}</span>
                <ArrowRight clasName='rotate-90 w-4 h-4' />
            </button>

            {activeSelect && (
                <ul 
                    onMouseLeave={() => setActiveSelect(false)}
                    className='bg-[#111] rounded-lg mt-3 absolute w-full z-50 '>
                    {options.map(({id, name}) => (
                        <li
                            key={id}
                            className='px-4 py-3 flex cursor-pointer  rounded-lg items-center hover:bg-zinc-900 transition-colors'
                        >
                            <span>{name}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectDesign;
