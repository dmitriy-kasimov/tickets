import { FC } from 'react'
import { TicketsProps } from '@/features/Tickets/model/types/TicketsProps.ts'
import { Ticket } from '@/entities/Ticket/ui/Ticket.tsx'
import { VStack } from '@/shared/ui-kit/Stack'

export const Tickets: FC<TicketsProps> = ({ tickets }) => {
    return (
        <article>
            <VStack gap={'8'}>
                {tickets.map(ticket => (
                    <Ticket key={ticket.id} ticket={ticket} />
                ))}
            </VStack>
        </article>
    )
}
