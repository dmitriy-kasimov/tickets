import { FC, memo } from 'react'
import { MainLayoutProps } from '@/shared/layouts/MainLayout/types/MainLayoutProps.ts'

import cls from './MainLayout.module.scss'

import { classNames } from '@/shared/lib/classNames/classNames.ts'

export const MainLayout: FC<MainLayoutProps> = memo(({ header, content, sidebar, toolbar }) => {
    return (
        <div className={classNames(cls.MainLayout, {}, [])}>
            <div className={cls.content}>{content}</div>
            <div className={cls.sidebar}>{sidebar}</div>
            <div className={cls.rightbar}>
                <div className={cls.header}>{header}</div>
                <div className={cls.toolbar}>{toolbar}</div>
            </div>
        </div>
    )
})
