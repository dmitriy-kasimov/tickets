import { FC, memo } from 'react'
import { MainLayoutProps } from '@/shared/layouts/MainLayout/types/MainLayoutProps.ts'

import cls from './MainLayout.module.scss'

import { VStack } from '@/shared/ui-kit/Stack'
import { ScrollToTopButton } from '@/features/scrollToTopButton'

export const MainLayout: FC<MainLayoutProps> = memo(({ header, content }) => {
    return (
        <VStack className={cls.MainLayout} gap={'16'} max align={'center'}>
            <div className={cls.header}>{header}</div>
            <div className={cls.content}>{content}</div>
            <div className={cls.toolBar}>
                <ScrollToTopButton />
            </div>
        </VStack>
    )
})
