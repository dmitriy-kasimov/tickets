import { FC } from 'react'
import { VStack } from '@/shared/ui-kit/Stack'
import { Text } from '@/shared/ui-kit/Text'
import { TicketLocationType } from '@/entities/Ticket/model/types/TicketProps.ts'
import { FormatDate } from '@/shared/lib/FormatDate/FormatDate.ts'

type TicketLocationBLockProps = {
    location: TicketLocationType
}

export const TicketLocationBLock: FC<TicketLocationBLockProps> = ({ location }) => {
    const time = FormatDate.formatTime(location.date)
    const date = FormatDate.formatDate(location.date)
    return (
        <VStack gap={'8'}>
            <Text size={'l'}>{time}</Text>
            <VStack>
                <Text noWrap>{location.town}</Text>
                <Text noWrap color={'secondary'} size={'s'}>
                    {date}
                </Text>
            </VStack>
        </VStack>
    )
}
