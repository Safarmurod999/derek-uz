import React, { useState } from 'react';
import { addToCart, useFetch } from '../../utils/utils';
import i18n from '../../utils/i18n';
import { useTranslation } from 'react-i18next';
import Spinner from '../Spinner/Spinner';
import { toast } from 'sonner';
import { setCart, setIsModalOpen } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
const ProductModal = ({ item, closeModal }) => {
  const lang = i18n.language;
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { cart } = useSelector((store) => store.cart);
  const { data: product, loading, error } = useFetch(`/products-detail/${item.product}/`)
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState(null);
  const [color, setColor] = useState(null);

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleChangeBtn = (action) => {
    if (action == "+") {

      if (product.stock > quantity) {
        setQuantity(quantity => quantity + 1);
      }

    } else {
      if (quantity > 1) {

        setQuantity(quantity => quantity - 1);

      } else {
        setQuantity(1);
      }
    }
  }
  const handleChangeWeight = (e) => {
    setWeight(e.target.value)
  }

  if (loading) {
    return <Spinner position={'full'} />
  }
  if (error) {
    console.log(error);
  }

  return (
    !loading && product && (<div className="modal">
      <div className="container">
        <div className="modal-content">
          <button aria-label='close-btn' className="close" onClick={closeModal}>&times;</button>
          <div className="product-image">
            <img src={product.image} alt="Product" />
          </div>
          <div className="product-details">
            <h2>{lang == 'ru' ? product.title : item[`title_${lang}`]}</h2>
            <p>
              {t('articles')}: {product.artikul}
            </p>
            <span className="price">$ {product.price}</span>
            <div className="color-options">
              {
                product?.color.length > 0 && (<>
                  <label>{t('color')}</label>
                  <div className="color-buttons">
                    {
                      product.color.map((item, index) => {
                        return <button aria-label='color-btn' key={index}
                          onClick={() => setColor(item.name)}
                          className={color == item.name ? 'active' : ''}
                        >
                          {item.name}
                        </button>
                      })
                    }
                  </div>
                </>)
              }
            </div>
            <div className="weight-options">
              {
                product?.weight.length > 0 && (
                  <>
                    <label>{t('weight')}</label>
                    <select onChange={handleChangeWeight}>
                      {
                        product.weight.map((item, index) => {
                          return <option key={index} value={item.value}>{item.value} {lang == 'ru' ? 'г' : 'g'}</option>
                        }
                        )
                      }
                    </select>
                  </>
                )
              }
            </div>
            <div className="quantity-wrapper">
              <div className="quantity-control">
                <button aria-label='minus-btn' disabled={product.stock <= 0} onClick={() => handleChangeBtn("-")}>-</button>
                <input type="number" min={0} disabled={product.stock <= 0} value={quantity} onChange={handleQuantityChange} />
                <button aria-label='plus-btn' disabled={product.stock <= 0} onClick={() => handleChangeBtn("+")}>+</button>
              </div>
              <button aria-label='buy-btn' className="buy-button" onClick={() => {
                addToCart({
                  product: product.id,
                  title: product?.title || '',
                  title_ru: product?.title_ru || '',
                  title_en: product?.title_en || '',
                  image: product?.image || '',
                  price: product?.price || 0,
                  quantity: quantity,
                  content: product?.content || '',
                  content_ru: product?.content_ru || '',
                  content_en: product?.content_en || '',
                  weight: weight ?? product?.weight[0]?.value ?? 0,
                  color: color ?? product?.color[0]?.name ?? '',
                  category: product?.category || 0,
                  artikul: product?.artikul || '',
                  stock: product?.stock || 0
                })
                closeModal();
                toast.success(t('product_added'), {
                  duration: 1500
                })
                dispatch(setCart())
                dispatch(setIsModalOpen(true));
              }} disabled={product.stock <= 0 || cart.find(item => item.product == product.id)?.stock == 1}>{t('buy')}</button>
            </div>
            <p className="description">
              {lang == 'ru' ? product.content : item[`content_${lang}`]}
            </p>
          </div>
        </div>
      </div>
    </div>)
  );
};

export default ProductModal;
