import { FC, memo } from 'react'
import { HStack } from '@/shared/ui-kit/Stack'
import { Text } from '@/shared/ui-kit/Text'
import { Switcher } from '@/shared/ui-kit/Switcher'
import { useTranslation } from 'react-i18next'

export const LangSwitcher: FC = memo(() => {
    const { i18n } = useTranslation()

    const handleSwitchLanguage = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <HStack gap={'8'} align={'center'}>
            <Text>En</Text>
            <Switcher id={'lang'} value={i18n.language === 'ru'} onChange={handleSwitchLanguage} />
            <Text>Ру</Text>
        </HStack>
    )
})
