import React, { useState } from 'react';

const Modal = () => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close">&times;</button>
        <div className="product-image">
          <img src="/path/to/image" alt="Product" />
        </div>
        <div className="product-details">
          <h2>Аппроксимальный дентин (Approximal Dentine, AD) Creation CC</h2>
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
            </select>
          </div>
          <div className="quantity-control">
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <input type="number" value={quantity} onChange={handleQuantityChange} />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
          </div>
          <button className="buy-button">Купить</button>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur. Eu id sit diam pulvinar. Veit sed vulputate amet nascetur. Morbi cras etiam nisi id cursus nullam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
