'use client'
import useTrailer from '@/store/useTrailer'
import { useRef } from 'react'
import ReactPlayer from 'react-player'
import { Extender, CloseIcon } from '../icons/Icons'

export default function TrailerPlayer({ videoId }: { videoId: string | null }) {
    const playerRef = useRef(null)
    const { miniReproductor, setMiniReproductor, setModalIsOpen } = useTrailer(
        (state) => state
    )

    const ReproductorPantallaGrande = () => {
        document.body.style.overflow = 'hidden'
        setMiniReproductor(false)
    }

    const CerrarReproductor = () => {
        setModalIsOpen(false)
    }

    return (
        <section
            className={'aspect-video w-full overflow-hidden rounded-2xl group'}
        >
            <div
                className={`absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center ${
                    !miniReproductor && 'hidden'
                }`}
            >
                <button
                    onClick={ReproductorPantallaGrande}
                    className='w-8 h-8 opacity-0 group-hover:opacity-100'
                    aria-label='Mostrar trailer'
                >
                    <Extender />
                </button>
            </div>
            <div
                className={`absolute top-4 right-6  bg-black rounded-full ${
                    !miniReproductor && 'hidden'
                }`}
            >
                <button
                    onClick={CerrarReproductor}
                    className='flex justify-center items-center'
                    aria-label='Cerrar Reproductor'
                >
                    <CloseIcon />
                </button>
            </div>
            <ReactPlayer
                ref={playerRef}
                url={`https://www.youtube.com/embed/${videoId}`}
                controls={true}
                width='100%'
                height='100%'
                playing={true}
                onError={(e) =>
                    console.error('Error al reproducir el video:', e)
                }
            />
        </section>
    )
}
