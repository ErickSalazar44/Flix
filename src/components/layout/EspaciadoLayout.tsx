export default function EspaciadoLayout({
    children,
    className,
    component: Component = 'div',
}: {
    children: React.ReactNode
    className: string
    component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}) {
    return (
        <Component className={`px-5 md:px-8 lg:px-12 2xl:px-16 ${className}`}>
            {children}
        </Component>
    )
}
