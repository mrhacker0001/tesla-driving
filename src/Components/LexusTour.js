import React, { useMemo, useCallback, useState, useEffect } from 'react'
import './LexusTour.css'
import SwipeableViews from 'react-swipeable-views';
import img from '../assets/2023-lexus-atp-tour-hero-1920x1080_Large-Landscape.webp'
import next from '../assets/next (1).png'
import Previous from '../assets/next (2).png'

function LexusTour() {
    const data = useMemo(() => [
        { nom: "Instant payouts", tarifi: "No minimum trading days — cash out whenever you make a profit" },
        { nom: "Easy 1-step assessment", tarifi: "No minimum trading days — cash out whenever you make a profit" },
        { nom: "Smart trading ecosystem", tarifi: "Track your targets in the dashboard and access a next-gen traderoom right from the main space" },
        { nom: "Another feature", tarifi: "Description for another feature" },
        { nom: "Yet another feature", tarifi: "Description for yet another feature" },
        { nom: "More features", tarifi: "Description for more features" },
        { nom: "Last feature", tarifi: "Description for the last feature" },
        { nom: "Additional feature 1", tarifi: "Description for additional feature 1" },
        { nom: "Additional feature 2", tarifi: "Description for additional feature 2" },
    ], []);

    const [groupedData, setGroupedData] = useState([]);
    const [index, setIndex] = useState(0);

    const groupData = useCallback(() => {
        let itemsPerGroup;
        if (window.innerWidth <= 780) {
            itemsPerGroup = 1;
        } else if (window.innerWidth <= 1100) {
            itemsPerGroup = 2;
        } else if (window.innerWidth <= 390) {
            itemsPerGroup = 1;
        } else {
            itemsPerGroup = 3;
        }

        const newGroupedData = [];
        for (let i = 0; i < data.length; i += itemsPerGroup) {
            newGroupedData.push(data.slice(i, i + itemsPerGroup));
        }
        setGroupedData(newGroupedData);
    }, [data]);

    useEffect(() => {
        groupData();
        window.addEventListener('resize', groupData);
        return () => window.removeEventListener('resize', groupData);
    }, [groupData]);

    const handleNext = () => {
        setIndex(prevIndex => (prevIndex + 1) % groupedData.length);
    };

    const handlePrev = () => {
        setIndex(prevIndex => (prevIndex - 1 + groupedData.length) % groupedData.length);
    };
    return (
        <div className='LexusTour'>
            <div className="partner">
                <h1><span>PARTNERSHIP</span> LEXUS X ATP TOUR</h1>
                <p>In 2023, Lexus signed a multi-year partnership with the Association of Tennis Professionals (ATP) as Official Automotive Partner and Platinum Partner of the ATP Tour.
                    <br /><br />
                    Lexus and the ATP Tour both tell a story of innovation, performance and pursuit of perfection. Fans and customers always come first, and both brands operate with a focus on providing unforgettable experiences.
                </p>
            </div>
            <img src={img} alt="..." />

            <div className='Slider'>
                <h1>Why SabioTrade?</h1>
                <div className="middle-cart">
                    <button onClick={handlePrev}><img src={Previous} alt="Previous" /></button>
                    <SwipeableViews index={index} onChangeIndex={setIndex}>
                        {groupedData.map((group, idx) => (
                            <div className="cart-group" key={idx}>
                                {group.map((item, itemIdx) => (
                                    <div className="carts" key={itemIdx}>
                                        <h1>{item.nom}</h1>
                                        <span>{item.tarifi}</span>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </SwipeableViews>
                    <button onClick={handleNext} className='next'><img src={next} alt="Next" /></button>
                </div>
            </div>
        </div>
    )
}

export default LexusTour