import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import InstagramIcon from '../InstagramIcon/InstagramIcon'

export default function Root() {
    return (
        <>
            <Header/>
            <Outlet/>
            <InstagramIcon/>
            <Footer/>
        </>
)
}
