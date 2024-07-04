import { addToCart } from "../../utils/utils"

const ProductItem = ({ image, title, content, price }) => {
  const handleCart = ()=>{
    addToCart({title, image, price, content})
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
          <button className="card-btn">Подробнее</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem