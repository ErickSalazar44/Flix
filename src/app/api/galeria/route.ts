export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/images?include_image_language=en&language=es-ES`, {
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${process.env.VITE_API_URL}`,
        },
        next: {
            revalidate: 60
        }
    });

    const galeria = await response.json()

    return Response.json(galeria)
}