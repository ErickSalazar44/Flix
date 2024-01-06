'use server'
export async function fetchDataNoStore(
    path: string,
    query: string = 'language=es-ES'
) {
    try {
        const requestOptions: RequestInit = {
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${process.env.VITE_API_URL}`,
            },
            cache: 'no-store',
        }
        const response = await fetch(
            `https://api.themoviedb.org/3${path}?${query}`,
            requestOptions
        )

        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}
