export default function ImagesGridLayout({
    children,
    component: Component = 'div',
}: {
    children: React.ReactNode
    component?: keyof JSX.IntrinsicElements | React.ComponentType<any>
}) {
    return (
        <section className='flex flex-col gap-10 md:grid md:gap-x-2 md:gap-y-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-y-9 lg:gap-x-4 xl:grid-cols-4 text-txtGray2'>
            {children}
        </section>
    )
}
