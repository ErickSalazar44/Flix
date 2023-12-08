export const startViewTransition = (func: () => void): void => {
    //@ts-ignore
    if (!document.startViewTransition) {
        return func()
    }
    //@ts-ignore
    return document.startViewTransition(() => func())
}
