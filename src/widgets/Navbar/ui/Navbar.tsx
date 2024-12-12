import { FC, memo } from 'react'
import { Card } from '@/shared/ui-kit/Card'
import { Text } from '@/shared/ui-kit/Text'
import { HStack } from '@/shared/ui-kit/Stack'
import { LangSwitcher } from '@/features/LangSwitcher'
import { useTranslation } from 'react-i18next'

export const Navbar: FC = memo(() => {
    const { t } = useTranslation()
    return (
        <Card fullWidth padding={'m'}>
            <HStack max justify={'between'}>
                <Text size={'xl'} as={'h1'}>
                    {t('авиасейлс')}
                </Text>
                <LangSwitcher />
            </HStack>
        </Card>
    )
})
