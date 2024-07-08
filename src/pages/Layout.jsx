import { Footer, Header, Spinner } from '../components/index'
import { Outlet } from 'react-router-dom'
import { useFetch } from '../utils/utils';
import { useEffect, useState } from 'react';
import i18n from '../utils/i18n';
import { useSelector } from 'react-redux';

const Layout = () => {

    const { cartLength } = useSelector((store) => store.cart);
    const [lang, setLang] = useState(JSON.parse(localStorage.getItem('lang')) || 'ru');

    useEffect(() => {
        i18n.changeLanguage(lang);
    }, [lang]);

    const { data: catalog, loading, error } = useFetch('/catalog-list');

    if (loading) {
        return <Spinner position={"full"} />
    }
    if (error) {
        console.log(error);
    }
    const handleLang = (lang) => {
        setLang(lang);
        localStorage.setItem('lang', JSON.stringify(lang));
        i18n.changeLanguage(lang);
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