const TitleProducction = ({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) => {
    return (
        <h4
            className={`mb-2 font-semibold text-txtWhite2  lg:text-2xl ${className}`}
        >
            {children}
        </h4>
    )
}

export default TitleProducction
