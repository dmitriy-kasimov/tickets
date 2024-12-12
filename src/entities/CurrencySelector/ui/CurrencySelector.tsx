import { FC } from 'react'
import { Tabs, TabType } from '@/shared/ui-kit/Tabs'
import { CurrencySelectorProps, CurrencyType } from '../model/types/CurrencySelectorProps.ts'

const currency: TabType[] = [
    { value: 'RUB', label: 'RUB' },
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' }
]
export const CurrencySelector: FC<CurrencySelectorProps> = ({
    selectedCurrency,
    onSelectAnotherCurrency
}) => {
    return (
        <Tabs
            tabs={currency}
            activeTab={selectedCurrency}
            onClickTab={value => onSelectAnotherCurrency(value as CurrencyType)}
        />
    )
}
