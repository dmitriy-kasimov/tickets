import { FC } from 'react'
import { TabsProps } from '../types/TabsProps.ts'

import cls from './Tabs.module.scss'
import { Button } from '@/shared/ui-kit/Button'
import { Text } from '@/shared/ui-kit/Text'

export const Tabs: FC<TabsProps> = ({ tabs, activeTab, onClickTab }) => {
    return (
        <div className={cls.Tabs}>
            {tabs.map(tab =>
                tab.value === activeTab ? (
                    <Button
                        key={tab.value}
                        onClick={() => onClickTab(tab.value)}
                        borderVariant={'square'}
                    >
                        <Text color={'main-inverted'}>{tab.label}</Text>
                    </Button>
                ) : (
                    <Button
                        key={tab.value}
                        onClick={() => onClickTab(tab.value)}
                        borderVariant={'square'}
                        fillVariant={'transparent'}
                    >
                        <Text color={'brand'}>{tab.label}</Text>
                    </Button>
                )
            )}
        </div>
    )
}
