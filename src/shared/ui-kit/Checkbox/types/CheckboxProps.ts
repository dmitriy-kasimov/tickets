import { ReactNode } from 'react'

export type CheckboxProps = {
    id: string
    notDefined?: boolean
    checked?: boolean
    onChange: () => void
    children?: ReactNode
    disabled?: boolean

    className?: string
}
