import './styles/index.scss'
import { FullWidthWrapper } from '@/shared/ui-kit/FullWidthWrapper'
import { MainLayout } from '@/shared/layouts/MainLayout'
import { Ticket } from '@/entities/Ticket/ui/Ticket.tsx'
import { TicketType } from '@/entities/Ticket/model/types/TicketProps.ts'

const ticket: TicketType = {
    departure: { date: '2018-10-09T06:25:00+0000', town: 'WO, Владивосток' },
    arrival: { date: '2018-10-10T08:45:00+0000', town: 'Тель-Авив, TLV' },
    countTransfers: 1,
    price: '21032 P',
    linkCompanyLogo: 'https://toplogos.ru/images/logo-oak.png'
}

function App() {
    return (
        <div className={'app'}>
            <MainLayout>
                <FullWidthWrapper>
                    <Ticket ticket={ticket} />
                </FullWidthWrapper>
            </MainLayout>
        </div>
    )
}

export default App
