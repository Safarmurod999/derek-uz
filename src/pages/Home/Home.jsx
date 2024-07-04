import { Link } from "react-router-dom"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import { Autoplay, EffectFade } from 'swiper/modules';

// Images
import home_main from '../../assets/images/home-1.png'
import home_2 from '../../assets/images/home-2.png';
import about_1 from '../../assets/images/about-1.png';
import about_2 from '../../assets/images/about-2.png';

// Components
import { Title, TopLink, ProductList, ProductSlider, BrandList, Accordion, Spinner } from "../../components/index"
import { useState } from "react";
import ProductModal from "../../components/ProductModal/ProductModal";

// Fetching data
import useFetchMultipleAPIs from "../../utils/utils";
import { accordionArray } from "../../data/const";

const Home = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const urls = [
    '/banners',
    '/products-list',
    '/brands',
    '/faqs',
    '/categories',
    '/products-color',
    '/products-weight',
  ];

  const { data, loading, error } = useFetchMultipleAPIs(urls);

  if (loading) return <Spinner position={"full"} />;
  if (error) return <div>Error: {error.message}</div>;

  if (data) {
    var productsArray = data[1]?.results;
    let categories = data[4];
    let colors = data[5];
    let weights = data[6];

    const getColors = (_colors) => {
      return _colors.map(
        (color) => colors.find((item) => item == color)
      );
    }

    const getWeights = (_weights) => {
      return _weights.map(
        (weight) => weights.find((item) => item.id == weight)
      )
    }
  
    productsArray = productsArray.map((product) => {
      const category = categories.find(category => category.id == product.category);
  
      return {
        ...product,
        category: category ? category.name : "No category",
        color: getColors(product.color),
        weight: getWeights(product.weight),
      }
    });
    console.log(productsArray);
  }

  return (
    !loading && (
      <>
        <button style={{ position: "absolute", zIndex: "1000" }} onClick={openModal}>Open Modal</button>
        {isModalOpen && <ProductModal closeModal={closeModal} />}
        {/* Home */}
        <section id="home" className="home">
          <div className="container">
            <svg className="home__top" width="1120" height="57" viewBox="0 0 1120 57" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M178.5 3.5L173.5 1.5L169.5 0.5L165 0H953L950.5 0.5L946.5 1.5L943.5 2.5L940 4.5L937 6.5L934.5 8.5L930 13L908.5 36L901.5 43L897 47.5L893 51L888 54L882.5 55.5L875 56.5H777H480H366.5H260.5H241L233 54.5L226 50.5L220.5 45L208 32L200 23.5L190.5 14L184.5 8L178.5 3.5Z" fill="white" />
            </svg>

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
              </SwiperSlide>
              <SwiperSlide>
                <div className="home__image">
                  <img src={home_2} alt="image" />
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
              </SwiperSlide>
              <SwiperSlide>
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
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        {/* Bestsellers */}
        <section id="bestsellers" className="bestsellers">
          <div className="container">
            <Title>
              Бест селлер
            </Title>
            <ProductList productArray={data[1]?.results} />
          </div>
        </section>

        {/* Products */}
        <section id="products" className="products">
          <div className="container">
            <div className="products__top">
              <Title>ТОВАРЫ</Title>
              <TopLink title={'Все товары'} link={'/catalog'} />
            </div>
            <ProductSlider productArray={data[1]?.results} />
          </div>
        </section>

        {/* Brands */}
        <section id="brands" className="brands">
          <div className="container">
            <div className="brands__top">
              <Title>БРЕНДЫ</Title>
              <TopLink title={'Все бренды'} link={'/brands'} />
            </div>
            <BrandList brandArray={data[2]} />
          </div>
        </section>

        {/* About */}
        <section id="about" className="about">
          <div className="container">
            <div className="about__main">
              <div className="about__title">
                Lorem ipsum lorem ipsum lorem
              </div>
              <p className="about__text">
                Lorem ipsum dolor sit amet consectetur. Nunc varius
                sit non venenatis dignissim felis phasellus.
                Lobortis amet nunc aliquam tincidunt purus sed faucibus.
              </p>
              <Link to={'/company'} className="about__btn">
                Подробнее
              </Link>
            </div>
            <div className="about__images">
              <div className="about__images--text">
                <p>Lorem ipsum dolor sit amet consectetur. Nunc varius
                  sit non venenatis dignissim felis phasellus.
                  Lobortis amet nunc aliquam tincidunt purus sed faucibus. </p>
              </div>
              <div className="about__images--wrapper">
                <div className="about__image">
                  <img src={about_1} alt="" />
                </div>
                <div className="about__image">
                  <img src={about_2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="faq">
          <div className="container">
            <Title>
              ЧАСТО ЗАДАВАЕМЫЕ ВОПРОСЫ
            </Title>
            <Accordion accordionArray={data[3]} />
          </div>
        </section>
      </>
    )
  )
}

export default Home