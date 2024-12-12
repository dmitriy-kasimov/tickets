import { FC } from 'react'
import { Card } from '@/shared/ui-kit/Card'
import { FilterOfTickets } from '@/features/FilterOfTickets'

import cls from './Filter.module.scss'

export const Filter: FC = () => {
    return (
        <aside className={cls.Filter}>
            <Card padding={'m'}>
                <FilterOfTickets />
            </Card>
        </aside>
    )
}
