export class FormatDate {
    public static formatDate(date: string) {
        const convertedDate = new Date(date)
        const dayOfWeek = new Intl.DateTimeFormat('ru-RU', { weekday: 'short' }).format(
            convertedDate
        )
        const month = new Intl.DateTimeFormat('ru-RU', { month: 'short' }).format(convertedDate)
        const day = convertedDate.getDate()
        const year = convertedDate.getFullYear()

        return `${day} ${month} ${year}, ${dayOfWeek}`
    }

    public static formatTime(date: string) {
        const convertedDate = new Date(date)

        const hours = new Intl.DateTimeFormat('ru-RU', { hour: '2-digit' }).format(convertedDate)
        const minutes = new Intl.DateTimeFormat('ru-RU', { minute: '2-digit' }).format(
            convertedDate
        )

        return `${hours}:${minutes}`
    }
}
