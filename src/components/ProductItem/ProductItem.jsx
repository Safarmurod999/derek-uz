import { toast } from "sonner"
import { addToCart } from "../../utils/utils"
import i18n from "../../utils/i18n"
import { useTranslation } from "react-i18next";

const ProductItem = ({ item, onClick }) => {

  const lang = i18n.language;
  const { t } = useTranslation();
  const handleCart = () => {
    addToCart({
      product: item.id,
      title: item.title,
      title_ru: item.title_ru,
      title_en: item.title_en,
      content: item.content,
      content_ru: item.content_ru,
      content_en: item.content_en,
      image: item.image,
      price: item.price,
      color: item.color[0].name,
      weight: item.weight[0].value,
      category: item.category
    })
    toast.success('Product added to cart', {
      duration: 1500
    })
  }

  return (
    <div className='product__slider--item card'>
      <div className="card-image">
        <img src={item.image} alt="image" />
      </div>
      <div className="card-content">
        <h3 className="card-title">{lang == 'ru' ? item.title : item[`title_${lang}`]}</h3>
        <p className="card-text">{lang == 'ru' ? item.content : item[`content_${lang}`]}</p>
        <p className="card-price">${item.price}</p>
        <div className="card-actions">
          <button className="card-btn" onClick={handleCart}>{t('add_cart')}</button>
          <button className="card-btn" onClick={() => onClick({
            product: item.id,
          })}>{t('more')}</button>
        </div>
      </div>
    </div>
  )
}

export default ProductItem