import Frame from '@/components/UI/frame/Frame'

export default function ActorPage({ params }: { params: { id: string } }) {
    const path = params

    return (
        <div className='container mx-auto my-10'>
            <div className='mx-auto border border-gray-700 max-w-[384px]'>
                <Frame path={path} />
            </div>
        </div>
    )
}
