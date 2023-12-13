import Frame from "@/components/UI/frame/Frame"

export default function ActorPage({params}: {params: {id: string}}) {

    console.log(params)

    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto border border-gray-700">
                <Frame/>
            </div>
        </div>
    )
}