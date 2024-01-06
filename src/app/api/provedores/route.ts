import * as cheerio from 'cheerio';
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {

    const searchParams = request.nextUrl.searchParams
    const id = searchParams.get('id')
    const type = searchParams.get('type')
    const temporada = searchParams.get('temporada')
    const capitulo = searchParams.get('capitulo')

    const typeSelect = type === 'movie' ? `video/${id}` : `play/${id}/season/${temporada}/episode/${capitulo}`

    try {
        const urlBase = 'https://www.wizpelis.site/'
        const url = `${urlBase}/${typeSelect}`

        const response = await fetch(url)

        if (response.ok) {
            // Convierte la respuesta a texto
            const html = await response.text()

            // Carga la página HTML en Cheerio
            const $ = cheerio.load(html)

            // Extraer el array itemsSources del script
            const scriptContent = $('#__NEXT_DATA__').html();
            
            if (scriptContent) {
                const jsonData = JSON.parse(scriptContent);
                const itemsSources = jsonData.props.pageProps.itemsSources;
                return NextResponse.json(itemsSources);
            } else {
                console.error('El scriptContent es null.');
                return NextResponse.json({ error: 'ScriptContent es null' }, { status: 500 });
            }
        }

    }

    catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 })
    }
}

