export async function fetchData(path: string, language: string = "es-ES") {

    try {
        const response = await fetch(`https://api.themoviedb.org/3${path}?language=${language}`, {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${process.env.VITE_API_URL}`,
            },
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
