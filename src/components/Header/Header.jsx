import { useEffect, useState } from "react"
import logo from "../../assets/icons/logo.svg"
import logo_small from "../../assets/icons/logo-small.svg"
import menu from "../../assets/icons/menu.svg"
import close from "../../assets/icons/close.svg"
import Dropdown from "../Dropdown/Dropdown"
import Cart from "../Cart/Cart"
import { useDispatch, useSelector } from "react-redux"
import { handleDownload } from "../../utils/utils"

import { useTranslation } from "react-i18next"
import { setCart, setIsModalOpen } from "../../store/cartSlice"


const Header = ({ catalog, lang, setLang, cartLength }) => {

  const { t } = useTranslation();

  const dropArray = [
    {
      id: 0,
      title: t('header_1'),
      path: '/company',
      links: [
        { id: 0, title: t('header_3'), path: '/company#history' },
        { id: 1, title: t('header_4'), path: '/company#team' },
        { id: 2, title: t('header_5'), path: '/company#contact' }
      ]
    },
    {
      id: 1,
      title: t('catalogs'),
      path: '/catalog',
      links: [
        { id: 0, title: 'Creation W.G.', path: '/#' },
        { id: 1, title: 'Shera', path: '/#' },
        { id: 2, title: 'Candulor', path: '/#' },
        { id: 3, title: 'Asiga', path: '/#' },
        { id: 4, title: 'Hasbio', path: '/#' },
        { id: 5, title: 'ZirkonZahn', path: '/#' },
      ]
    },
    {
      id: 2,
      title: t('header_2'),
      path: '/#brands',
      links: [
        { id: 0, title: 'CC', path: '/company#history' },
        { id: 1, title: 'ZI-F​', path: '/#' },
        { id: 2, title: 'ZI-CT​', path: '/#' },
        { id: 3, title: 'LS/LS Press​', path: '/#' },
      ]
    }
  ]

  const [openNavbar, setOpenNavbar] = useState(false)
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const controlNavbar = () => {
    setOpenNavbar(false);
    if (typeof window !== "undefined") {
      if (window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const dispatch = useDispatch();
  const { isModalOpen } = useSelector((store) => store.cart);
  const toggleCart = () => {
    dispatch(setCart());
    dispatch(setIsModalOpen(true))
  }

  return (
    <header className={`header`}>
      <nav className="header__nav">
        <div className={`container ${!show && 'shrink'}`}>
          <a aria-label="logo" href="/" className="header__logo">
            <img src={logo} alt="Logo" />
          </a>
          <div className={`header__menu ${openNavbar ? 'open' : ''}`}>
            <div className="header__menu--actions">
              <a aria-label="logo small" href="/"><img src={logo_small} alt="Logo" /></a>
              <button aria-label="close-btn" onClick={() => setOpenNavbar(false)}><img src={close} alt="close" /></button>
            </div>

            {
              dropArray.map((drop) => {
                return <Dropdown key={drop.id} title={drop.title} {...drop} style={'header__menu--item'} setOpenNavbar={setOpenNavbar} />
              })
            }
            <div className="header__menu--item menu--item">
              <a aria-label="menu item" href="https://derek.itlink.uz/media/products/contract_oBYJXbD.pdf" download={'derek-uz'} target="_blank" rel="noopener noreferrer">{t('downloads')}</a>
            </div>
            <div className="header__menu--item menu--item" onClick={() => {
              setOpenNavbar(false);
              toggleCart();
            }}>
              <p>{t('cart')}</p>
            </div>
            <div className="header__menu--language">
              <span>{lang.toUpperCase()}</span>
              <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.221634 0.210935C0.151406 0.277227 0.0956642 0.356098 0.0576245 0.442996C0.0195847 0.529894 -1.9132e-07 0.623101 -1.87205e-07 0.717239C-1.83091e-07 0.811378 0.0195848 0.904584 0.0576245 0.991483C0.0956643 1.07838 0.151406 1.15725 0.221634 1.22354L3.96801 4.78906C4.03767 4.8559 4.12054 4.90895 4.21185 4.94516C4.30315 4.98136 4.40109 5 4.5 5C4.59891 5 4.69685 4.98136 4.78815 4.94516C4.87946 4.90895 4.96233 4.8559 5.03199 4.78906L8.77836 1.22354C8.84859 1.15725 8.90434 1.07838 8.94238 0.991482C8.98042 0.904584 9 0.811377 9 0.717239C9 0.623101 8.98042 0.529894 8.94238 0.442996C8.90434 0.356097 8.84859 0.277227 8.77836 0.210935C8.70871 0.144097 8.62584 0.091046 8.53453 0.0548426C8.44323 0.0186392 8.34529 1.12053e-07 8.24638 1.16376e-07C8.14747 1.207e-07 8.04953 0.0186392 7.95823 0.0548426C7.86692 0.091046 7.78405 0.144097 7.71439 0.210935L4.5 3.27728L1.28561 0.210935C1.21595 0.144097 1.13308 0.0910463 1.04177 0.0548429C0.950468 0.0186395 0.852534 4.39572e-07 0.75362 4.43895e-07C0.654707 4.48219e-07 0.556772 0.0186395 0.465466 0.0548429C0.37416 0.0910463 0.291289 0.144097 0.221634 0.210935Z" fill="#231F20" />
              </svg>
              <ul className="header__language--list">
                <li onClick={() => { localStorage.setItem("lang", "ru"); setLang('ru') }}>RU</li>
                <li onClick={() => { localStorage.setItem("lang", "en"); setLang('en') }}>EN</li>
              </ul>
            </div>
          </div>
          <div className="header__actions">
            <div className="header__actions--button header__language">
              <span>{lang.toUpperCase()}</span>
              <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.221634 0.210935C0.151406 0.277227 0.0956642 0.356098 0.0576245 0.442996C0.0195847 0.529894 -1.9132e-07 0.623101 -1.87205e-07 0.717239C-1.83091e-07 0.811378 0.0195848 0.904584 0.0576245 0.991483C0.0956643 1.07838 0.151406 1.15725 0.221634 1.22354L3.96801 4.78906C4.03767 4.8559 4.12054 4.90895 4.21185 4.94516C4.30315 4.98136 4.40109 5 4.5 5C4.59891 5 4.69685 4.98136 4.78815 4.94516C4.87946 4.90895 4.96233 4.8559 5.03199 4.78906L8.77836 1.22354C8.84859 1.15725 8.90434 1.07838 8.94238 0.991482C8.98042 0.904584 9 0.811377 9 0.717239C9 0.623101 8.98042 0.529894 8.94238 0.442996C8.90434 0.356097 8.84859 0.277227 8.77836 0.210935C8.70871 0.144097 8.62584 0.091046 8.53453 0.0548426C8.44323 0.0186392 8.34529 1.12053e-07 8.24638 1.16376e-07C8.14747 1.207e-07 8.04953 0.0186392 7.95823 0.0548426C7.86692 0.091046 7.78405 0.144097 7.71439 0.210935L4.5 3.27728L1.28561 0.210935C1.21595 0.144097 1.13308 0.0910463 1.04177 0.0548429C0.950468 0.0186395 0.852534 4.39572e-07 0.75362 4.43895e-07C0.654707 4.48219e-07 0.556772 0.0186395 0.465466 0.0548429C0.37416 0.0910463 0.291289 0.144097 0.221634 0.210935Z" fill="#231F20" />
              </svg>
              <ul className="header__language--list">
                <li onClick={() => { localStorage.setItem("lang", "ru"); setLang('ru') }}>RU</li>
                <li onClick={() => { localStorage.setItem("lang", "en"); setLang('en') }}>EN</li>
              </ul>
            </div>
            <button aria-label="action-btn" className="header__actions--button header__actions--item" onClick={(e) => {
              e.preventDefault();
              handleDownload(catalog)
            }}>
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.6806 6.42647H11.0592V1.27941C11.0592 0.713235 10.6003 0.25 10.0394 0.25H5.9605C5.39965 0.25 4.94076 0.713235 4.94076 1.27941V6.42647H3.31938C2.41182 6.42647 1.95293 7.53824 2.59537 8.18677L7.27596 12.9118C7.67366 13.3132 8.31609 13.3132 8.71379 12.9118L13.3944 8.18677C14.0368 7.53824 13.5881 6.42647 12.6806 6.42647ZM0.861816 16.7206C0.861816 17.2868 1.3207 17.75 1.88155 17.75H14.1184C14.6793 17.75 15.1381 17.2868 15.1381 16.7206C15.1381 16.1544 14.6793 15.6912 14.1184 15.6912H1.88155C1.3207 15.6912 0.861816 16.1544 0.861816 16.7206Z" fill="#231F20" />
              </svg>
            </button>
            <button aria-label="action-btn" className="header__actions--button header__actions--item header__download" onClick={() => {
              setOpenNavbar(false);
              toggleCart();
            }}>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.765217 0C0.562269 0 0.367633 0.0790178 0.224127 0.21967C0.080621 0.360322 0 0.551088 0 0.75C0 0.948912 0.080621 1.13968 0.224127 1.28033C0.367633 1.42098 0.562269 1.5 0.765217 1.5H1.1417C1.30787 1.50028 1.46942 1.55357 1.60195 1.6518C1.73448 1.75003 1.83078 1.88788 1.87631 2.0445L4.30358 10.3695C4.44087 10.8393 4.73048 11.2525 5.12864 11.5467C5.5268 11.8409 6.01186 12 6.51047 12H13.503C13.9619 12.0001 14.4103 11.8654 14.7903 11.6132C15.1703 11.3611 15.4645 11.0031 15.6349 10.5855L17.8908 5.0565C17.9835 4.82899 18.018 4.58268 17.9912 4.3391C17.9644 4.09551 17.8771 3.86208 17.737 3.65919C17.5968 3.4563 17.4082 3.29014 17.1874 3.17523C16.9666 3.06032 16.7205 3.00015 16.4705 3H3.7465L3.34706 1.632C3.21012 1.16216 2.92086 0.748779 2.52298 0.454345C2.12511 0.15991 1.64025 0.000426552 1.1417 0H0.765217ZM6.88695 18C7.18842 18 7.48694 17.9418 7.76546 17.8287C8.04398 17.7157 8.29705 17.5499 8.51023 17.341C8.7234 17.1321 8.89249 16.884 9.00786 16.611C9.12323 16.3381 9.18261 16.0455 9.18261 15.75C9.18261 15.4545 9.12323 15.1619 9.00786 14.889C8.89249 14.616 8.7234 14.3679 8.51023 14.159C8.29705 13.9501 8.04398 13.7843 7.76546 13.6713C7.48694 13.5582 7.18842 13.5 6.88695 13.5C6.27811 13.5 5.6942 13.7371 5.26368 14.159C4.83317 14.581 4.5913 15.1533 4.5913 15.75C4.5913 16.3467 4.83317 16.919 5.26368 17.341C5.6942 17.7629 6.27811 18 6.88695 18ZM13.0087 18C13.3102 18 13.6087 17.9418 13.8872 17.8287C14.1657 17.7157 14.4188 17.5499 14.632 17.341C14.8451 17.1321 15.0142 16.884 15.1296 16.611C15.245 16.3381 15.3043 16.0455 15.3043 15.75C15.3043 15.4545 15.245 15.1619 15.1296 14.889C15.0142 14.616 14.8451 14.3679 14.632 14.159C14.4188 13.9501 14.1657 13.7843 13.8872 13.6713C13.6087 13.5582 13.3102 13.5 13.0087 13.5C12.3998 13.5 11.8159 13.7371 11.3854 14.159C10.9549 14.581 10.713 15.1533 10.713 15.75C10.713 16.3467 10.9549 16.919 11.3854 17.341C11.8159 17.7629 12.3998 18 13.0087 18Z" fill="#231F20" />
              </svg>
              {
                cartLength ? <p>{cartLength}</p> : ''
              }
            </button>
            <button aria-label="action-btn" className="header__toggle" onClick={() => setOpenNavbar(true)}>
              <img src={menu} alt="menu" />
            </button>
          </div>
        </div>
      </nav>
      <Cart isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </header>
  )
}

export default Header