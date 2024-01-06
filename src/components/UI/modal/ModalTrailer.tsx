'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import useTrailer from '@/store/useTrailer'
import { animated } from 'react-spring'

export default function ModalTrailer({
    children,
}: {
    children: React.ReactNode
}) {
    const overlay = useRef(null)
    const wrapper = useRef(null)

    const { miniReproductor, setMiniReproductor, modalIsOpen } = useTrailer(
        (state) => state
    )

    const onDismiss = useCallback(() => {
        document.body.style.overflow = 'auto'
        return setMiniReproductor(true)
    }, [setMiniReproductor])

    const onClick: MouseEventHandler = useCallback(
        (e) => {
            if (e.target === overlay.current || e.target === wrapper.current) {
                if (onDismiss) onDismiss()
            }
        },
        [onDismiss, overlay, wrapper]
    )

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onDismiss()
        },

        [onDismiss]
    )

    useEffect(() => {
        document.addEventListener('keydown', onKeyDown)

        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])

    return (
        <div
            ref={overlay}
            className={`fixed ${
                miniReproductor
                    ? 'bg-transparent z-[100] w-[400px] bottom-0 right-0'
                    : ' bg-black/60 z-50 w-full h-screen left-0 top-0'
            }`}
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className={`absolute transition-all duration-300 ${
                    miniReproductor
                        ? 'bottom-0 right-0'
                        : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
                }`}
            >
                <section
                    className={`aspect-video ${
                        miniReproductor
                            ? 'w-[300px] sm:w-[400px] lg:w-[500px]'
                            : 'w-screen sm:w-[70vw]'
                    }`}
                >
                    <animated.div
                        className={'transition-all duration-500'}
                        style={{
                            transform: modalIsOpen
                                ? 'translateY(0)'
                                : 'translateY(500px)',
                        }}
                    >
                        {children}
                    </animated.div>
                </section>
            </div>
        </div>
    )
}
