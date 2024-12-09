import { ReactNode } from 'react'

type CardPadding = 'none' | 'xxs' | 'xs' | 's' | 'm'

export type CardProps = {
    children: ReactNode
    padding?: CardPadding
}
