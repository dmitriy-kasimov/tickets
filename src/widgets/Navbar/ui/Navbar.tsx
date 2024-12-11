import { FC, memo } from 'react'
import { Card } from '@/shared/ui-kit/Card'
import { Text } from '@/shared/ui-kit/Text'

export const Navbar: FC = memo(() => {
    return (
        <Card fullWidth padding={'m'}>
            <Text size={'xl'}>Navbar</Text>
        </Card>
    )
})
