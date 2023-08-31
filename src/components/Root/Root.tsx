import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import WhatsappIcon from '../WhatsappIcon/WhatsappIcon'

export default function Root() {
    return (
        <>
            <Header/>
            <Outlet/>
            <WhatsappIcon/>
            <Footer/>
        </>
)
}
