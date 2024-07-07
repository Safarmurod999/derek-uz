import { teamArray } from "../../data/const"
import company_img from "../../assets/images/company_img.png"
import { Cart, Title } from "../../components"
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Company = () => {
    const { t } = useTranslation();
    return (
        <main className="company">

            {/* Hero section */}
            <section id="history" className='hero'>
                <div className="container">
                    <div className='hero__wrapper'>
                        <div className='hero__wrapper-banner'>
                            <img src={company_img} alt='banner' />
                        </div>
                        <div className='hero__history'>
                            <h2>{t('history_derek')}</h2>
                            <p>{t('company_text')} </p>
                        </div>
                        <div className='hero__statistics'>
                            <ul className='hero__statistics--list'>
                                <li>
                                    <div>35+</div>
                                    <p>{t('statistics_1')}</p>
                                </li>
                                <li>
                                    <div>1100+</div>
                                    <p>{t('statistics_2')}</p>
                                </li>
                                <li>
                                    <div>600+</div>
                                    <p>{t('statistics_3')}</p>
                                </li>
                            </ul>
                        </div>
                        {/*<ProductModal/>*/}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section id="team" className='team'>
                <div className="container">
                    <Title>{t('our_team')}</Title>
                    <div className='team__list'>
                        {teamArray.map((item) => (
                            <div key={item.id} className='team__list--item'>
                                <img src={item.image} alt={item.title} width='250' className="team__list--image" />
                                <div className='team__list--item__date'>
                                    <h5>{item.name}</h5>
                                    <p>{item.position}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contacts */}
            <section id="contact" className='contact'>
                <div className="container">
                    <div>
                        <Title>{t('header_5')}</Title>
                        <div className='contact__wrapper'>
                            <div className='contact__map'>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7464.163500392015!2d69.27595005044465!3d41.311115364712784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b2931f41f23%3A0x81095e06b654b845!2sAmir%20Temur%20Square!5e0!3m2!1sen!2sus!4v1719631243614!5m2!1sen!2sus"
                                    width="600" height="450" style={{ border: "0", allowFullScreen: "", loading: "lazy" }}
                                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>

                            <div className='contact__date'>
                                <div className='contact__date-item'>
                                    <p>{t('phone')}</p>
                                    <div>+998 71 111 11 11</div>
                                </div>

                                <div className='contact__date-item'>
                                    <p>{t('address')}</p>
                                    <div>Baker street, 221</div>
                                </div>

                                <div className='contact__date-item'>
                                    <p>{t('mail')}</p>
                                    <div>info@derek.uz</div>
                                </div>

                                <div className='contact__date-social'>
                                    <a href="https://www.instagram.com/">
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.86109 4.53341C12.4194 4.53341 14.531 6.64502 14.531 9.20331C14.531 11.8022 12.4194 13.8732 9.86109 13.8732C7.26219 13.8732 5.1912 11.8022 5.1912 9.20331C5.1912 6.64502 7.26219 4.53341 9.86109 4.53341ZM9.86109 12.2489C11.526 12.2489 12.8661 10.9088 12.8661 9.20331C12.8661 7.53839 11.526 6.19833 9.86109 6.19833C8.15556 6.19833 6.81551 7.53839 6.81551 9.20331C6.81551 10.9088 8.19617 12.2489 9.86109 12.2489ZM15.7898 4.37098C15.7898 4.9801 15.3025 5.46739 14.6934 5.46739C14.0843 5.46739 13.597 4.9801 13.597 4.37098C13.597 3.76187 14.0843 3.27457 14.6934 3.27457C15.3025 3.27457 15.7898 3.76187 15.7898 4.37098ZM18.876 5.46739C18.9572 6.96988 18.9572 11.4773 18.876 12.9798C18.7948 14.4417 18.4699 15.7006 17.4141 16.797C16.3583 17.8528 15.0589 18.1776 13.597 18.2588C12.0945 18.3401 7.58705 18.3401 6.08457 18.2588C4.62269 18.1776 3.36385 17.8528 2.26744 16.797C1.21163 15.7006 0.886772 14.4417 0.805557 12.9798C0.724341 11.4773 0.724341 6.96988 0.805557 5.46739C0.886772 4.00551 1.21163 2.70607 2.26744 1.65026C3.36385 0.594461 4.62269 0.269599 6.08457 0.188384C7.58705 0.107168 12.0945 0.107168 13.597 0.188384C15.0589 0.269599 16.3583 0.594461 17.4141 1.65026C18.4699 2.70607 18.7948 4.00551 18.876 5.46739ZM16.9268 14.5635C17.4141 13.3859 17.2923 10.5434 17.2923 9.20331C17.2923 7.90386 17.4141 5.06132 16.9268 3.84308C16.602 3.07154 15.9929 2.42181 15.2213 2.13756C14.0031 1.65026 11.1605 1.77209 9.86109 1.77209C8.52103 1.77209 5.67849 1.65026 4.50086 2.13756C3.68871 2.46242 3.07959 3.07154 2.75473 3.84308C2.26744 5.06132 2.38926 7.90386 2.38926 9.20331C2.38926 10.5434 2.26744 13.3859 2.75473 14.5635C3.07959 15.3757 3.68871 15.9848 4.50086 16.3097C5.67849 16.797 8.52103 16.6751 9.86109 16.6751C11.1605 16.6751 14.0031 16.797 15.2213 16.3097C15.9929 15.9848 16.6426 15.3757 16.9268 14.5635Z" fill="#111111" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/">
                                        <svg width="12" height="22" viewBox="0 0 12 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M11.0881 12.5028H8.04249V21.5989H3.98172V12.5028H0.65188V8.76684H3.98172V5.88369C3.98172 2.63507 5.93089 0.807719 8.89526 0.807719C10.3165 0.807719 11.819 1.09197 11.819 1.09197V4.29999H10.1541C8.52979 4.29999 8.04249 5.27457 8.04249 6.33038V8.76684H11.6566L11.0881 12.5028Z" fill="#111111" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/">
                                        <svg width="23" height="16" viewBox="0 0 23 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M22.0163 2.88369C22.5036 4.58922 22.5036 8.24392 22.5036 8.24392C22.5036 8.24392 22.5036 11.858 22.0163 13.6041C21.7727 14.5787 21.0011 15.3097 20.0672 15.5533C18.321 16 11.4177 16 11.4177 16C11.4177 16 4.47377 16 2.72763 15.5533C1.79366 15.3097 1.02211 14.5787 0.778462 13.6041C0.291169 11.858 0.291169 8.24392 0.291169 8.24392C0.291169 8.24392 0.291169 4.58922 0.778462 2.88369C1.02211 1.9091 1.79366 1.13756 2.72763 0.89391C4.47377 0.406617 11.4177 0.406617 11.4177 0.406617C11.4177 0.406617 18.321 0.406617 20.0672 0.89391C21.0011 1.13756 21.7727 1.9091 22.0163 2.88369ZM9.14366 11.5331L14.91 8.24392L9.14366 4.95469V11.5331Z" fill="#111111" />
                                        </svg>
                                    </a>
                                    <a href="https://www.instagram.com/">
                                        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.10356 19H0.327035V6.85828H4.10356V19ZM2.19499 5.23397C1.01737 5.23397 0.0427809 4.21877 0.0427809 3.00054C0.0427809 1.82291 1.01737 0.848327 2.19499 0.848327C3.41323 0.848327 4.38781 1.82291 4.38781 3.00054C4.38781 4.21877 3.41323 5.23397 2.19499 5.23397ZM18.1945 19H14.4585V13.1119C14.4585 11.6906 14.4179 9.90386 12.4688 9.90386C10.5196 9.90386 10.2353 11.4063 10.2353 12.9901V19H6.45881V6.85828H10.0729V8.5232H10.1135C10.6414 7.58922 11.8596 6.57402 13.687 6.57402C17.5041 6.57402 18.2351 9.0917 18.2351 12.3403V19H18.1945Z" fill="#111111" />
                                        </svg>

                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Company