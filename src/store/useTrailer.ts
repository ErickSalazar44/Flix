// store.ts
import { create } from "zustand";

interface useTrailer {
    modalIsOpen: boolean;
    setModalIsOpen: (isOpen: boolean) => void;
    selectedVideoId: string | null;
    setSelectedVideoId: (videoId: string | null) => void;
    miniReproductor: boolean;
    setMiniReproductor: (active: boolean) => void

}

const useTrailer = create<useTrailer>((set) => ({
    modalIsOpen: false,
    setModalIsOpen: (isOpen) => set({ modalIsOpen: isOpen }),
    selectedVideoId: null,
    setSelectedVideoId: (videoId) => set({ selectedVideoId: videoId }),
    miniReproductor: false,
    setMiniReproductor: (active) => set({ miniReproductor: active })
}));

export default useTrailer