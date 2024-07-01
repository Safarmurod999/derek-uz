import React from 'react'
import {productArray} from "../../data/const";
import Aside from '../../components/Aside/Aside'
import ProductItem from '../../components/ProductItem/ProductItem'
const Catalog = () => {
    return (
        <main className='catalog'>
            <div className="container">
                <Aside />
                <section className='catalog__section'>
                    {
                        productArray.map((product) => {
                            return (
                                <ProductItem key={product.id} {...product} />
                            )
                        })
                    }
                </section>
            </div>
        </main>
    )
}

export default Catalog