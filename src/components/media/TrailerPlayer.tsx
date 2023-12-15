"use client";
import { useRef } from "react";
import ReactPlayer from "react-player";

// Define el componente con TypeScript
const TrailerPlayer = ({ videoId }: { videoId: string | null }) => {
    const playerRef = useRef(null);


    return (
        <section className={'aspect-video w-full overflow-hidden rounded-xl'}>
            <ReactPlayer
                ref={playerRef}
                url={`https://www.youtube.com/embed/${videoId}`}
                controls={true}
                width='100%'
                height='100%' //
                playing={true}
                onError={(e) =>
                    console.error("Error al reproducir el video:", e)
                }
            />
        </section>
    );
};

// Exporta el componente
export default TrailerPlayer;
