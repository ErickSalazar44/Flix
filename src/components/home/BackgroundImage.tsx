import { SeriesTV } from '@/types/types';
import { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

const BackgroundImage = (
    { movies, currentIndex }
        :
        {
            movies: SeriesTV[] | undefined,
            currentIndex: number
        }
) => {

    const [backgroundImage, setBackgroundImage] = useState("");
    const [showImage, setShowImage] = useState(false);


    const handleImageLoad = () => {
        setShowImage(true);
    };

    const { poster_path, backdrop_path } = movies?.[currentIndex] || {};

    const posterImageUrl = useMemo(
        () => `https://image.tmdb.org/t/p/w780${poster_path}`,
        [poster_path]
    );

    const backdropImageUrl = useMemo(
        () => `https://image.tmdb.org/t/p/original${backdrop_path}`,
        [backdrop_path]
    );

    const imageKey = useMemo(() => `${currentIndex}_${backgroundImage}`, [
        currentIndex,
        backgroundImage,
    ]);


    useEffect(() => {
        setShowImage(false);
        const handleResize = () => {
            const url =
                window.innerWidth >= 1024 ? backdropImageUrl : posterImageUrl;
            setBackgroundImage(url);
        };


        window.addEventListener("resize", handleResize);
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [backdropImageUrl, posterImageUrl]);

    return (
        <section
            className={`absolute flex flex-col pt-[80px] after:content-[''] after:absolute after:inset-0 after:z-[1] after:bg-gradient after:h-[85vh] h-[85vh] w-full bg-cover bg-no-repeat`}
        >
            <div className='w-full top-0 right-0 h-[85vh] absolute z-[1]' style={{ height: '100%' }}>
                {backgroundImage && movies?.[currentIndex] && (
                    <Image
                        key={imageKey}
                        src={backgroundImage}
                        alt={`poster ${movies?.[currentIndex].name}`}
                        quality={90}
                        fill
                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 50vw, 100vw"
                        className={clsx('transition-opacity duration-300', 
                        {
                            'opacity-0' : !showImage,
                            'opacity-100' : showImage,
                        })}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                        priority={true}
                        onLoad={handleImageLoad}
                    />

                )}
            </div>
        </section>
    )
}

export default BackgroundImage