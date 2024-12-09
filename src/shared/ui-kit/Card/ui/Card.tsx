import { FC } from 'react'
import { CardProps } from '@/shared/ui-kit/Card/types/CardProps.tsx'

import cls from './Card.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames.ts'

export const Card: FC<CardProps> = ({ padding = 'none', children }) => {
    return <div className={classNames(cls.Card, {}, [cls[padding]])}>{children}</div>
}
