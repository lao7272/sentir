import { Outlet } from 'react-router-dom'
import Header from '../layouts/Header/Header'
import Footer from '../layouts/Footer/Footer'
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
