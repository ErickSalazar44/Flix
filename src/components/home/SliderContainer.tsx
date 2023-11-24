import { ArrowLeft, ArrowRight } from "@/icons/Icons"
import { useRef } from "react"
// import Slider from "../UI/Slider"

const SliderContainer = ({ children }: { children: React.ReactNode }) => {

    const nextBtn = useRef(null)
    const prevBtn = useRef(null)




    return (
        <section>
            <header>
                {children}
            </header>
            <div className='relative'>
                {/* <Slider movies={movies} isMovie={isMovie} nextEl={nextBtn} prevEl={prevBtn}/> */}
                {/* <SliderMovie movies={movies} isMovie={isMovie} nextEl={nextEl } prevEl={prevEl}/> */}
                {/* Botón Controller */}
                <div ref={nextBtn} className={` swiper-button-next absolute top-[60%] -right-8 transform -translate-y-1/2 w-8  text-white opacity-80 after:content-none`}>
                    <ArrowRight />
                </div>
                <div ref={prevBtn} className={`swiper-button-prev absolute top-[60%] -left-8 transform -translate-y-1/2 w-8 text-white opacity-80 after:content-none`}>
                    <ArrowLeft />
                </div>
            </div>
        </section>
    )
}

export default SliderContainer