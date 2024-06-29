
const ProductItem = ({ img, title, description, price }) => {
  return (
    <div className='product__slider--item card'>
      <div className="card-image">
        <img src={img} alt="image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{description}</p>
        <p className="card-price">${price}</p>
        <div className="card-actions">
          <button className="card-btn">В корзину</button>
          <button className="card-btn">Подробнее</button>
        </div>
      </div>

    </div>
  )
}

export default ProductItem