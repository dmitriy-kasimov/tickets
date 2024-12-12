export type TicketLocationType = {
    date: string
    town: string
}
export type TicketType = {
    id: string
    departure: TicketLocationType
    arrival: TicketLocationType
    countTransfers: number
    price: number
    linkCompanyLogo?: string
}

export type TicketProps = {
    ticket: TicketType
}
