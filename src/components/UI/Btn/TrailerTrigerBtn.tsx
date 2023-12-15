'use client'
import useTrailer from "@/store/useTrailer"

const TrailerTrigerBtn = ({videoId, children}: {videoId : string, children: React.ReactNode}) => {
    const {setModalIsOpen, setSelectedVideoId} = useTrailer((state) => state)


    const handleTrailer = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        document.body.style.overflow = 'hidden';
        setSelectedVideoId(videoId)
        setModalIsOpen(true)
    }

    return (
        <button onClick={handleTrailer} >
            {children}
        </button>
    )
}

export default TrailerTrigerBtn