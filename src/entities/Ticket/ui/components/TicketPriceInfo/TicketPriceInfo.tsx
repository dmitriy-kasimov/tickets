import { FC } from 'react'
import { VStack } from '@/shared/ui-kit/Stack'
import cls from './TicketPriceInfo.module.scss'
import { AppImage } from '@/shared/ui-kit/AppImage'
import { Button } from '@/shared/ui-kit/Button'
import { Text } from '@/shared/ui-kit/Text'
import { TicketType } from '@/entities/Ticket/model/types/TicketProps.ts'

type TicketPriceInfoProps = {
    ticket: TicketType
}
export const TicketPriceInfo: FC<TicketPriceInfoProps> = ({ ticket }) => {
    return (
        <VStack className={cls.PriceBlock} align={'center'} gap={'8'}>
            <AppImage fallback={<>Loading...</>} src={ticket.linkCompanyLogo} className={cls.img} />

            <Button fillVariant={'primary'}>
                <Text color={'main-inverted'} noWrap>
                    Купить за {ticket.price}
                </Text>
            </Button>
        </VStack>
    )
}
