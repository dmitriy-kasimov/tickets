import { ElementType, ReactNode } from 'react'
import cls from './styles/Text.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames.ts'

// Перечисление размеров шрифтов
type textSize = 's' | 'm' | 'l' | 'xl'

// Типы шрифтов по цвету
type textColor = 'main' | 'main-inverted' | 'brand' | 'secondary' | 'error'

type textAlign = 'left' | 'center' | 'right'

type AvailableSectionTypes = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

type TextProps<T> = {
    size?: textSize
    color?: textColor
    align?: textAlign
    noWrap?: boolean
    bold?: boolean
    className?: string
    children: ReactNode
    as?: T
}

export const Text = <T extends ElementType>(
    props: TextProps<T extends AvailableSectionTypes ? T : 'span'>
) => {
    const {
        color = 'main',
        size = 'm',
        align = 'left',
        className = '',
        bold = false,
        noWrap = false,

        children,
        as
    } = props

    const Tag = as || 'p'
    return (
        <Tag
            className={classNames(cls.Text, { [cls.bold!]: bold, [cls.noWrap]: noWrap }, [
                cls[size],
                cls[color],
                cls[align],
                className
            ])}
        >
            {children}
        </Tag>
    )
}
