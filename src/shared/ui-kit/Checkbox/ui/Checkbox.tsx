import { FC, memo } from 'react'
import cls from './Checkbox.module.scss'

import { CheckboxProps } from '../types/CheckboxProps'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HStack } from '@/shared/ui-kit/Stack'

const Checkbox: FC<CheckboxProps> = memo(props => {
    const {
        id,
        checked = false,
        notDefined = false,
        onChange,
        children,
        disabled = false,
        className = ''
    } = props
    return (
        <HStack gap='8' className={classNames('', {}, [className])}>
            <input
                className={classNames(cls.input, {}, [])}
                type='checkbox'
                id={id}
                name={id}
                value='yes'
                checked={checked}
                onChange={onChange}
                disabled={disabled}
            />
            <label
                htmlFor={id}
                className={classNames(cls.checkbox, { [cls.notDefined]: notDefined }, [])}
            ></label>
            <label htmlFor={id} className={cls.label}>
                {children}
            </label>
        </HStack>
    )
})

export default Checkbox
