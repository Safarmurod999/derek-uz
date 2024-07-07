import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import i18n from '../../utils/i18n';
import { useTranslation } from 'react-i18next';

const Aside = ({ toggleFilter, setToggleFilter, setToggleSearch, weights, categories }) => {

    

    const lang = i18n.language;
    const { t } = useTranslation();

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [priceRange, setPriceRange] = useState([
        Number(searchParams.get('min_price')) || 0,
        Number(searchParams.get('max_price')) || 100000
    ]);
    const [category, setCategory] = useState(searchParams.get('category') || '');
    const [weight, setWeight] = useState( searchParams.getAll('weight')|| '');

    const [params, setParams] = useState(Object.fromEntries(searchParams.entries()))

    const handleCategory = (_category) => {
        console.log('weight', searchParams.getAll('weight').length);
        if (_category == category) {
            searchParams.delete('category');
            setCategory('');
            if (searchParams.getAll('weight').length) {
                params.weight = weight
            }
            setSearchParams(searchParams);
        } else {
            setCategory(_category);
            params.category = _category;
            if (searchParams.getAll('weight').length) {
                params.weight = weight
            }
            setParams(params)
            setSearchParams(params);

        }
    }
    const handlePriceChange = (value) => {
        setPriceRange(value);
        params.min_price = value[0];
        params.max_price = value[1];
        if (searchParams.get('category')) {
            params.category = category
        }
        if (searchParams.getAll('weight')) {
            params.weight = weight
        }
        setParams(params);
        setSearchParams(params);

    };
    const handleWeight = (newWeight) => {
        let weightArray = searchParams.getAll('weight')
        if (!weightArray.includes(`${newWeight}`)) {

            if (searchParams.get('category')) {
                params.category = category

            }
            weightArray.push(newWeight)
            setWeight(weightArray);
            params.weight = weightArray;
            setParams(params);
            setSearchParams(params);
        } else {
            if (searchParams.get('category')) {
                params.category = category

            }
            weightArray = weightArray.filter((item) => item != newWeight);
            setWeight(weightArray);
            params.weight = weightArray;
            setParams(params);
            setSearchParams(params);
        }
    }
    const handleCheck = (value) => {
        const weights = searchParams.getAll('weight');
        let isExist = false;
        let arr = weights.length ? weights : []
        for (const el of arr) {
            if (el == value) {
                isExist = true;
                break;
            }
        }
        return isExist;
    }
    return (
        <aside className={`aside ${toggleFilter ? 'toggle' : ''}`}>
            <div className='aside_toggle'>
                <button className="aside__toggle--btn" onClick={() => {
                    setToggleFilter(!toggleFilter)
                    setToggleSearch(false)
                }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2.12134" width="24" height="3" rx="1" transform="rotate(45 2.12134 0)" fill="#231F20" />
                        <rect x="0.121338" y="17" width="24" height="3" rx="1" transform="rotate(-45 0.121338 17)" fill="#231F20" />
                    </svg>
                </button>
            </div>
            <ul className='aside__list'>
                <li className='aside__list--item'>
                    <p>{t('filter_1')}</p>
                    <ul>
                        {
                            categories.map((_category) => (
                                <li key={_category.id} onClick={() => handleCategory(_category.id)}>
                                    <p>{_category.name}</p>
                                </li>
                            ))
                        }
                    </ul>
                </li>
                <li className='aside__list--item'>
                    <p>{t('filter_2')}</p>
                    <div>
                        <div>
                            <Slider
                                range
                                min={0}
                                max={100000}
                                value={priceRange}
                                onChange={handlePriceChange}
                            />
                        </div>
                        <div className='aside__price--input'>
                            <input
                                type="number"
                                value={priceRange[0]}
                                min={0}
                                max={100000}
                                onChange={(e) => handlePriceChange([+e.target.value, priceRange[1]])}
                            />
                            <input
                                type="number"
                                value={priceRange[1]}
                                min={0}
                                max={100000}
                                onChange={(e) => handlePriceChange([priceRange[0], +e.target.value])}
                            />
                        </div>
                    </div>
                </li>
                <li className='aside__list--item'>
                    <p>{t('filter_3')}</p>
                    <ul>
                        {
                            weights.map((_weight) => (
                                <li key={_weight.id}>
                                    <input type="checkbox" name="check" id={`weight_${_weight.id}`}
                                        checked={handleCheck(_weight.id)}
                                        onChange={() => handleWeight(_weight.id)} />
                                    <label htmlFor={`weight_${_weight.id}`}>{_weight.value} {lang == 'ru' ? 'г' : 'g'}.</label>
                                </li>
                            )
                            )
                        }
                    </ul>
                </li>
                <li className='aside__list--clear'>
                    <button onClick={() => navigate('/catalog')}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1875 3.375H12.375V2.8125C12.375 2.36495 12.1972 1.93572 11.8807 1.61926C11.5643 1.30279 11.1351 1.125 10.6875 1.125H7.3125C6.86495 1.125 6.43572 1.30279 6.11926 1.61926C5.80279 1.93572 5.625 2.36495 5.625 2.8125V3.375H2.8125C2.66332 3.375 2.52024 3.43426 2.41475 3.53975C2.30926 3.64524 2.25 3.78832 2.25 3.9375C2.25 4.08668 2.30926 4.22976 2.41475 4.33525C2.52024 4.44074 2.66332 4.5 2.8125 4.5H3.375V14.625C3.375 14.9234 3.49353 15.2095 3.7045 15.4205C3.91548 15.6315 4.20163 15.75 4.5 15.75H13.5C13.7984 15.75 14.0845 15.6315 14.2955 15.4205C14.5065 15.2095 14.625 14.9234 14.625 14.625V4.5H15.1875C15.3367 4.5 15.4798 4.44074 15.5852 4.33525C15.6907 4.22976 15.75 4.08668 15.75 3.9375C15.75 3.78832 15.6907 3.64524 15.5852 3.53975C15.4798 3.43426 15.3367 3.375 15.1875 3.375ZM7.875 11.8125C7.875 11.9617 7.81574 12.1048 7.71025 12.2102C7.60476 12.3157 7.46168 12.375 7.3125 12.375C7.16332 12.375 7.02024 12.3157 6.91475 12.2102C6.80926 12.1048 6.75 11.9617 6.75 11.8125V7.3125C6.75 7.16332 6.80926 7.02024 6.91475 6.91475C7.02024 6.80926 7.16332 6.75 7.3125 6.75C7.46168 6.75 7.60476 6.80926 7.71025 6.91475C7.81574 7.02024 7.875 7.16332 7.875 7.3125V11.8125ZM11.25 11.8125C11.25 11.9617 11.1907 12.1048 11.0852 12.2102C10.9798 12.3157 10.8367 12.375 10.6875 12.375C10.5383 12.375 10.3952 12.3157 10.2898 12.2102C10.1843 12.1048 10.125 11.9617 10.125 11.8125V7.3125C10.125 7.16332 10.1843 7.02024 10.2898 6.91475C10.3952 6.80926 10.5383 6.75 10.6875 6.75C10.8367 6.75 10.9798 6.80926 11.0852 6.91475C11.1907 7.02024 11.25 7.16332 11.25 7.3125V11.8125ZM11.25 3.375H6.75V2.8125C6.75 2.66332 6.80926 2.52024 6.91475 2.41475C7.02024 2.30926 7.16332 2.25 7.3125 2.25H10.6875C10.8367 2.25 10.9798 2.30926 11.0852 2.41475C11.1907 2.52024 11.25 2.66332 11.25 2.8125V3.375Z" fill="#D1D1D1" />
                        </svg>
                        <p>{t('clear_filter')}</p>
                    </button>
                </li>
            </ul>

        </aside>
    );
};

export default Aside;
