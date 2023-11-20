import { useState } from "react"
import { type FetchResult } from "@/types/types"


const useFetch = <T>(): FetchResult<T> => {
    const [infoApi, setInfoApi] = useState<null | T>(null)

    // Optener datos del servidor
    const getApi = async (params: string) => {

        try {
            const res = await fetch(params);
            // Manejar la respuesta
            if (res.ok) {
                const { data } = await res.json();
                setInfoApi(data);
            } else {
                console.error('Error en la respuesta del servidor:', res.status);
            }
        } catch (error) {
            console.error('Error fetching series home:', error);
        }
    }


    return [infoApi, getApi]

}

export default useFetch