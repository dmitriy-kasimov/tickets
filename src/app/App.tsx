import './styles/index.scss'
import { FullWidthWrapper } from '@/shared/ui-kit/FullWidthWrapper'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { Tabs, TabType } from '@/shared/ui-kit/Tabs'
import { useState } from 'react'

const tabs: TabType[] = [
    { value: 'rub', label: 'RUB' },
    { value: 'usd', label: 'USD' },
    { value: 'eur', label: 'EUR' }
]

function App() {
    const [activeTab, setActiveTab] = useState<string>('rub')

    return (
        <div className={'app'}>
            <MainLayout>
                <FullWidthWrapper>
                    <>Hello world!</>
                    <Tabs tabs={tabs} activeTab={activeTab} onClickTab={setActiveTab} />
                </FullWidthWrapper>
            </MainLayout>
        </div>
    )
}

export default App
