import { FC } from 'react'
import { ButtonProps } from '../model/types'

import { classNames, Mods } from '@/shared/lib/classNames/classNames.ts'

import cls from './Button.module.scss'

export const Button: FC<ButtonProps> = props => {
    const { children, className, onClick, disabled = false, ...otherProps } = props

    const mods: Mods = {
        [cls.disabled!]: disabled
    }

    const additional = [className]

    return (
        <button
            className={classNames(cls.Button, mods, additional)}
            onClick={onClick}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    )
}
