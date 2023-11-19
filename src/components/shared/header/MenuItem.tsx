
const MenuItem = ({item}: {item: string}) => {
    return (
        <span
            className={`cursor-pointer hover:text-white hover:opacity-100 transition-colors duration-300`}
        >
            {item}
        </span>
    )
}

export default MenuItem