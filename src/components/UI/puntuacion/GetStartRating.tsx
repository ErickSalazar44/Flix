const MAX_RATING = 5

const calculateRoundedRating = (average: number, maxRating: number) => {
    const starRating = (average / 10) * maxRating
    return Math.round(starRating * 2) / 2
}

const renderStars = (maxRating: number, roundedRating: number) => {
    return (
        <ul className='flex'>
            {[...Array(maxRating)].map((_, index) => (
                <li key={index} className={'text-yellow-600 text-2xl'}>
                    {index + 1 <= roundedRating ? '★' : '☆'}
                </li>
            ))}
        </ul>
    )
}

const GetStartRating = ({ average }: { average: number }) => {
    const roundedRating = calculateRoundedRating(average, MAX_RATING)

    return (
        <div className='flex items-center gap-2'>
            {renderStars(MAX_RATING, roundedRating)}
            <p className='font-bold'>{average.toFixed(1)}</p>
        </div>
    )
}

export default GetStartRating
