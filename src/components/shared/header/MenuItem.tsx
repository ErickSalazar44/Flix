export default function MenuItem({ item }: { item: string }) {
    return (
        <span
            className={`cursor-pointer hover:text-white hover:opacity-100 transition-colors duration-300 text-sm`}
        >
            {item}
        </span>
    )
}
