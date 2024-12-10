import { FC } from 'react'
import { VStack } from '@/shared/ui-kit/Stack'
import { Text } from '@/shared/ui-kit/Text'
import { TicketLocationType } from '@/entities/Ticket/model/types/TicketProps.ts'

type TicketLocationBLockProps = {
    location: TicketLocationType
}

export const TicketLocationBLock: FC<TicketLocationBLockProps> = ({ location }) => {
    return (
        <VStack gap={'8'}>
            <Text size={'l'}>{location.date}</Text>
            <VStack>
                <Text noWrap>{location.town}</Text>
                <Text noWrap color={'secondary'}>
                    {location.date}
                </Text>
            </VStack>
        </VStack>
    )
}
