import { FC } from 'react'
import { VStack } from '@/shared/ui-kit/Stack'
import { Skeleton } from '@/shared/ui-kit/Skeleton'
import { Card } from '@/shared/ui-kit/Card'

export const TicketsFeedFallback: FC = () => {
    return (
        <VStack gap={'8'}>
            <Card>
                <Skeleton width={663} height={160} border={'8px'} />
            </Card>
            <Card>
                <Skeleton width={663} height={160} border={'8px'} />
            </Card>
            <Card>
                <Skeleton width={663} height={160} border={'8px'} />
            </Card>
            <Card>
                <Skeleton width={663} height={160} border={'8px'} />
            </Card>
            <Card>
                <Skeleton width={663} height={160} border={'8px'} />
            </Card>
        </VStack>
    )
}
