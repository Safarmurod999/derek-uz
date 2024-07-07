import React, { useState } from 'react'
// import { accordionArray } from '../../data/const'
import AccordionItem from './AccordionItem'

const Accordion = ({accordionArray}) => {
    return (
        <ul className='accordion'>
            {
                accordionArray.map((item) => (
                    <AccordionItem key={item.id} item={item} />
                ))
            }
        </ul>
    )
}

export default Accordion