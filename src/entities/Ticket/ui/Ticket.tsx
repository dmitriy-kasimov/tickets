import { FC } from 'react'
import { Card } from '@/shared/ui-kit/Card'
import { TicketProps } from '@/entities/Ticket/model/types/TicketProps.ts'

import { TicketLocationInfo } from '@/entities/Ticket/ui/components/TicketLocationInfo/TicketLocationInfo.tsx'
import { TicketPriceInfo } from '@/entities/Ticket/ui/components/TicketPriceInfo/TicketPriceInfo.tsx'

import cls from './Ticket.module.scss'

export const Ticket: FC<TicketProps> = ({ ticket }) => {
    return (
        <section className={cls.Ticket}>
            <Card fullWidth>
                <TicketPriceInfo ticket={ticket} />
                <TicketLocationInfo ticket={ticket} />
            </Card>
        </section>
    )
}
