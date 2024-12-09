export const changeAllChecks = (settings: boolean[], mode: boolean) => {
    return new Array(settings.length).fill(mode)
}
