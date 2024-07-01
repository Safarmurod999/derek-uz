import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
const Aside = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const [priceRange, setPriceRange] = useState([searchParams.get('from') || 0, searchParams.get('to') || 100]);
    // const [product, setProduct] = useState(searchParams.get('product') || '');

    const handleChange = (value) => {
        setPriceRange(value);
        const query = new URLSearchParams({ from: value[0], to: value[1] }).toString();
        setSearchParams(query)
    };
    // const handleProductChange = (product) => {
    //     setProduct(product);
    //     const query = new URLSearchParams({ product: product }).toString();
    //     setSearchParams(query)
    // }
    return (
        <aside className='aside'>
            <ul className='aside__list'>
                <li className='aside__list--item'>
                    <p>Все</p>
                    <ul>
                        <li>Creation</li>
                        <li>Shera</li>
                        <li>Candulor</li>
                    </ul>
                </li>
                <li className='aside__list--item'>
                    <p>Товар</p>
                    <ul>
                        <li>
                            <input type="checkbox" name="check" id="" />
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <input type="checkbox" name="check" id="" />
                            <p>Lorem ipsum</p>
                        </li>
                        <li>
                            <input type="checkbox" name="check" id="" />
                            <p>Lorem ipsum</p>
                        </li>
                    </ul>
                </li>
                <li className='aside__list--item'>
                    <p>Цена</p>
                    <div>
                        <div>
                            <Slider
                                range
                                min={0}
                                max={100}
                                defaultValue={priceRange}
                                // value={priceRange}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='aside__price--input'>
                            <input
                                type="number"
                                value={priceRange[0]}
                                min={0}
                                max={100}
                                onChange={(e) => handleChange([+e.target.value, priceRange[1]])}
                            />
                            <input
                                type="number"
                                value={priceRange[1]}
                                min={0}
                                max={100}
                                onChange={(e) => handleChange([priceRange[0], +e.target.value])}
                            />
                        </div>
                    </div>
                </li>
                <li className='aside__list--item'>
                    <p>Масса</p>
                    <ul>
                        <li>
                            <input type="checkbox" name="check" id="" />
                            <p>10 г.</p>
                        </li>
                        <li>
                            <input type="checkbox" name="check" id="" />
                            <p>15 г.</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </aside>
    )
}

export default Aside