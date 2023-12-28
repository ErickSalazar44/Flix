import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { MoviesAndSeries } from "@/types/types";
import { useSpring, animated } from 'react-spring';

const BackgroundImage = ({
    movies,
    currentIndex,
}: {
    movies: MoviesAndSeries[] | undefined;
    currentIndex: number;
}) => {
    const [backgroundImage, setBackgroundImage] = useState("");


    const { poster_path, backdrop_path } = movies?.[currentIndex] || {};

    const posterImageUrl = useMemo(
        () => `https://image.tmdb.org/t/p/w780${poster_path}`,
        [poster_path]
    );

    const backdropImageUrl = useMemo(
        () => `https://image.tmdb.org/t/p/original${backdrop_path}`,
        [backdrop_path]
    );

    useEffect(() => {
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

    const fadeAnimation = useSpring({
        opacity: 1, // Opacidad final
        from: { opacity: 0 }, // Opacidad inicial
        reset: true, // Resetea la animación cuando cambia el currentIndex
    });

    return (
        <section
            className={`absolute flex after:content-[''] after:absolute after:inset-0 after:bg-gradiantLeft after:h-screen h-screen w-full before:content-[''] before:absolute before:inset-0 before:z-[1] before:bg-gradiantBotton before:h-screen`}
        >
            <animated.div 
                style={fadeAnimation}
                className={"w-full top-0 right-0 h-screen absolute after:absolute after:inset-0 after:bg-gradiantTop2 after:h-screen"}>
                {backgroundImage && movies?.[currentIndex] && (
                    <Image
                        src={backgroundImage}
                        alt={`poster ${movies?.[currentIndex].original_title}`}
                        fill
                        sizes='80vw'
                        className={"saturate-[1.2] scrollMove object-top"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        priority={true}
                    />
                )}
            </animated.div>
        </section>
    );
};

export default BackgroundImage;
