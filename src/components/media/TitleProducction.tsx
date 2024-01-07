export default function TitleProducction({
    children,
    className,
}: {
    children: React.ReactNode
    className?: string
}) {
    return (
        <h4
            className={`mb-2 font-semibold text-txtGray1  lg:text-2xl ${className}`}
        >
            {children}
        </h4>
    )
}
