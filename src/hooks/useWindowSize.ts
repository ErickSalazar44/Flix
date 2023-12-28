// useWindowSize.ts
import { useState, useEffect } from 'react';

interface WindowSize {
    width: number;
    height: number;
}

const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: globalThis.innerWidth,
        height: globalThis.innerHeight,
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: globalThis.innerWidth,
                height: globalThis.innerHeight,
            });
        };

        globalThis.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            globalThis.removeEventListener('resize', handleResize);
        };
    }, []);

    return windowSize;
};

export default useWindowSize;
