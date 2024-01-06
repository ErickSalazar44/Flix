import { fetchDataNoStore } from "@/utils/fetchDataNoStore"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')
    const path = `/movie/${id}/images?include_image_language=en&language=es-MX`
    const data = await fetchDataNoStore(path, '')
    return NextResponse.json(data)
}