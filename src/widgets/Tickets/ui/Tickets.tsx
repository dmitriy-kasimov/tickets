import { FC, useEffect, useState } from 'react'
import { TicketsFeedFallback } from '@/widgets/Tickets/ui/TicketsFeedFallback.tsx'
import { useSearchParams } from 'react-router-dom'
import { getTickets } from '@/shared/api/getTickets.ts'
import { CurrencyType } from '@/entities/CurrencySelector'
import { Tickets as TicketsFeed } from '@/features/Tickets'
import { TicketType } from '@/entities/Ticket'
import { Text } from '@/shared/ui-kit/Text'

export const Tickets: FC = () => {
    const [URLSearchParams] = useSearchParams()
    const currency: CurrencyType = URLSearchParams.get('currency') as CurrencyType
    const transfers = URLSearchParams.get('transfers') || '0,0,0,0'

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [result, setResult] = useState<TicketType[]>([])
    const [error, setError] = useState<string>('')

    useEffect(() => {
        setIsLoading(true)
        getTickets(currency, transfers)
            .then(res => {
                setError('')
                setResult(res.data)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => setIsLoading(false))
    }, [currency, transfers])

    if (isLoading) return <TicketsFeedFallback />
    if (error) return <Text>{error}</Text>
    if (!result.length) return <Text>Не удалось найти билетов по указаннм параметрам</Text>
    return <TicketsFeed tickets={result} />
}
