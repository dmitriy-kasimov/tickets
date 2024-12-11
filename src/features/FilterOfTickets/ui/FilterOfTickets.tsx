import { FC, useEffect, useState } from 'react'
import { VStack } from '@/shared/ui-kit/Stack'
import { Text } from '@/shared/ui-kit/Text'
import { CurrencySelector, CurrencyType } from '@/entities/CurrencySelector'
import { TransfersBlock } from '@/features/FilterOfTickets/ui/TransfersBlock.tsx'
import { createSearchParams, useLocation, useNavigate } from 'react-router-dom'

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

    return (
        <VStack gap={'16'}>
            <VStack gap={'8'}>
                <Text size={'l'} as={'h2'}>
                    ВАЛЮТА
                </Text>
                <CurrencySelector
                    selectedCurrency={currency}
                    onSelectAnotherCurrency={setCurrency}
                />
            </VStack>
            <VStack gap={'8'}>
                <Text size={'l'} as={'h2'} noWrap>
                    КОЛИЧЕСТВО ПЕРЕСАДОК
                </Text>
                <TransfersBlock checks={transfers} setChecks={setTransfers} />
            </VStack>
        </VStack>
    )
}
