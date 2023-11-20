import { NextResponse } from "next/server";
import { fetchData } from "@/utils/fetchData";

export async function GET(request: Request) {
    try {
        // Modificar dependiendo de lo que quieras mostrar en home
        const path = "/genre/tv/list"; 
        const data = await fetchData(path);
        return NextResponse.json({ data });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}