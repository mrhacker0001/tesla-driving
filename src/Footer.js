import React, { useEffect, useRef, useState } from 'react';
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import lexus from './assets/download (1).svg';
import AccordionItem from './AccordionItem';

function Footer() {
    const [activeIndex, setActiveIndex] = useState(-1);
    const accordionRefs = useRef([]);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.accordion')) {
                setActiveIndex(-1);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const accordionData = [
        {
            title: 'CARS',
            links: [
                { text: 'LBX', href: 'https://www.lexus.eu/new-cars/lbx' },
                { text: 'GX', href: 'https://www.lexus.eu/new-cars/gx' },
                { text: 'LM', href: 'https://www.lexus.eu/new-cars/lm' },
                { text: 'RX', href: 'https://www.lexus.eu/new-cars/rx' },
                { text: 'RZ', href: 'https://www.lexus.eu/new-cars/rz' },
                { text: 'UX', href: 'https://www.lexus.eu/new-cars/ux' },
                { text: 'UX 300e', href: 'https://www.lexus.eu/new-cars/ux-300e' },
                { text: 'NX', href: 'https://www.lexus.eu/new-cars/nx' },
                { text: 'ES', href: 'https://www.lexus.eu/new-cars/es' },
                { text: 'RC F', href: 'https://www.lexus.eu/new-cars/rc-f' },
                { text: 'LC', href: 'https://www.lexus.eu/new-cars/lc' },
                { text: 'LC Convertible', href: 'https://www.lexus.eu/new-cars/lc-convertible' },
                { text: 'LS', href: 'https://www.lexus.eu/new-cars/ls' },
                { text: 'LX', href: 'https://www.lexus.eu/new-cars/lx' }
            ]
        },
        {
            title: 'ELECTRIFIED',
            links: [
                { text: 'All-Electric', href: '#' },
                { text: 'Self-Charging Hybrid', href: '#' },
                { text: 'Plug-in Hybrid', href: '#' },
                { text: 'Performance Hybrid', href: '#' }
            ]
        },
        {
            title: 'BUSINESS',
            links: [
                { text: 'Business Plus', href: 'https://www.lexus.eu/new-cars/lbx' },
                { text: 'Business Centre', href: 'https://www.lexus.eu/new-cars/gx' },
                { text: 'Finance & Insurance', href: 'https://www.lexus.eu/new-cars/lm' },
                { text: 'Hybrid for Business', href: 'https://www.lexus.eu/new-cars/rx' }
            ]
        },
        {
            title: 'OWNERS',
            links: [
                { text: 'Warranty & Insurance', href: 'https://www.lexus.eu/new-cars/lbx' },
                { text: 'Service & Maintenance', href: 'https://www.lexus.eu/new-cars/gx' },
                { text: 'Lexus Link+ & Media', href: 'https://www.lexus.eu/new-cars/lm' },
                { text: 'Accessories', href: 'https://www.lexus.eu/new-cars/rx' },
                { text: 'Lexus Genuine Parts', href: 'https://www.lexus.eu/new-cars/rz' }
            ]
        },
        {
            title: 'DISCOVER LEXUS',
            links: [
                { text: 'Craftsmanship', href: '#' },
                { text: 'Technology', href: '#' },
                { text: 'Experience Amazing', href: '#' },
                { text: 'Design', href: '#' },
                { text: 'Safety', href: '#' },
                { text: 'THE LOFT by Lexus', href: '#' },
                { text: 'News', href: '#' },
                { text: 'Making Luxury Personal', href: '#' },
                { text: 'LEXUS X ATP TOUR PARTNERSHIP', href: '#' }
            ]
        },
        {
            title: 'CONTACT',
            links: [
                { text: 'Find a dealer', href: '#' },
                { text: 'Ask for test drive', href: '#' },
                { text: 'Ask for maintenance', href: '#' },
                { text: 'Contact Lexus', href: '#' }
            ]
        }
    ];

    return (
        <div className='footer'>
            <div className="wrapperr">
                {accordionData.map((section, idx) => (
                    <div className="accordionn" key={idx}>
                        <div className="modall">
                            <h1>{section.title.toUpperCase()}</h1>
                            <div className="line"></div>
                        </div>
                        <AccordionItem
                            title={section.title}
                            links={section.links}
                            index={idx}
                            activeIndex={activeIndex}
                            toggleAccordion={toggleAccordion}
                            accordionRefs={accordionRefs}
                        />
                    </div>
                ))}
            </div>
            <div className="divv">
                <div className="boxx">
                    <div>
                        <span className="roww">
                            <a href="...">Legal</a>
                            <a href="...">Cookie Policy</a>
                            <a href="...">Environment</a>
                            <a href="...">Privacy Policy</a>
                            <a href="...">WLTP</a>
                        </span>
                        <a href="...">Data Deletion Instructions</a>
                    </div>
                    <p>© Lexus. All Rights Reserved 2025</p>
                </div>
                <div className="salee">
                    <div className="faroww">
                        <a href="..."><FontAwesomeIcon icon={faYoutube} /></a>
                        <a href="..."><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="..."><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="..."><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <img src={lexus} alt="Lexus Logo" />
                </div>
            </div>
        </div>
    );
}

export default Footer;
