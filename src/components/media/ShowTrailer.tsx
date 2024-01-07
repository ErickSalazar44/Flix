'use client'
import TrailerPlayer from './TrailerPlayer'
import ModalTrailer from '../UI/modal/ModalTrailer'
import useTrailer from '@/store/useTrailer'
import { useTransition, animated } from 'react-spring'

export default function ShowTrailer() {
    const { modalIsOpen, selectedVideoId } = useTrailer((state) => state)

    const transitions = useTransition(modalIsOpen, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 500 },
    })

    return (
        <>
            {transitions(
                (style, item) =>
                    item && (
                        <animated.div
                            style={{
                                opacity: style.opacity,
                            }}
                        >
                            <ModalTrailer>
                                <TrailerPlayer videoId={selectedVideoId} />
                            </ModalTrailer>
                        </animated.div>
                    )
            )}
        </>
    )
}
