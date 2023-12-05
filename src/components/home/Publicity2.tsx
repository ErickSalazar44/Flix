import Link from "next/link";
import Button from "../UI/Button";
import Image from "next/image";
import "../UI/btn.css";
import "../UI/scrollAnimate.css";

interface PublicityProps {
    titleSmall: string;
    imgLarge: string;
    imgSmall: string;
    textLarge: string;
    btnTextLarge: string;
    btnTextSmall: string;
}

const Publicity2 = ({
    titleSmall,
    imgLarge,
    imgSmall,
    textLarge,
    btnTextLarge,
    btnTextSmall,
}: PublicityProps) => {
    return (
        <>
            <div className='hidden md:block letterScroll2 my-40 relative h-[560px] bg-[#050505] [clip-path:_polygon(0_0,0_100%,100%_92%,100%_0)]'>
                <div className='[border-right:160px_solid_transparent] w-0 absolute z-50 top-0 left-[44.99%] h-[0px] [border-bottom:560px_solid_#050505]'></div>
                <div className='absolute z-20 left-[44.99%] w-[55%] h-full'>
                    <figure className='h-full w-full  object-cover'>
                        <Image
                            src={imgLarge}
                            alt='Disfruta de la serie de loki'
                            width={1124}
                            height={560}
                            quality={100}
                            className="object-cover aspect-video h-full"
                        />
                    </figure>
                </div>
                <div className='h-[560px] relative z-50 mx-auto w-full max-w-6xl flex flex-col justify-center'>
                    <div className='w-full lg:max-w-lg pl-12 lg:pb-2 lg:pl-14 max-w-sm flex flex-col gap-8 lg:gap-10'>
                        <figure>
                            <Image
                                    src={'/publicidad/loki-logo.png'}
                                    alt="Loki temporada 2 logo"
                                    width={195}
                                    height={92}
                                    className="lg:w-56"                         
                            />
                        </figure>
                        <div className='lg:font-semibold lg:text-xl'>
                            {textLarge}
                        </div>
                        <div className='relative showAnimate flex items-center overflow-hidden'>
                            <Link href='#' className='btn'>
                                <span className='btn-text text-sm'>
                                    {btnTextLarge}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className=' md:hidden my-24 sm:my-16 relative after:bg-gradiantLeft after:absolute after:w-full after:h-full after:top-0 after:z-10'>
                <div className=' relative h-72 md:h-[500px]'>
                    <Image
                        src={imgSmall}
                        alt='Disfruta'
                        fill
                        sizes='100vw'
                        quality={100}
                        className=' w-full h-full object-cover sm:object-contain opacity-50 sm:opacity-60'
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                        }}
                    />
                </div>
                <div className='absolute z-20 bottom-4 flex items-start left-7 flex-col justify-normal w-auto gap-5 text-white'>
                    <p className='font-semibold'>{titleSmall}</p>
                    <Button text={btnTextSmall} />
                </div>
            </section>
        </>
    );
};

export default Publicity2;

/*


*/
