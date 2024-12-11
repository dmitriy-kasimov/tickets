import { Dispatch, FC, SetStateAction } from 'react'
import { CheckboxGroup } from '@/shared/ui-kit/CheckboxGroup'

const options: string[] = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки']

type TransfersBlockProps = {
    checks: boolean[]
    setChecks: Dispatch<SetStateAction<boolean[]>>
}

export const TransfersBlock: FC<TransfersBlockProps> = ({ checks, setChecks }) => {
    return <CheckboxGroup options={options} checks={checks} setChecks={setChecks} />
}
