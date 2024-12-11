import './styles/index.scss'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { Suspense } from 'react'
import { Navbar } from '@/widgets/Navbar'
import { MainPage } from '@/pages/MainPage'

function App() {
    return (
        <div className={'app'}>
            <Suspense fallback={'Loading app...'}>
                <MainLayout header={<Navbar />} content={<MainPage />} />
            </Suspense>
        </div>
    )
}

export default App
