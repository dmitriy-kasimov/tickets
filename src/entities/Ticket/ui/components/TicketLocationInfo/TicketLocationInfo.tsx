import { FC } from 'react'
import { TicketType } from '../../../model/types/TicketProps.ts'

import cls from './TicketLocationInfo.module.scss'
import { HStack, VStack } from '@/shared/ui-kit/Stack'
import { Text } from '@/shared/ui-kit/Text'

import Icon from '@/shared/assets/icons/route-of-plane.svg?react'
import { TicketLocationBLock } from '@/entities/Ticket/ui/components/TicketLocationInfo/TicketLocationBlock.tsx'

type TicketLocationInfoProps = {
    ticket: TicketType
}

export const TicketLocationInfo: FC<TicketLocationInfoProps> = ({ ticket }) => {
    return (
        <div className={cls.TicketLocationInfo}>
            <HStack align={'center'} gap={'8'}>
                <TicketLocationBLock location={ticket.departure} />
                <VStack align={'center'}>
                    <Text color={'secondary'}>{ticket.countTransfers} пересадки</Text>
                    <Icon />
                </VStack>
                <TicketLocationBLock location={ticket.arrival} />
            </HStack>
        </div>
    )
}
