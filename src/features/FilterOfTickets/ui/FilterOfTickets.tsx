import { FC, useEffect, useState } from 'react'
import { VStack } from '@/shared/ui-kit/Stack'
import { Text } from '@/shared/ui-kit/Text'
import { CurrencySelector, CurrencyType } from '@/entities/CurrencySelector'
import { TransfersBlock } from '@/features/FilterOfTickets/ui/TransfersBlock.tsx'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export const FilterOfTickets: FC = () => {
    const [currency, setCurrency] = useState<CurrencyType>('RUB')
    const [transfers, setTransfers] = useState<boolean[]>(new Array(4).fill(false))

    const { pathname } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        navigate({
            pathname,
            search: createSearchParams({
                currency,
                transfers: `${transfers.map(option => +option)}`
            }).toString()
        })
    }, [currency, transfers])

    const { t } = useTranslation()

    return (
        <VStack gap={'16'}>
            <VStack gap={'8'}>
                <Text size={'l'} as={'h2'}>
                    {t('ВАЛЮТА')}
                </Text>
                <CurrencySelector
                    selectedCurrency={currency}
                    onSelectAnotherCurrency={setCurrency}
                />
            </VStack>
            <VStack gap={'8'}>
                <Text size={'l'} as={'h2'} noWrap>
                    {t('КОЛИЧЕСТВО ПЕРЕСАДОК')}
                </Text>
                <TransfersBlock checks={transfers} setChecks={setTransfers} />
            </VStack>
        </VStack>
    )
}
