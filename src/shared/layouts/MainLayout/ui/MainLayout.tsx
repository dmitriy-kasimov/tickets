import { FC, memo } from 'react'
import { MainLayoutProps } from '@/shared/layouts/MainLayout/types/MainLayoutProps.ts'

import cls from './MainLayout.module.scss'

export const MainLayout: FC<MainLayoutProps> = memo(({ children }) => (
    <div className={cls.MainLayout}>{children}</div>
))
