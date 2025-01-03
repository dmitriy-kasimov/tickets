import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { Mods, classNames } from '@/shared/lib/classNames/classNames'
import cls from './Flex.module.scss'

export type FlexJustify = 'start' | 'center' | 'end' | 'between'
export type FlexAlign = 'start' | 'center' | 'end'
export type FlexDirection = 'row' | 'column'
export type FlexWrap = 'nowrap' | 'wrap'
export type FlexGap = '4' | '8' | '16' | '24' | '32'

const justifyClasses: Record<FlexJustify, string | undefined> = {
    start: cls.justifyStart,
    center: cls.justifyCenter,
    end: cls.justifyEnd,
    between: cls.justifyBetween
}

const alignClasses: Record<FlexAlign, string | undefined> = {
    start: cls.alignStart,
    center: cls.alignCenter,
    end: cls.alignEnd
}

const directionClasses: Record<FlexDirection, string | undefined> = {
    row: cls.directionRow,
    column: cls.directionColumn
}

const gapClasses: Record<FlexGap, string | undefined> = {
    4: cls.gap4,
    8: cls.gap8,
    16: cls.gap16,
    24: cls.gap24,
    32: cls.gap32
}

type DivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
export interface FlexProps extends DivProps {
    className?: string
    children: ReactNode
    justify?: FlexJustify
    align?: FlexAlign
    direction: FlexDirection
    wrap?: FlexWrap
    gap?: FlexGap
    max?: boolean
}

export const Flex = (props: FlexProps) => {
    const {
        className,
        children,
        direction = 'row',
        wrap = 'nowrap',
        align = 'center',
        justify = 'start',
        gap,
        max,
        ...otherProps
    } = props

    const classes = [
        className,
        justifyClasses[justify],
        alignClasses[align],
        directionClasses[direction],
        cls[wrap],
        gap && gapClasses[gap]
    ]

    const mods: Mods = {
        [cls.max!]: max
    }

    return (
        <div className={classNames(cls.Flex, mods, classes)} {...otherProps}>
            {children}
        </div>
    )
}
