'use client'

import MoviesProvider from "@/context/MoviesProvider"

export function Providers({ children }: { children: React.ReactNode }) {

    return (

        <MoviesProvider>
            {children}
        </MoviesProvider>

    )
}