import React, { useState, useMemo } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Feedback.css';

import { useStoreState } from "../Components/Redux/selector";
import locale from "../localization/locale.json";

function Feedback() {
    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang]);
    const [starColors, setStarColors] = useState([false, false, false, false, false])
    const toggleStarColor = (index) => {
        const newColors = starColors.map((_, i) => i <= index);
        setStarColors(newColors);
        localStorage.setItem('starColors', JSON.stringify(newColors));
    };

    return (
        <div className='wrapper'>
            <div className='big'>
                <h1>|</h1>
                <h3>{langData.help}</h3>
            </div>
            <div id='big'>
                <p>{langData.helpful}</p>
                <div className='stars'>
                    {starColors.map((isYellow, index) => (
                        <FontAwesomeIcon
                            key={index}
                            icon={faStar}
                            onClick={() => toggleStarColor(index)}
                            style={{ color: isYellow ? 'yellow' : 'black', cursor: 'pointer', margin: '0 5px' }}
                        />
                    ))}
                </div>
                <p className='How'>{langData.how}</p>
                <textarea className='text'></textarea>
                <button className='button'>
                    <h3>{langData.submit}</h3>
                    <div className='line'></div>
                </button>
            </div>
        </div>
    );
}

export default Feedback;