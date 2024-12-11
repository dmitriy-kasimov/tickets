import { FC, memo } from 'react'
import { Filter } from '@/widgets/Filter'
import { Tickets } from '@/widgets/Tickets'
import { HStack } from '@/shared/ui-kit/Stack'

export const MainPage: FC = memo(() => {
    return (
        <HStack gap={'24'} align={'start'}>
            <Filter />
            <Tickets />
        </HStack>
    )
})
