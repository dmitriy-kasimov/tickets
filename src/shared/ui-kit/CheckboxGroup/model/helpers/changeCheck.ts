export const changeCheck = (settings: boolean[], index: number) => {
    const copy = [...settings]
    copy[index] = !copy[index]
    return [...copy]
}
