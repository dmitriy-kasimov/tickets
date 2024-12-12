import { FC, ReactNode } from 'react'
import cls from './FullWidthWrapper.module.scss'

type FullWidthWrapperProps = {
    children: ReactNode
}
export const FullWidthWrapper: FC<FullWidthWrapperProps> = ({ children }) => {
    return <div className={cls.FullWidthWrapper}>{children}</div>
}
