import { Footer, Header } from '../components/index'
import { Outlet } from 'react-router-dom'
// import BackTop from '../BackTop/BackTop';
const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
            {/* <BackTop /> */}
        </>
    )
}

export default Layout