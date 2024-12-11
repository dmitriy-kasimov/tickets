export type CurrencyType = 'rub' | 'usd' | 'eur'
export type CurrencySelectorProps = {
    selectedCurrency: CurrencyType
    onSelectAnotherCurrency: (value: CurrencyType) => void
}
