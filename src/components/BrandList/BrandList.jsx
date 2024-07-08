
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const BrandList = ({ brandArray }) => {
    return (
        <div className="brand__list">
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={20}
                breakpoints={
                    {
                        0: {
                            spaceBetween: 10
                        },
                        768: {
                            spaceBetween: 15
                        },
                        1024: {
                            spaceBetween: 20
                        },
                    }
                }
            >
                {
                    brandArray.map((brand) => {
                        return (
                            <SwiperSlide key={brand.id}>
                                <div key={brand.id} className="brand__list--item">
                                    <img src={brand.brands} alt={brand.name} />
                                </div>
                            </SwiperSlide>

                        )
                    })
                }
            </Swiper>
        </div>
    )
}

export default BrandList