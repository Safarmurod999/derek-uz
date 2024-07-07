import ProductCard from '../ProductCard/ProductCard'
// import { productArray } from '../../data/const'

const ProductList = ({productArray}) => {
    return (
        <ul className='product__list'>
            {
                productArray.map((product,index) => {
                    if (index <= 2) {
                        return (
                            <ProductCard key={product.id} item={product} />
                        )
                    }
                })
            }
        </ul>
    )
}

export default ProductList