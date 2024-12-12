export type CurrencyType = 'RUB' | 'USD' | 'EUR'
export type CurrencySelectorProps = {
    selectedCurrency: CurrencyType
    onSelectAnotherCurrency: (value: CurrencyType) => void
}

export const LocalesByCurrency: Record<CurrencyType, string> = {
    RUB: 'ru-RU',
    EUR: 'de-DE',
    USD: 'us-US'
}
