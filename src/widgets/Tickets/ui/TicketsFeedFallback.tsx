import { FC } from 'react'
import { VStack } from '@/shared/ui-kit/Stack'
import { Skeleton } from '@/shared/ui-kit/Skeleton'
import { Card } from '@/shared/ui-kit/Card'

export const TicketsFeedFallback: FC = () => {
    return (
        <Card padding={'m'}>
            <VStack gap={'8'}>
                <Skeleton width={663} height={160} border={'8px'} />
                <Skeleton width={663} height={160} border={'8px'} />
                <Skeleton width={663} height={160} border={'8px'} />
                <Skeleton width={663} height={160} border={'8px'} />
            </VStack>
        </Card>
    )
}
