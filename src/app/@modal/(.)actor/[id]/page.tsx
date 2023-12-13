import Frame from "@/components/UI/frame/Frame";
import Modal from "@/components/UI/modal/Modal";

export default function ActorModal({
    params,
}: {
    params: { id: string };
}) {
    const id = params;
    console.log(id)
    return (
        <Modal>
            <Frame/>
        </Modal>
    )
}