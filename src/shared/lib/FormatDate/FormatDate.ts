export class FormatDate {
    public static formatDate(date: string, locales = 'ru') {
        const convertedDate = new Date(date)
        const dayOfWeek = new Intl.DateTimeFormat(locales, { weekday: 'short' }).format(
            convertedDate
        )
        const month = new Intl.DateTimeFormat(locales, { month: 'short' }).format(convertedDate)
        const day = convertedDate.getDate()
        const year = convertedDate.getFullYear()

        return `${day} ${month} ${year}, ${dayOfWeek}`
    }

    public static formatTime(date: string, locales = 'ru') {
        const convertedDate = new Date(date)

        const hours = new Intl.DateTimeFormat(locales, { hour: '2-digit' }).format(convertedDate)
        const minutes = new Intl.DateTimeFormat(locales, { minute: '2-digit' }).format(
            convertedDate
        )

        return `${hours}:${minutes}`
    }
}
