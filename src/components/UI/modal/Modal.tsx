'use client'
import { useCallback, useRef, useEffect, MouseEventHandler, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: React.ReactNode }) {
    const overlay = useRef(null)
    const wrapper = useRef(null)
    const router = useRouter()
    const [miniReproductor, setMiniReproductor] = useState(false)



    const onDismiss = useCallback(() => {
        // if (setModalIsOpen) {
            document.body.style.overflow = "auto";
            return setMiniReproductor(true)
        // }
        // router.back()
        // document.body.style.overflow = "auto";
    }, [router])

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
            className={`fixed ${miniReproductor ? 'bg-transparent z-[100] w-[400px] bottom-6 right-6' : ' bg-black/60 z-50 w-full h-screen left-0 top-0'}`}
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className={`absolute transition-all duration-300 ${miniReproductor ? 'bottom-6 right-6' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}`}
            >
                <section className={` aspect-video ${miniReproductor ? 'w-[400px]' : 'w-screen sm:w-[70vw]'}`}>
                    {children}
                </section>


            </div>
        </div>
    )
}
