import { Footer, Header, Spinner } from '../components/index'
import { Outlet } from 'react-router-dom'
import { useFetch } from '../utils/utils';

const Layout = () => {


    const { data: catalog, loading, error } = useFetch('/catalog-list');

    if (loading) {
        return <Spinner position={"full"} />
    }
    if (error) {
        console.log(error);
    }

    return (
        <>
            <Header catalog={catalog}/>
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout