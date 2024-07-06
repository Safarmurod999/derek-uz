import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import ProductItem from '../ProductItem/ProductItem'

const ProductSlider = ({productArray,onClick}) => {
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
                                <ProductItem {...product} onClick={onClick} />
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>
        </div >
    )
}

export default ProductSlider