import Image from 'next/image';
import Button from '../UI/Button';

const AnuncioSection = () => {
    return (
        <section className='max-w-[1400px] ml-auto mr-auto px-6 md:px-10 lg:px-12 2xl:px-16 mt-14 lg:mt-20 text-white sm:text-center md:grid md:grid-cols-2 md:text-left md:gap-8 md:items-center xl:gap-20'>
            <div className='mb-4 lg:mb-0'>
                <h4 className='text-lg lg:text-xl xl:text-3xl xl:mb-2'>
                    Episodios Gratuitos
                </h4>
                <p className='opacity-70 text-xs md:mb-6 lg:text-base lg:mb-8'>
                    ¡Descubre la emoción en los estrenos de
                    películas y series icónicas!
                </p>
                <div className='hidden md:block'>
                    <Button text='VER AHORA'/>
                </div>
            </div>
            <div className='w-full relative sm:mx-auto sm:max-w-lg md:mx-0 md:max-w-sm lg:max-w-xl xl:max-w-3xl '>
                <picture className='block overflow-hidden rounded-sm'>
                    <Image 
                        src={'/publicidad/anuncio1.jpeg'}
                        alt='Banner Publicitario 1'
                        width={768}
                        height={433}
                        className='hover:scale-105 transition-transform duration-300'
                    />
                </picture>
            </div>
        </section>
    )
}

export default AnuncioSection