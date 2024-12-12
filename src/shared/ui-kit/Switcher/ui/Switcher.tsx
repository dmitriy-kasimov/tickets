import { FC, memo } from 'react'

import { Mods, classNames } from '@/shared/lib/classNames/classNames'

import { SwitcherProps } from '../model/types'

import cls from './Switcher.module.scss'

const Switcher: FC<SwitcherProps> = memo(props => {
    const { id, value, onChange, disabled = false, className } = props

    const mods: Mods = {
        [cls.checked!]: value
    }

    return (
        <span className={classNames(cls.Switcher, { [cls.disabled!]: disabled }, [className])}>
            <input
                className={classNames(cls.input, mods, [])}
                type='checkbox'
                id={id}
                onClick={onChange}
            />
            <label className={classNames(cls.label)} htmlFor={id}>
                Toggle
            </label>
        </span>
    )
})

export default Switcher
