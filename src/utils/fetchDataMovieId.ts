export async function fetchDataMovieId(path: string,language: string = "es-ES") {

    try {
        const response = await fetch(`https://api.themoviedb.org/3${path}?language=${language}&append_to_response=videos`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${process.env.VITE_API_URL}`,
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
}
