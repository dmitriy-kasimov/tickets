import { FC } from 'react'
import { Card } from '@/shared/ui-kit/Card'
import { FilterOfTickets } from '@/features/FilterOfTickets'

import cls from './Filter.module.scss'

export const Filter: FC = () => {
    return (
        <Card padding={'m'} className={cls.Filter}>
            <FilterOfTickets />
        </Card>
    )
}
