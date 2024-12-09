import { Dispatch, SetStateAction } from 'react'

export type CheckboxGroupProps = {
    options: string[]
    checks: boolean[]
    setChecks: Dispatch<SetStateAction<boolean[]>>
}
