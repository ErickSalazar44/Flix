import { Media } from '@/types/types'

const GetstartRatingUI2 = ({ data }: { data: Media }) => (
    <div className='flex items-start gap-2'>
        <span className='text-2xl'>★</span>
        <div className='flex flex-col'>
            <div className='text-2xl'>
                <span>{data.vote_average.toFixed(1)} </span>
                <span className='text-sm'>
                    /<span> 10</span>
                </span>
            </div>
            <span className='font-normal'>
                {data.popularity} Calificaciones
            </span>
        </div>
    </div>
)

export default GetstartRatingUI2
