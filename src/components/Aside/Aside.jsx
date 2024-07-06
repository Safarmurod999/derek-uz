import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Aside = ({ toggleFilter, setToggleFilter, setToggleSearch, weights, categories }) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [priceRange, setPriceRange] = useState([
        Number(searchParams.get('from')) || 0,
        Number(searchParams.get('to')) || 100000
    ]);
    const [category, setCategory] = useState(searchParams.get('category') || '');
    const [weight, setWeight] = useState(searchParams.get('weight') ?? []);

    // useEffect(() => {
    //     const params = Object.fromEntries(searchParams.entries());

    //     params.category = category;
    //     params.from = priceRange[0];
    //     params.to = priceRange[1];
    //     if (typeof weight === 'string') {
    //         params.weight = weight;
    //     } else {
    //         params.weight = JSON.stringify(weight);
    //     }
    //     setSearchParams(params);
    // }, [category, priceRange, weight]);

    const handleCategory = (_category) => {
        if (_category == category) {
            setCategory('');
            setSearchParams({ category: '', from: priceRange[0], to: priceRange[1], weight: JSON.stringify(weight) });
        } else {
            setCategory(_category);
            setSearchParams({ category: _category, from: priceRange[0], to: priceRange[1], weight: JSON.stringify(weight) });
        }
    }
    const handlePriceChange = (value) => {
        setPriceRange(value);
        setSearchParams({ category: category, from: priceRange[0], to: priceRange[1], weight: JSON.stringify(weight) });
    };
    const handleWeight = (newWeight) => {
        if (typeof weight === 'string') {
            var weightArray = JSON.parse(weight);
        } else {
            var weightArray = weight;
        }
        if (!weightArray.includes(newWeight)) {
            weightArray.push(newWeight)
            setWeight(weightArray);
            setSearchParams({ category: category, from: priceRange[0], to: priceRange[1], weight: JSON.stringify(weightArray) });
        } else {
            weightArray = weightArray.filter((item) => item !== newWeight);
            console.log(weightArray);
            setWeight(weightArray);
            setSearchParams({ category: category, from: priceRange[0], to: priceRange[1], weight: JSON.stringify(weightArray) });
        }
    }
    const handleCheck = (value) => {
        const params = Object.fromEntries(searchParams.entries());
        let isExist = false;
        let arr = params.weight ? JSON.parse(params.weight) : []
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
                    <p>Все</p>
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
                    <p>Цена</p>
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
                    <p>Масса</p>
                    <ul>
                        {
                            weights.map((_weight) => (
                                <li key={_weight.id}>
                                    <input type="checkbox" name="check" id={`weight_${_weight.id}`} checked={handleCheck(_weight.id)} onChange={() => handleWeight(_weight.id)} />
                                    <label htmlFor={`weight_${_weight.id}`}>{_weight.value} г.</label>
                                </li>
                            )
                            )
                        }
                    </ul>
                </li>
            </ul>

        </aside>
    );
};

export default Aside;
