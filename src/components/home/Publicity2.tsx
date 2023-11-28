import Button from "../UI/Button";
import Image from 'next/image';

const Publicity2 = ({ title }: { title: string }) => {

    return (
        <section
            className='my-14 sm:my-16 xl:my-20 2xl:my-24  relative after:bg-gradiantLeft after:absolute after:w-full after:h-full after:top-0 after:z-10'
        >
            <div className="relative h-72 md:h-[500px] 2xl:h-[680px]"> 

                <Image
                    src={'/publicidad/anuncio2.jpeg'}
                    alt="Disfruta"
                    fill
                    sizes='100vw'
                    quality={100}
                    className=" w-full object-cover sm:object-contain opacity-50 sm:opacity-60 md:opacity-100"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                    }}
                />
            </div>

            <div className='absolute z-20 bottom-4 flex items-start left-7 md:left-12 md:bottom-20 xl:left-16 2xl:bottom-52 flex-col justify-normal w-auto gap-5 text-white'>
                <p className="font-semibold md:text-2xl lg:mb-2 lg:max-w-lg xl:max-w-2xl xl:text-3xl">{title}</p>
                <Button text='CÁTEGORIA' />
            </div>
        </section>
    );
};

export default Publicity2;

