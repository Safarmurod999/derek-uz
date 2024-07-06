import { toast } from "sonner"
import { addToCart } from "../../utils/utils"

const ProductItem = ({ id, image, title, content, price, color, weight, onClick }) => {

  const handleCart = () => {
    addToCart({ product: id, title, image, price, content, color: color[0].name, weight: weight[0].value })
    toast.success('Product added to cart')
  }
  return (
    <div className='product__slider--item card'>
      <div className="card-image">
        <img src={image} alt="image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{content}</p>
        <p className="card-price">${price}</p>
        <div className="card-actions">
          <button className="card-btn" onClick={handleCart}>В корзину</button>
          <button className="card-btn" onClick={() => onClick({ product: id, image, title, price, color, weight, content })}>Подробнее</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem