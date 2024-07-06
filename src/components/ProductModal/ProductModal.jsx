import React, { useState } from 'react';
import product from '../../assets/images/modal-1.png';
import { addToCart } from '../../utils/utils';
const ProductModal = ({ item, closeModal }) => {
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(item.weight[0].value);
  const [color, setColor] = useState(item.color[0].name);

  const handleQuantityChange = (e) => {
    if (quantity > 0) {
      setQuantity(e.target.value);
    } else {
      setQuantity(0);
    }
  };
  const handleChangeBtn = (action) => {
    if (action == "+") {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 0) {
        setQuantity(quantity - 1);
      } else {
        setQuantity(0);
      }
    }
  }
  
  console.log(quantity);
  const handleCart = () => {
    addToCart({
      title: item.title,
      image: item.image,
      price: item.price,
      quantity: quantity,
      content: item.content,
      weight: weight || 10,
      color: color || "A1",
      category: item.category || 0,
    })
  }

  return (
    <div className="modal">
      <div className="container">
        <div className="modal-content">
          <button className="close" onClick={closeModal}>&times;</button>
          <div className="product-image">
            <img src={product} alt="Product" />
          </div>
          <div className="product-details">
            <h2>{item.title}</h2>
            <p>
              Артикул: {item.category}
            </p>
            <span className="price">$ {item.price}</span>
            <div className="color-options">
              <label>Цвет:</label>
              <div className="color-buttons">
                {
                  item.color.map((item, index) => {
                    return <button key={index}
                      onClick={() => setColor(item.name)}
                      className={color === item.name ? 'active' : ''}
                    >
                      {item.name}
                    </button>
                  })
                }
              </div>
            </div>
            <div className="weight-options">
              <label>Масса:</label>
              <select onChange={(e) => setWeight(e.target.value)}>
                {
                  item.weight.map((item, index) => {
                    return <option key={index} value={item.value}>{item.value} g</option>
                  }
                  )
                }
              </select>
            </div>
            <div className="quantity-wrapper">
              <div className="quantity-control">
                <button onClick={() => handleChangeBtn("-")}>-</button>
                <input type="number" min={0} value={quantity} onChange={handleQuantityChange} />
                <button onClick={() => handleChangeBtn("+")}>+</button>
              </div>
              <button className="buy-button" onClick={handleCart}>Купить</button>
            </div>
            <p className="description">
              {item.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
