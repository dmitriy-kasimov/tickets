import { Dispatch, FC, SetStateAction } from 'react'
import { CheckboxGroup } from '@/shared/ui-kit/CheckboxGroup'
import { useTranslation } from 'react-i18next'

type TransfersBlockProps = {
    checks: boolean[]
    setChecks: Dispatch<SetStateAction<boolean[]>>
}

export const TransfersBlock: FC<TransfersBlockProps> = ({ checks, setChecks }) => {
    const { t } = useTranslation()
    const options: string[] = [
        t('Без пересадок'),
        t('1 пересадка'),
        t('2 пересадки'),
        t('3 пересадки')
    ]
    return <CheckboxGroup options={options} checks={checks} setChecks={setChecks} />
}
