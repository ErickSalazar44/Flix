import Image from 'next/image'


export default function Frame() {
    return (
        <>
            <Image
                alt=""
                src={'/publicidad/harryPotter.jpeg'}
                height={600}
                width={600}
                className="w-full object-cover aspect-square col-span-2"
            />

            <div className="bg-white p-4 px-6">
                <h3>La galaeria Funciono</h3>
                <p>VAMOS CARAJOOO</p>
            </div>
        </>
    )
}
