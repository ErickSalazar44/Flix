import { Movies } from "@/types/types";
import { useState, useMemo, useEffect } from "react";
import Image from "next/image";

const BackgroundImage = ({
    movies,
    currentIndex,
}: {
    movies: Movies[] | undefined;
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

    return (
        <section
            className={`absolute flex flex-col pt-[80px] after:content-[''] after:absolute after:inset-0 after:bg-gradiantLeft after:h-bgHome h-bgHome w-full bg-cover bg-no-repeat before:content-[''] before:absolute before:inset-0 before:z-[1] before:bg-gradiantBotton before:h-bgHome`}
        >
            <div className={"w-full top-0 right-0 h-bgHome absolute "}>
                {backgroundImage && movies?.[currentIndex] && (
                    <Image
                        src={backgroundImage}
                        alt={`poster ${movies?.[currentIndex].original_title}`}
                        fill
                        sizes='80vw'
                        className={"transition-opacity saturate-[1.2] duration-300 main"}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                        priority={true}
                    />
                )}
            </div>
        </section>
    );
};

export default BackgroundImage;
