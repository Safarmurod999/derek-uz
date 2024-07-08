import React, { useContext, useEffect, useState } from 'react'
import Aside from '../../components/Aside/Aside'
import ProductItem from '../../components/ProductItem/ProductItem'
import useFetchMultipleAPIs from '../../utils/utils';
import { Pagination, ProductModal, Spinner } from '../../components';
import { BASE_URL } from '../../data/const';
import { useLocation } from 'react-router-dom';
import { Context } from '../../context/catalogContext';
import { filterHandler, searchHandler } from '../../utils/filter';
import { useTranslation } from 'react-i18next';
const Catalog = () => {
    const { t } = useTranslation();
    const location = useLocation();
    var queryString = location.search;

    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [item, setItem] = useState({
        product: null
    });
    const [term, setTerm] = useState('');
    const [debounceTimer, setDebounceTimer] = useState(null);
    const { state, dispatch } = useContext(Context)

    const updateTermHandler = e => {
        const term = e.target.value.toLowerCase()
        setTerm(term)
        dispatch({ type: 'ON_TERM', payload: term })
    }

    const [toggleFilter, setToggleFilter] = useState(false);
    const [toggle, setToggle] = useState({
        filter: false,
        search: false,
        sort: false
    })

    const openModal = (item) => {
        setItem(item)
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setItem({})
        setIsModalOpen(false);
    };

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [items, setItems] = useState([]);
    const [limit, setLimit] = useState(windowWidth > 768 ? 6 : 4);
    const [isLoading, setIsLoading] = useState(true);

    const urls = [
        `/products-list`,
        '/categories',
        '/products-color',
        '/products-weight',
    ];

    const { data, loading, error } = useFetchMultipleAPIs(urls);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const fetchData = async () => {
        try {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 3000));
            const response = await fetch(`${BASE_URL}/products-list${queryString.length ? '/' + queryString : '/?'}${queryString.length ? `&limit=${limit}&offset=${offset}` : `limit=${limit}&offset=${offset}`}`);

            const data = await response.json();
            setItems(data);
            dispatch({ type: 'GET_DATA', payload: data.results })
            setIsLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    useEffect(() => {
        if (debounceTimer) {
            clearTimeout(debounceTimer);
        }

        const timer = setTimeout(() => {
            fetchData();
        }, 1500)

        setDebounceTimer(timer);

        return () => clearTimeout(timer);

    }, [limit, offset, queryString]);

    useEffect(() => {
        const numItems = windowWidth > 768 ? 6 : 4;
        setLimit(numItems);
    }, [windowWidth, items]);



    if (loading) return <Spinner position="relative" />;
    if (error) return <div>Error: {error.message}</div>;

    if (items && data) {
        var productsArray = items?.results;
        var categories = data[1];
        var colors = data[2];
        var weights = data[3];

        const getColors = (_colors) => {
            return _colors.map(
                (color) => colors.find((item) => item.id == color)
            );
        }

        const getWeights = (_weights) => {
            return _weights.map(
                (weight) => weights.find((item) => item.id == weight)
            )
        }

        if (productsArray) {
            productsArray = productsArray.map((product) => {
                const category = categories.find(category => category.id == product.category);

                return {
                    ...product,
                    category: category ? category.name : "No category",
                    color: getColors(product.color),
                    weight: getWeights(product.weight),
                }
            });
        }
    }

    const paginate = (pageNumber) => {
        setOffset((pageNumber - 1) * limit);
        setCurrentPage(pageNumber);
    };

    const filterArray = filterHandler(searchHandler(state.data, state.term), state.filter);
    return (
        <>
            {isModalOpen && <ProductModal closeModal={closeModal} item={item} />}
            <main className='catalog'>
                <div className="container">
                    <Aside toggle={toggle} setToggle={setToggle} categories={data[1]} weights={data[3]} />
                    <section className='catalog__section'>
                        <div className="catalog__search">
                            <div className="catalog__actions">
                                <button className='catalog__actions--btn' onClick={() => {
                                    setToggle({
                                        filter: !toggle.filter,
                                        search: false,
                                        sort: false
                                    })
                                }}>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11 9V14.91C11.03 15.135 10.955 15.375 10.7825 15.5325C10.7131 15.602 10.6307 15.6572 10.5399 15.6948C10.4492 15.7325 10.352 15.7518 10.2537 15.7518C10.1555 15.7518 10.0582 15.7325 9.96751 15.6948C9.87678 15.6572 9.79436 15.602 9.72498 15.5325L8.21748 14.025C8.13572 13.945 8.07356 13.8472 8.03583 13.7392C7.9981 13.6312 7.98583 13.516 7.99998 13.4025V9H7.97748L3.65748 3.465C3.53568 3.30865 3.48073 3.11044 3.50462 2.9137C3.52851 2.71695 3.6293 2.53766 3.78498 2.415C3.92748 2.31 4.08498 2.25 4.24998 2.25H14.75C14.915 2.25 15.0725 2.31 15.215 2.415C15.3707 2.53766 15.4714 2.71695 15.4953 2.9137C15.5192 3.11044 15.4643 3.30865 15.3425 3.465L11.0225 9H11Z" fill="#231F20" />
                                    </svg>
                                    <p>Фильтр</p>
                                </button>
                                <button className='catalog__actions--btn' onClick={() => {
                                    setToggle({
                                        filter: false,
                                        search: !toggle.search,
                                        sort: false

                                    })
                                }
                                }>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8 1.5C6.4087 1.5 4.88258 2.13214 3.75736 3.25736C2.63214 4.38258 2 5.9087 2 7.5C2 9.0913 2.63214 10.6174 3.75736 11.7426C4.88258 12.8679 6.4087 13.5 8 13.5C9.5913 13.5 11.1174 12.8679 12.2426 11.7426C13.3679 10.6174 14 9.0913 14 7.5C14 5.9087 13.3679 4.38258 12.2426 3.25736C11.1174 2.13214 9.5913 1.5 8 1.5Z" fill="#231F20" />
                                        <path fillRule="evenodd" clipRule="evenodd" d="M16.7802 16.2803C16.6395 16.4209 16.4488 16.4999 16.2499 16.4999C16.0511 16.4999 15.8603 16.4209 15.7197 16.2803L13.0947 13.6553C12.9581 13.5139 12.8825 13.3244 12.8842 13.1278C12.8859 12.9311 12.9648 12.743 13.1038 12.6039C13.2429 12.4649 13.431 12.386 13.6276 12.3843C13.8243 12.3826 14.0137 12.4582 14.1552 12.5948L16.7802 15.2198C16.9208 15.3605 16.9998 15.5512 16.9998 15.7501C16.9998 15.9489 16.9208 16.1397 16.7802 16.2803Z" fill="#231F20" />
                                    </svg>
                                </button>
                                <button className={`catalog__actions--btn`} onClick={() => {
                                    setToggle({
                                        filter: false,
                                        search: false,
                                        sort: !toggle.sort
                                    })
                                }}>
                                    <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.5 4.5H15.5M3.5 9H11M3.5 13.5H6.5" stroke="#231F20" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </button>
                            </div>
                            <div className={`catalog__search--bar`}>
                                <form>
                                    <div className={`catalog__search--row ${toggle.search ? 'toggle' : ''}`}>
                                        <div className='catalog__search--bar--input'>
                                            <input type="text" placeholder={t('search')}
                                                className='catalog__search--input'
                                                name='search'
                                                value={term} onChange={updateTermHandler} />
                                            <span>
                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M1 11L4.26087 7.73913M7.08696 1C6.57309 1 6.06425 1.10121 5.5895 1.29786C5.11475 1.49451 4.68338 1.78274 4.32002 2.1461C3.95666 2.50946 3.66842 2.94083 3.47178 3.41559C3.27513 3.89034 3.17391 4.39917 3.17391 4.91304C3.17391 5.42691 3.27513 5.93575 3.47178 6.4105C3.66842 6.88525 3.95666 7.31662 4.32002 7.67998C4.68338 8.04334 5.11475 8.33158 5.5895 8.52822C6.06425 8.72487 6.57309 8.82609 7.08696 8.82609C8.12476 8.82609 9.12006 8.41382 9.8539 7.67998C10.5877 6.94614 11 5.95085 11 4.91304C11 3.87524 10.5877 2.87994 9.8539 2.1461C9.12006 1.41227 8.12476 1 7.08696 1Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                    <div className={`catalog__search--row ${toggle.sort ? 'toggleSort' : ''}`}>
                                        <select name="order" id="order" onChange={(e) => dispatch({ type: 'ON_FILTER', payload: e.target.value })}>
                                            <option value="default">{t('default')}</option>
                                            <option value="ascending">{t('ascending')}</option>
                                            <option value="descending">{t('descending')}</option>
                                            <option value="descending_price">{t('descending_price')}</option>
                                            <option value="ascending_price">{t('ascending_price')}</option>
                                        </select>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="catalog__render">
                            {
                                !loading && !isLoading ? (
                                    filterArray.length ? (<div className="catalog__section--wrapper">
                                        {
                                            filterArray.map((product) => {

                                                product = productsArray.find(item => item.id == product.id);
                                                return (
                                                    <ProductItem key={product.id} item={product} onClick={openModal} />
                                                )
                                            })
                                        }
                                    </div>)
                                        :
                                        (<div className='no-product'>
                                            <p>Нет товаров</p>
                                        </div>)
                                ) : <Spinner position="relative" />
                            }
                        </div>
                        {
                            filterArray.length ? <Pagination
                                totalItems={items.count}
                                itemsPerPage={limit}
                                currentPage={currentPage}
                                paginate={paginate}
                                offset={offset}
                                setOffset={setOffset}
                            /> : ''
                        }
                    </section>
                </div>
            </main>
        </>
    )
}

export default Catalog