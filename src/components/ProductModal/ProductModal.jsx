import React, { useState } from 'react';
import product from '../../assets/images/modal-1.png';
const ProductModal = ({ closeModal }) => {
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className="modal">
      <div className="container">
        <div className="modal-content">
          <button className="close" onClick={closeModal}>&times;</button>
          <div className="product-image">
            <img src={product} alt="Product" />
          </div>
          <div className="product-details">
            <h2>Аппроксимальный дентин (Approximal Dentine, AD) Creation CC</h2>
            <p>
              Артикул: SKU001-1
            </p>
            <span className="price">$10</span>
            <div className="color-options">
              <label>Цвет:</label>
              <div className="color-buttons">
                <button>A1</button>
                <button>A2</button>
                <button>A3</button>
                <button>A4</button>
                <button>A5</button>
              </div>
            </div>
            <div className="weight-options">
              <label>Масса:</label>
              <select>
                <option value="15">15 грамм</option>
                <option value="10">10 грамм</option>
              </select>
            </div>
            <div className="quantity-wrapper">
              <div className="quantity-control">
                <button onClick={() => handleChangeBtn("-")}>-</button>
                <input type="number" min={0} value={quantity} onChange={handleQuantityChange} />
                <button onClick={() => handleChangeBtn("+")}>+</button>
              </div>
              <button className="buy-button">Купить</button>
            </div>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur. Eu id sit diam pulvinar. Veit sed vulputate amet nascetur. Morbi cras etiam nisi id cursus nullam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
