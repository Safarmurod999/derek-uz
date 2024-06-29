import React, { useState } from 'react'

const AccordionItem = ({answer,question}) => {
    const [active, setActive] = useState(null);
    return (
        <li className={`accordion__item ${active ? 'active' : ''}`}>
            <div className='accordion__item--question' onClick={() => setActive(!active)}>
                <p className='accordion__button'>{question}</p>
                <svg width="19" height="11" viewBox="0 0 19 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.5818 0.420641C18.3139 0.151306 17.9507 1.81318e-06 17.5719 1.77919e-06C17.1931 1.7452e-06 16.8299 0.151306 16.562 0.420641L9.49138 7.53218L2.42074 0.420639C2.15134 0.158938 1.79052 0.014129 1.416 0.017402C1.04147 0.020675 0.683209 0.171768 0.418372 0.438139C0.153533 0.704511 0.00330977 1.06485 5.39056e-05 1.44154C-0.00320005 1.81823 0.140776 2.18114 0.400973 2.4521L8.48149 10.5794C8.74936 10.8487 9.11261 11 9.49138 11C9.87014 11 10.2334 10.8487 10.5013 10.5794L18.5818 2.4521C18.8496 2.18268 19 1.81732 19 1.43637C19 1.05541 18.8496 0.690057 18.5818 0.420641Z" fill="#00AEEF" />
                </svg>

            </div>
            <div className={`accordion__item--answer`}>
                <p className='accordion__content'>{answer}</p>
            </div>
        </li>
    )
}

export default AccordionItem