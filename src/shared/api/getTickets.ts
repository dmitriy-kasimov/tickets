import { CurrencyType } from '@/entities/CurrencySelector'
import { IResponse } from './IResponse.ts'
import { db } from '@/shared/api/db.ts'
import { TicketType } from '@/entities/Ticket'

export const getTickets = async (
    currency: CurrencyType,
    transfers: string
): Promise<IResponse<TicketType[]>> => {
    return new Promise((resolve, reject) => {
        const random = Math.random()
        if (random < 0.1) {
            setTimeout(() => {
                reject('Ошибка на сервере')
            }, 1000)
        } else {
            const mapped = db.map<TicketType>(ticket => ({
                id: ticket.id,
                departure: ticket.departure,
                arrival: ticket.arrival,
                countTransfers: ticket.countTransfers,
                linkCompanyLogo: ticket.linkCompanyLogo,
                price: ticket[currency]
            }))
            const tr = transfers.split(',').map(item => +item)
            const count_transfers: number[] = []
            for (let i = 0; i < tr.length; i++) {
                if (tr[i] === 1) count_transfers.push(i)
            }

            const result = count_transfers.length
                ? mapped.filter(ticket => count_transfers.includes(ticket.countTransfers))
                : mapped

            setTimeout(() => {
                resolve({ data: result, error: '' })
            }, 1000)
        }
    })
}
