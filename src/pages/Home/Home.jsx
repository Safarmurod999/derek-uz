import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Autoplay, EffectFade } from 'swiper/modules';

import home_main from '../../assets/images/home-1.png'
import home_2 from '../../assets/images/home-2.png';

const Home = () => {
  return (
    <section className="home">
      {/* <svg className="home__top" width="795" height="57"
        viewBox="0 0 795 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 1L0 0H788L785.5 0.5L781.5 1.5L778.5 2.5L775 4.5L772 6.5L769.5 8.5L765 13L743.5 36L736.5 43L732 47.5L728 51L723 54L717.5 55.5L710 56.5H612H315H201.5H95.5H76L68 54.5L61 50.5L55.5 45L43 32L35 23.5L25.5 14L19.5 8L13.5 3.5L8.5 1Z" fill="white" />
      </svg> */}
      <svg className="home__top" width="1120" height="57" viewBox="0 0 1120 57" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M178.5 3.5L173.5 1.5L169.5 0.5L165 0H953L950.5 0.5L946.5 1.5L943.5 2.5L940 4.5L937 6.5L934.5 8.5L930 13L908.5 36L901.5 43L897 47.5L893 51L888 54L882.5 55.5L875 56.5H777H480H366.5H260.5H241L233 54.5L226 50.5L220.5 45L208 32L200 23.5L190.5 14L184.5 8L178.5 3.5Z" fill="white" />
      </svg>

      <div className="container">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          effect="fade"
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, EffectFade]}
          className="mySwiper"
        >
          <SwiperSlide>
            {/* <div className="container"> */}
            <div className="home__image">
              <img src={home_main} alt="" />
            </div>
            <div className="home__main">
              <div className="home__title">
                Lorem ipsum lorem ipsum lorem ipsum lorem
              </div>
              <p className="home__text">
                Lorem ipsum lorem ipsum lorem ipsum lorem
              </p>
              <Link to={'/catalog'} className="home__btn">
                Каталог
              </Link>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="container"> */}
            <div className="home__image">
              <img src={home_2} alt="" />
            </div>
            <div className="home__main">
              <div className="home__title">
                Lorem ipsum lorem ipsum lorem ipsum lorem
              </div>
              <p className="home__text">
                Lorem ipsum lorem ipsum lorem ipsum lorem
              </p>
              <Link to={'/catalog'} className="home__btn">
                Каталог
              </Link>
            </div>
            {/* </div> */}
          </SwiperSlide>
          <SwiperSlide>
            {/* <div className="container"> */}
            <div className="home__image">
              <img src={home_main} alt="" />
            </div>
            <div className="home__main">
              <div className="home__title">
                Lorem ipsum lorem ipsum lorem ipsum lorem
              </div>
              <p className="home__text">
                Lorem ipsum lorem ipsum lorem ipsum lorem
              </p>
              <Link to={'/catalog'} className="home__btn">
                Каталог
              </Link>
            </div>
            {/* </div> */}
          </SwiperSlide>
        </Swiper>
      </div>
      <section className="home">
        <div className="container">
          {/* <svg className="home__top" width="795" height="57" viewBox="0 0 795 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 1L0 0H788L785.5 0.5L781.5 1.5L778.5 2.5L775 4.5L772 6.5L769.5 8.5L765 13L743.5 36L736.5 43L732 47.5L728 51L723 54L717.5 55.5L710 56.5H612H315H201.5H95.5H76L68 54.5L61 50.5L55.5 45L43 32L35 23.5L25.5 14L19.5 8L13.5 3.5L8.5 1Z" fill="white" />
        </svg> */}

          <div className="home__image">
            <img src={home_main} alt="" />
          </div>
          <div className="home__main">
            <div className="home__title">
              Lorem ipsum lorem ipsum lorem ipsum lorem
            </div>
            <p className="home__text">
              Lorem ipsum lorem ipsum lorem ipsum lorem
            </p>
            <Link to={'/catalog'} className="home__btn">
              Каталог
            </Link>
          </div>
        </div>
      </section>
      <section className="home">
        <div className="container">
          {/* <svg className="home__top" width="795" height="57" viewBox="0 0 795 57" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8.5 1L0 0H788L785.5 0.5L781.5 1.5L778.5 2.5L775 4.5L772 6.5L769.5 8.5L765 13L743.5 36L736.5 43L732 47.5L728 51L723 54L717.5 55.5L710 56.5H612H315H201.5H95.5H76L68 54.5L61 50.5L55.5 45L43 32L35 23.5L25.5 14L19.5 8L13.5 3.5L8.5 1Z" fill="white" />
        </svg> */}

          <div className="home__image">
            <img src={home_main} alt="" />
          </div>
          <div className="home__main">
            <div className="home__title">
              Lorem ipsum lorem ipsum lorem ipsum lorem
            </div>
            <p className="home__text">
              Lorem ipsum lorem ipsum lorem ipsum lorem
            </p>
            <Link to={'/catalog'} className="home__btn">
              Каталог
            </Link>
          </div>
        </div>
      </section>
    </section>


  )
}

export default Home