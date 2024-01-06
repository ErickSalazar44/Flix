'use client'
import { useCallback, useRef, useEffect, MouseEventHandler } from 'react'
import { useRouter } from 'next/navigation'

export default function Modal({ children }: { children: React.ReactNode }) {
    const overlay = useRef(null)
    const wrapper = useRef(null)
    const router = useRouter()

    const onDismiss = useCallback(() => {
        router.back()
        document.body.style.overflow = 'auto'
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
        document.body.style.overflow = 'hidden'

        return () => document.removeEventListener('keydown', onKeyDown)
    }, [onKeyDown])

    return (
        <div
            ref={overlay}
            className={`fixed bg-black/60 z-[200] w-full h-screen left-0 top-0`}
            onClick={onClick}
        >
            <div
                ref={wrapper}
                className={`absolute transition-all duration-300 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2`}
            >
                {children}
            </div>
        </div>
    )
}
