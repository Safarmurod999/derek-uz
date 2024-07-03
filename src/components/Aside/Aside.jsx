// import React, { useState } from 'react'
// import { useNavigate, useSearchParams } from 'react-router-dom';
// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';
// const Aside = () => {
//     const navigate = useNavigate();
//     const [searchParams, setSearchParams] = useSearchParams();
//     const [priceRange, setPriceRange] = useState([searchParams.get('from') || 0, searchParams.get('to') || 100]);
//     // const [product, setProduct] = useState(searchParams.get('product') || '');

//     const handleChange = (value) => {
//         setPriceRange(value);
//         const query = new URLSearchParams({ from: value[0], to: value[1] }).toString();
//         setSearchParams(query)
//     };
//     // const handleProductChange = (product) => {
//     //     setProduct(product);
//     //     const query = new URLSearchParams({ product: product }).toString();
//     //     setSearchParams(query)
//     // }
//     return (
//         <aside className='aside'>
//             <ul className='aside__list'>
//                 <li className='aside__list--item'>
//                     <p>Все</p>
//                     <ul>
//                         <li>Creation</li>
//                         <li>Shera</li>
//                         <li>Candulor</li>
//                     </ul>
//                 </li>
//                 <li className='aside__list--item'>
//                     <p>Товар</p>
//                     <ul>
//                         <li>
//                             <input type="checkbox" name="check" id="" />
//                             <p>Lorem ipsum</p>
//                         </li>
//                         <li>
//                             <input type="checkbox" name="check" id="" />
//                             <p>Lorem ipsum</p>
//                         </li>
//                         <li>
//                             <input type="checkbox" name="check" id="" />
//                             <p>Lorem ipsum</p>
//                         </li>
//                     </ul>
//                 </li>
//                 <li className='aside__list--item'>
//                     <p>Цена</p>
//                     <div>
//                         <div>
//                             <Slider
//                                 range
//                                 min={0}
//                                 max={100}
//                                 defaultValue={priceRange}
//                                 // value={priceRange}
//                                 onChange={handleChange}
//                             />
//                         </div>
//                         <div className='aside__price--input'>
//                             <input
//                                 type="number"
//                                 value={priceRange[0]}
//                                 min={0}
//                                 max={100}
//                                 onChange={(e) => handleChange([+e.target.value, priceRange[1]])}
//                             />
//                             <input
//                                 type="number"
//                                 value={priceRange[1]}
//                                 min={0}
//                                 max={100}
//                                 onChange={(e) => handleChange([priceRange[0], +e.target.value])}
//                             />
//                         </div>
//                     </div>
//                 </li>
//                 <li className='aside__list--item'>
//                     <p>Масса</p>
//                     <ul>
//                         <li>
//                             <input type="checkbox" name="check" id="" />
//                             <p>10 г.</p>
//                         </li>
//                         <li>
//                             <input type="checkbox" name="check" id="" />
//                             <p>15 г.</p>
//                         </li>
//                     </ul>
//                 </li>
//             </ul>
//         </aside>
//     )
// }

// export default Aside














import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const Aside = ({ toggleFilter, setToggleFilter }) => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    const [priceRange, setPriceRange] = useState([
        Number(searchParams.get('from')) || 0,
        Number(searchParams.get('to')) || 100
    ]);

    const [product, setProduct] = useState(searchParams.get('product') || '');

    useEffect(() => {
        const params = Object.fromEntries(searchParams.entries());
        if (product) params.product = product;
        params.from = priceRange[0];
        params.to = priceRange[1];
        setSearchParams(params);
    }, [product, priceRange]);

    const handlePriceChange = (value) => {
        setPriceRange(value);
    };

    const handleProductChange = (product) => {
        setProduct(product);
    };

    return (
        <aside className={`aside ${toggleFilter ? 'toggle' : ''}`}>
            <div className='aside_toggle'>
                <button className="aside__toggle--btn" onClick={()=>setToggleFilter(!toggleFilter)}>
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
                        <li>Creation</li>
                        <li>Shera</li>
                        <li>Candulor</li>
                    </ul>
                </li>
                <li className='aside__list--item'>
                    <p>Товар</p>
                    <ul>
                        <li>
                            <input
                                type="checkbox"
                                name="product"
                                value="product1"
                                checked={product === 'product1'}
                                onChange={(e) => handleProductChange(e.target.checked ? e.target.value : '')}
                            />
                            <p>Product 1</p>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                name="product"
                                value="product2"
                                checked={product === 'product2'}
                                onChange={(e) => handleProductChange(e.target.checked ? e.target.value : '')}
                            />
                            <p>Product 2</p>
                        </li>
                        <li>
                            <input
                                type="checkbox"
                                name="product"
                                value="product3"
                                checked={product === 'product3'}
                                onChange={(e) => handleProductChange(e.target.checked ? e.target.value : '')}
                            />
                            <p>Product 3</p>
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
                                value={priceRange}
                                onChange={handlePriceChange}
                            />
                        </div>
                        <div className='aside__price--input'>
                            <input
                                type="number"
                                value={priceRange[0]}
                                min={0}
                                max={100}
                                onChange={(e) => handlePriceChange([+e.target.value, priceRange[1]])}
                            />
                            <input
                                type="number"
                                value={priceRange[1]}
                                min={0}
                                max={100}
                                onChange={(e) => handlePriceChange([priceRange[0], +e.target.value])}
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
    );
};

export default Aside;
