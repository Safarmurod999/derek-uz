import { Footer, Header, Spinner } from '../components/index'
import { Outlet, useLocation } from 'react-router-dom'
import { useFetch } from '../utils/utils';
import { useEffect, useState } from 'react';
import i18n from '../utils/i18n';
import { useSelector } from 'react-redux';

const Layout = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    const { data: catalog, loading, error } = useFetch('/catalog-list');

    const { cartLength } = useSelector((store) => store.cart);
    const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang')) || 'ru');

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);


    const handleLang = (lang) => {
        setLang(lang);
        localStorage.setItem('lang', JSON.stringify(lang));
        i18n.changeLanguage(lang);
    }

    if (loading) {
        return <Spinner position={"full"} />
    }
    if (error) {
        console.log(error);
    }
    return (
        <>
            <Header catalog={catalog} lang={lang} setLang={handleLang} cartLength={cartLength} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout