import { Movie } from "@/types/types"
import Image from "next/image"

const BgImage = ({data}:{data: Movie}) => {
  return (
    <div className='fixed -z-10 top-0 h-[60vh] w-full before:bg-gradiantBotton before:absolute before:w-full before:h-full before:top-0 before:content-[""] before:z-20'>
    <Image
        src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
        alt={`Poster ${data.title}`}
        fill
        sizes='100vw'
        className='object-top aspect-[9/14] '
        style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
        }}
        priority={true}
    />
</div>
  )
}

export default BgImage