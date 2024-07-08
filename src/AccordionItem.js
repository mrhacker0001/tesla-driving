import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

const AccordionItem = ({ title, links, index, activeIndex, toggleAccordion, accordionRefs }) => (
    <div className={`contentBx ${activeIndex === index ? 'active' : ''}`} ref={el => accordionRefs.current[index] = el}>
        <div className="label" onClick={() => toggleAccordion(index)} role="button" aria-expanded={activeIndex === index}>
            {title}
            <FontAwesomeIcon icon={faAngleDown} className={activeIndex === index ? 'rotate180' : ''} style={{ paddingTop: "3px" }} />
        </div>
        {links.map((link, idx) => (
            <div className={`content ${activeIndex === index ? 'active' : ''}`} key={idx}>
                <a href={link.href}>{link.text}</a>
            </div>
        ))}
    </div>
);

export default AccordionItem;
