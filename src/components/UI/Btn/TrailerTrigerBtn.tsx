'use client'
import useTrailer from '@/store/useTrailer'

export default function TrailerTrigerBtn({
    videos,
    children,
}: {
    videos: any
    children: React.ReactNode
}) {
    const {
        setModalIsOpen,
        setSelectedVideoId,
        miniReproductor,
        selectedVideoId,
        setMiniReproductor,
    } = useTrailer((state) => state)
    const sinVideo = videos.results.length === 0
    const videoId = videos.results[0]?.key

    const handleTrailer = () => {
        // si el video no esta disponible No hacer nada
        if (sinVideo) return

        // si el video se esta reproduciendo solo extender el Modal
        if (selectedVideoId === videoId) {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            document.body.style.overflow = 'hidden'
            setMiniReproductor(false)
        }

        // si el reproductor esta en mini solo cambiar de video
        if (miniReproductor) {
            setSelectedVideoId(videoId)
            return setModalIsOpen(true)
        }

        // Abrir modal y reproducir el nuevo video
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.body.style.overflow = 'hidden'
        setSelectedVideoId(videoId)
        setModalIsOpen(true)
    }

    return (
        <button
            onClick={handleTrailer}
            disabled={sinVideo}
            aria-label='Desplegar Trailer'
        >
            {!sinVideo && children}
        </button>
    )
}
