export type TicketLocationType = {
    date: string
    town: string
}
export type TicketType = {
    departure: TicketLocationType
    arrival: TicketLocationType
    countTransfers: number
    price: string
    linkCompanyLogo?: string
}

export type TicketProps = {
    ticket: TicketType
}
