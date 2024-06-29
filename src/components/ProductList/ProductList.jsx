import ProductCard from '../ProductCard/ProductCard'
import { productArray } from '../../data/const'

const ProductList = () => {
    return (
        <ul className='product__list'>
            {
                productArray.map((product) => {
                    if (product.id <= 2) {
                        return (
                            <ProductCard key={product.id} {...product} />
                        )
                    }
                })
            }
        </ul>
    )
}

export default ProductList