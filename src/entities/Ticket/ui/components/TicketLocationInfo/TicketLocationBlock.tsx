import { FC } from 'react'
import { VStack } from '@/shared/ui-kit/Stack'
import { Text } from '@/shared/ui-kit/Text'
import { TicketLocationType } from '@/entities/Ticket/model/types/TicketProps.ts'
import { FormatDate } from '@/shared/lib/FormatDate/FormatDate.ts'
import { useTranslation } from 'react-i18next'

type TicketLocationBLockProps = {
    location: TicketLocationType
}

export const TicketLocationBLock: FC<TicketLocationBLockProps> = ({ location }) => {
    const { i18n } = useTranslation()
    const time = FormatDate.formatTime(location.date, i18n.language)
    const date = FormatDate.formatDate(location.date, i18n.language)

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
