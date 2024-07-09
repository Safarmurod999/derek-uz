import React, { useEffect } from 'react'

import { addData, calculateTotals, clearCart, decrementQuantity, incrementQuantity, removeItem, setCart, setName, setPhoneNumber, setQuanTity } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import i18n from '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import { useMask } from '@react-input/mask';

const Cart = ({ isModalOpen, setIsModalOpen }) => {

    const lang = i18n.language;
    const { t } = useTranslation();
    const { total, cart, phone_number, name } = useSelector((store) => store.cart);
    const dispatch = useDispatch();

    const toggleModal = () => {
        dispatch(setIsModalOpen(!isModalOpen))
        dispatch(setCart());
    };

    useEffect(() => {
        dispatch(calculateTotals(cart));
    }, [cart]);

    const handleInputChange = (e) => {

        dispatch(setPhoneNumber(e.target.value))
    };
    const inputRef = useMask({ mask: '+998 (__) ___ __ __', replacement: { _: /\d/ } });
    const handleSubmit = (e) => {
        e.preventDefault();
        let newData = {
            name,
            phone_number,
            cart
        }
        if (newData.cart.length > 0) {
            console.log(newData.cart);
            dispatch(addData({ apiEndpoint: '/orders/', newData }))
            dispatch(setIsModalOpen(false))
            toast.success(t('order_accepted'), {
                duration: 1500
            })
        } else {
            toast.error(t('cart_empty'),
                {
                    duration: 1500
                }
            );
        }

    }
    return (
        <div className={`cart ${isModalOpen ? 'open' : ''}`}>
            <div className="cart__shadow" onClick={() => {
                dispatch(setIsModalOpen(false))
            }}>

            </div>
            <div className='cart-content'>
                <button aria-label='toggle-btn' className='cart__toggle' onClick={toggleModal}>
                    <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.41663 4.5L9.58329 4.5M1.41663 4.5L4.91663 1M1.41663 4.5L4.91663 8" stroke="#231F20" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p>{t('back')}</p>
                </button>
                <div className="cart__header">
                    <h2 className='cart__title'>{t('cart')}</h2>
                    <button aria-label='clear-btn' onClick={() => dispatch(clearCart())}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1875 3.375H12.375V2.8125C12.375 2.36495 12.1972 1.93572 11.8807 1.61926C11.5643 1.30279 11.1351 1.125 10.6875 1.125H7.3125C6.86495 1.125 6.43572 1.30279 6.11926 1.61926C5.80279 1.93572 5.625 2.36495 5.625 2.8125V3.375H2.8125C2.66332 3.375 2.52024 3.43426 2.41475 3.53975C2.30926 3.64524 2.25 3.78832 2.25 3.9375C2.25 4.08668 2.30926 4.22976 2.41475 4.33525C2.52024 4.44074 2.66332 4.5 2.8125 4.5H3.375V14.625C3.375 14.9234 3.49353 15.2095 3.7045 15.4205C3.91548 15.6315 4.20163 15.75 4.5 15.75H13.5C13.7984 15.75 14.0845 15.6315 14.2955 15.4205C14.5065 15.2095 14.625 14.9234 14.625 14.625V4.5H15.1875C15.3367 4.5 15.4798 4.44074 15.5852 4.33525C15.6907 4.22976 15.75 4.08668 15.75 3.9375C15.75 3.78832 15.6907 3.64524 15.5852 3.53975C15.4798 3.43426 15.3367 3.375 15.1875 3.375ZM7.875 11.8125C7.875 11.9617 7.81574 12.1048 7.71025 12.2102C7.60476 12.3157 7.46168 12.375 7.3125 12.375C7.16332 12.375 7.02024 12.3157 6.91475 12.2102C6.80926 12.1048 6.75 11.9617 6.75 11.8125V7.3125C6.75 7.16332 6.80926 7.02024 6.91475 6.91475C7.02024 6.80926 7.16332 6.75 7.3125 6.75C7.46168 6.75 7.60476 6.80926 7.71025 6.91475C7.81574 7.02024 7.875 7.16332 7.875 7.3125V11.8125ZM11.25 11.8125C11.25 11.9617 11.1907 12.1048 11.0852 12.2102C10.9798 12.3157 10.8367 12.375 10.6875 12.375C10.5383 12.375 10.3952 12.3157 10.2898 12.2102C10.1843 12.1048 10.125 11.9617 10.125 11.8125V7.3125C10.125 7.16332 10.1843 7.02024 10.2898 6.91475C10.3952 6.80926 10.5383 6.75 10.6875 6.75C10.8367 6.75 10.9798 6.80926 11.0852 6.91475C11.1907 7.02024 11.25 7.16332 11.25 7.3125V11.8125ZM11.25 3.375H6.75V2.8125C6.75 2.66332 6.80926 2.52024 6.91475 2.41475C7.02024 2.30926 7.16332 2.25 7.3125 2.25H10.6875C10.8367 2.25 10.9798 2.30926 11.0852 2.41475C11.1907 2.52024 11.25 2.66332 11.25 2.8125V3.375Z" fill="#D1D1D1" />
                        </svg>
                        <p>{t('clear_cart')}</p>
                    </button>
                </div>

                <div className='cart__wrapper'>
                    {
                        cart.map((item) => {
                            return <div key={item.id} className="cart__item">
                                <div className='cart__item--top'>
                                    <div className='cart__left'>
                                        <div className="cart__image">
                                            <img src={item.image} alt='' />
                                        </div>
                                        <div className="cart__item--name">
                                            <strong>{lang == 'ru' ? item.title : item[`title_${lang}`]}</strong>
                                        </div>
                                    </div>
                                    <div className='cart__right'>
                                        <button aria-label='cancel-btn' className="cart__cancel" onClick={() => dispatch(removeItem(item.id))}>
                                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="18" height="18" rx="4" fill="#D8D4DB" />
                                                <rect width="9.39109" height="1.17389" rx="0.586943" transform="matrix(0.70541 0.7088 -0.70541 0.7088 6.07806 5.25)" fill="white" />
                                                <rect width="9.39109" height="1.17389" rx="0.586943" transform="matrix(0.70541 -0.7088 0.70541 0.7088 5.29736 11.918)" fill="white" />
                                            </svg>
                                        </button>
                                        <div className="cart__price">
                                            {item.price} $
                                        </div>
                                    </div>
                                </div>
                                <div className='cart__item--bottom'>
                                    <ul className="cart__details">
                                        <li className="cart__details--item">
                                            <p>{t('articles')}</p>
                                            <div>SKU001-1</div>
                                        </li>
                                        <li className="cart__details--item">
                                            <p>{t('color')}</p>
                                            <div>{item?.color}</div>
                                        </li>
                                        <li className="cart__details--item">
                                            <p>{t('weight')}</p>
                                            <div>{item?.weight} {lang == "ru" ? 'г' : 'g'}</div>
                                        </li>
                                    </ul>
                                    <div className="cart__quantity">
                                        <button aria-label='count-btn' onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                                        <input type="text" value={item.quantity} onChange={(e) => dispatch(setQuanTity(e.target.value, item.id))} />
                                        <button aria-label='count-btn' onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                    <div className="cart__total">
                        {t('total')}  {total} $
                    </div>
                    <form className='form' onSubmit={handleSubmit}>
                        <div className='form__content'>
                            <input className='form__input'
                                type="text"
                                placeholder={t('name')}
                                name='name'
                                minLength={1}
                                maxLength={35}
                                value={name}
                                onChange={(e) => dispatch(setName(e.target.value))}
                                required />
                            <input className='form__input v-mask'
                                type="text"
                                placeholder='+998 '
                                name='mobile'
                                value={phone_number}
                                onChange={(e) => handleInputChange(e)}
                                ref={inputRef}
                                required />

                        </div>

                        <button type="submit" >{t('order')}</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Cart;