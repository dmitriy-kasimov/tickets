import { ButtonHTMLAttributes, ReactNode } from 'react'

type ButtonBorderVariantType = 'rounded' | 'square'
type ButtonFillVariantType = 'primary' | 'transparent'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: ReactNode
    className?: string
    onClick?: () => void
    disabled?: boolean

    borderVariant?: ButtonBorderVariantType
    fillVariant?: ButtonFillVariantType
}
