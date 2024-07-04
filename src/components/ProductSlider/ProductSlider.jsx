import { Swiper, SwiperSlide } from 'swiper/react';
// import { productArray } from '../../data/const'
import 'swiper/css';

// Import Swiper styles

import ProductItem from '../ProductItem/ProductItem'

const ProductSlider = ({productArray}) => {
    return (
        <div className='product__slider'>
            <Swiper
                spaceBetween={11}
                slidesPerView={5}
                breakpoints={
                    {
                        0: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 3
                        },
                        1024: {
                            slidesPerView: 4
                        },
                        1100: {
                            slidesPerView: 5
                        }
                    }
                }
            >
                {
                    productArray.map((product) => {
                        return (
                            <SwiperSlide key={product.id}>
                                <ProductItem {...product} />
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>
        </div >
    )
}

export default ProductSlider