import { FC, useState } from 'react'
import { VStack } from '@/shared/ui-kit/Stack'
import { Text } from '@/shared/ui-kit/Text'
import { CurrencySelector, CurrencyType } from '@/features/CurrencySelector'
import { TransfersBlock } from '@/features/FilterOfTickets/ui/TransfersBlock.tsx'

export const FilterOfTickets: FC = () => {
    const [currency, setCurrency] = useState<CurrencyType>('rub')
    const [transfers, setTransfers] = useState<boolean[]>(new Array(4).fill(false))
    return (
        <VStack gap={'16'}>
            <VStack gap={'8'}>
                <Text size={'l'}>ВАЛЮТА</Text>
                <CurrencySelector
                    selectedCurrency={currency}
                    onSelectAnotherCurrency={setCurrency}
                />
            </VStack>
            <VStack gap={'8'}>
                <Text size={'l'}>КОЛИЧЕСТВО ПЕРЕСАДОК</Text>
                <TransfersBlock checks={transfers} setChecks={setTransfers} />
            </VStack>
        </VStack>
    )
}
