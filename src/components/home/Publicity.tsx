import Image from "next/image";
import "../UI/scrollAnimate.css";

const Publicity = () => {
    return (
        <div>
            <div className='px-6 md:px-10 lg:px-12 2xl:px-16 relative mx-auto pt-24 md:pt-48 opacity-50'>
                <h2 className='letterScroll font-medium text-4xl '>
                    Explora a fondo.
                </h2>
            </div>
            <div className='hidden md:block px-12 md:px-16 lg:px-20 2xl:px-0 letterScroll2 relative mx-auto pt-20 max-w-[1400px] opacity-90'>
            <p className=' text-5xl lg:text-6xl font-semibold'>Películas.</p>
                    <p className='hidden md:inline-block text-5xl lg:text-6xl font-semibold'>
                        Forjadas en la pantalla.
                    </p>
            </div>
            <div className='md:px-16 lg:px-20 2xl:px-0 h-full max-w-[1770px] mx-auto'>
                <div className='mx-auto mt-20 mb-20 md:mb-40 max-w-[1400px]'>
                    <div className='max-h-[88vh]  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-10'>

                        <div className='hidden md:block md:col-span-2 md:row-span-1'>
                            <figure className='imgScroll h-full cursor-pointer'>
                                <img
                                    className='hover:opacity-100 hover:saturate-[1.2] transition-opacity duration-500 opacity-40 h-full w-full object-center '
                                    src='https://static.crunchyroll.com/fms/desktop_large/1350x450/53445277-d4da-47dc-ae36-ca8233b1dd07.png'
                                    alt=''
                                />
                            </figure>
                        </div>
                        <div className='hidden lg:block col-span-1 row-span-2'>
                            <figure className='imgScroll h-full cursor-pointer'>
                                <img
                                    className='hover:opacity-100 hover:saturate-[1.2] transition-opacity duration-500 opacity-40 h-full w-full object-cover '
                                    src='https://www.findelahistoria.com/web/wp-content/uploads/2016/05/stormtrooper.jpg'
                                    alt=''
                                />
                            </figure>
                        </div>
                        <div className='imgScroll col-span-1 lg:row-span-1'>
                            <figure className=' h-full cursor-pointer '>
                                <img
                                    className='hover:opacity-100 hover:saturate-[1.2] transition-opacity duration-500 sm:opacity-40 h-full w-full object-left object-cover  '
                                    src='https://art-gallery-latam.api.hbo.com/images/default-6172de1716cb160035b2f9f4/tileburnedin?v=8a7250a4a47d4c27788c431477566da9&size=600x338&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&language=es-419'
                                    alt=''
                                />
                            </figure>
                        </div>
                        <div className='col-span-[3/4] row-span-[4/1]'>
                            <figure className='imgScroll h-full cursor-pointer overflow-hidden'>
                                <img
                                    className='hover:opacity-100 hover:saturate-[1.2] transition-opacity duration-500 sm:opacity-40 h-full w-full object-left object-cover  '
                                    src='https://art-gallery-latam.api.hbo.com/images/default-6398a0fbd223b3002bfe39fb$$$42d412c07fae1c43c4419075597b0e57$$$latam/tileburnedin?v=b5f442b67d3b9d3843547e64110a7c1c&size=600x338&compression=medium&protection=false&scaleDownToFit=false&productCode=hboMax&language=es-419'
                                    alt=''
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publicity;
