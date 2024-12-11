import { FC } from 'react'
import { Card } from '@/shared/ui-kit/Card'
import { FilterOfTickets } from '@/features/FilterOfTickets'

export const Filter: FC = () => {
    return (
        <Card padding={'m'}>
            <FilterOfTickets />
        </Card>
    )
}
