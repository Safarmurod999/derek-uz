import { useTranslation } from "react-i18next";
import logo from "../../assets/icons/logo.svg";
const Footer = () => {
  const { t } = useTranslation();
  const dropArray = [
    {
      id: 0,
      title: t('header_1'),
      path: '/company',
      links: [
        { id: 0, title: t('header_3'), path: '/company#history' },
        { id: 1, title: t('header_5'), path: '/company#contact' }
      ]
    },
    {
      id: 1,
      title: t('catalogs'),
      path: '/catalog',
      links: [
        { id: 0, title: 'Creation W.G.', path: '/catalog?category=22' },
        { id: 1, title: 'Shera', path: '/catalog?category=39' },
        { id: 2, title: 'Candulor', path: '/catalog?category=25' },
        { id: 3, title: 'Asiga', path: '/catalog?category=12' },
        { id: 4, title: 'Hasbio', path: '/catalog?category=4' },
        { id: 5, title: 'ZirkonZahn', path: '/catalog?category=2' },
      ]
    },
    {
      id: 2,
      title: t('header_2'),
      path: '/#brands',
      links: [
        { id: 0, title: 'CC', path: '/#brands' },
        { id: 1, title: 'ZI-F​', path: '/#brands' },
        { id: 2, title: 'ZI-CT​', path: '/#brands' },
        { id: 3, title: 'LS/LS Press​', path: '/#brands' },
      ]
    }
  ]
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div>
          <a aria-label="derek main" href="/"><img src={logo} alt="logo" className="footer__logo" /></a>
          <p className="footer__description">
            {t('footer_about')}
          </p>
        </div>
        <ul className="footer__list">
          {
            dropArray.map((item, _index) => {
              return (
                <li key={_index} className="footer__list--item">
                  <a aria-label="footer" href={item.path}>{item.title}</a>
                  <ul className="footer__links">
                    {
                      item.links.map((link, index) => {
                        return (
                          <li key={index}>
                            <a aria-label="footer-link" href={link.path}>{link.title}</a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </li>
              )
            })
          }

        </ul>
        <div className="footer__contacts">
          <div className="footer__contacts--col">
            <div className="footer__contacts--icons">
              <a aria-label="derek instagram" href="/">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.86109 3.60547C8.58375 3.60547 10.0056 5.02734 10.0056 6.75C10.0056 8.5 8.58375 9.89453 6.86109 9.89453C5.11109 9.89453 3.71656 8.5 3.71656 6.75C3.71656 5.02734 5.11109 3.60547 6.86109 3.60547ZM6.86109 8.80078C7.98218 8.80078 8.88453 7.89844 8.88453 6.75C8.88453 5.62891 7.98218 4.72656 6.86109 4.72656C5.71265 4.72656 4.81031 5.62891 4.81031 6.75C4.81031 7.89844 5.74 8.80078 6.86109 8.80078ZM10.8533 3.49609C10.8533 3.90625 10.5252 4.23438 10.115 4.23438C9.70484 4.23438 9.37671 3.90625 9.37671 3.49609C9.37671 3.08594 9.70484 2.75781 10.115 2.75781C10.5252 2.75781 10.8533 3.08594 10.8533 3.49609ZM12.9314 4.23438C12.9861 5.24609 12.9861 8.28125 12.9314 9.29297C12.8767 10.2773 12.658 11.125 11.947 11.8633C11.2361 12.5742 10.3611 12.793 9.37671 12.8477C8.365 12.9023 5.32984 12.9023 4.31812 12.8477C3.33375 12.793 2.48609 12.5742 1.74781 11.8633C1.03687 11.125 0.81812 10.2773 0.763433 9.29297C0.708745 8.28125 0.708745 5.24609 0.763433 4.23438C0.81812 3.25 1.03687 2.375 1.74781 1.66406C2.48609 0.953125 3.33375 0.734375 4.31812 0.679688C5.32984 0.625 8.365 0.625 9.37671 0.679688C10.3611 0.734375 11.2361 0.953125 11.947 1.66406C12.658 2.375 12.8767 3.25 12.9314 4.23438ZM11.6189 10.3594C11.947 9.56641 11.865 7.65234 11.865 6.75C11.865 5.875 11.947 3.96094 11.6189 3.14062C11.4002 2.62109 10.99 2.18359 10.4705 1.99219C9.65015 1.66406 7.73609 1.74609 6.86109 1.74609C5.95875 1.74609 4.04468 1.66406 3.25171 1.99219C2.70484 2.21094 2.29468 2.62109 2.07593 3.14062C1.74781 3.96094 1.82984 5.875 1.82984 6.75C1.82984 7.65234 1.74781 9.56641 2.07593 10.3594C2.29468 10.9062 2.70484 11.3164 3.25171 11.5352C4.04468 11.8633 5.95875 11.7812 6.86109 11.7812C7.73609 11.7812 9.65015 11.8633 10.4705 11.5352C10.99 11.3164 11.4275 10.9062 11.6189 10.3594Z" fill="#111111" />
                </svg>
              </a>
              <a aria-label="derek facebook" href="/">
                <svg width="9" height="15" viewBox="0 0 9 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.96596 8.625H5.91518V14.75H3.1808V8.625H0.938613V6.10938H3.1808V4.16797C3.1808 1.98047 4.4933 0.75 6.48939 0.75C7.44643 0.75 8.45814 0.941406 8.45814 0.941406V3.10156H7.33705C6.2433 3.10156 5.91518 3.75781 5.91518 4.46875V6.10938H8.34877L7.96596 8.625Z" fill="#111111" />
                </svg>

              </a>
              <a aria-label="derek youtube" href="/">
                <svg width="16" height="11" viewBox="0 0 16 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.8828 2.16797C15.2109 3.31641 15.2109 5.77734 15.2109 5.77734C15.2109 5.77734 15.2109 8.21094 14.8828 9.38672C14.7187 10.043 14.1992 10.5352 13.5703 10.6992C12.3945 11 7.74607 11 7.74607 11C7.74607 11 3.07029 11 1.8945 10.6992C1.2656 10.5352 0.746067 10.043 0.582005 9.38672C0.25388 8.21094 0.25388 5.77734 0.25388 5.77734C0.25388 5.77734 0.25388 3.31641 0.582005 2.16797C0.746067 1.51172 1.2656 0.992188 1.8945 0.828125C3.07029 0.5 7.74607 0.5 7.74607 0.5C7.74607 0.5 12.3945 0.5 13.5703 0.828125C14.1992 0.992188 14.7187 1.51172 14.8828 2.16797ZM6.21482 7.99219L10.0976 5.77734L6.21482 3.5625V7.99219Z" fill="#111111" />
                </svg>
              </a>
              <a aria-label="derek linkedin" href="/">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.26075 13H0.717778V4.82422H3.26075V13ZM1.97559 3.73047C1.18262 3.73047 0.526372 3.04688 0.526372 2.22656C0.526372 1.43359 1.18262 0.777344 1.97559 0.777344C2.7959 0.777344 3.45215 1.43359 3.45215 2.22656C3.45215 3.04688 2.7959 3.73047 1.97559 3.73047ZM12.749 13H10.2334V9.03516C10.2334 8.07812 10.2061 6.875 8.89356 6.875C7.58106 6.875 7.38965 7.88672 7.38965 8.95312V13H4.84668V4.82422H7.28028V5.94531H7.30762C7.66309 5.31641 8.4834 4.63281 9.71387 4.63281C12.2842 4.63281 12.7764 6.32812 12.7764 8.51562V13H12.749Z" fill="#111111" />
                </svg>
              </a>
            </div>
            <p>+998 71 111 11 11</p>
            <p>info@derek.uz</p>
          </div>
          {/* <iframe title="Derek location" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11985.553800599746!2d69.22858220344239!3d41.3221657831688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1719667644203!5m2!1sen!2s" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
          <div style={{ position: "relative", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <iframe src="https://yandex.uz/map-widget/v1/?from=mapframe&ll=69.226746%2C41.298023&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxOTQzMDY2OTAxElRPyrt6YmVraXN0b24sIFRvc2hrZW50LCBDaGlsb256b3IgdHVtYW5pLCAzLUNoYXJ4LUthbW9sb24gbWFoYWxsYSBmdXFhcm9sYXIgeWlnyrtpbmkiCg3zb4pCFc4xJUI%2C&z=15.16" width="600" height="450" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer__copy">
          &copy; {t('copyright')} 2024
        </div>
      </div>
    </footer>
  )
}

export default Footer