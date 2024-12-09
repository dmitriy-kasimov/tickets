import './styles/index.scss'
import { FullWidthWrapper } from '@/shared/ui-kit/FullWidthWrapper'
import { MainLayout } from '@/shared/layouts/MainLayout'

function App() {
    return (
        <div className={'app'}>
            <MainLayout>
                <FullWidthWrapper>
                    <>Hello world!</>
                </FullWidthWrapper>
            </MainLayout>
        </div>
    )
}

export default App
