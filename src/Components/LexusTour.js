import React, { useState, useMemo } from 'react';
import './LexusTour.css';
import img from '../assets/2023-lexus-atp-tour-hero-1920x1080_Large-Landscape.webp';
import paris from "../assets/carousel/Screenshot 2024-07-19 at 22.57.18.png";
import london from "../assets/carousel/Screenshot 2024-07-19 at 22.56.21.png";
import barcelona from "../assets/carousel/Screenshot 2024-07-19 at 22.56.35.png";
import potterdam from "../assets/carousel/Screenshot 2024-07-19 at 22.56.53.png";
import turin from "../assets/carousel/Screenshot 2024-07-19 at 22.57.03.png";
import hamburg from "../assets/carousel/Screenshot 2024-07-19 at 22.57.38.png";
import right from "../assets/carousel/left-arrow.png";
import left from "../assets/carousel/arrow-right.png";
import img1 from "../assets/carousel/Screenshot 2024-07-20 at 15.31.38.png";
import Footer from '../Footer';

import { useStoreState } from "../Components/Redux/selector";
import locale from "../localization/locale.json";




function LexusTour() {
    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang]);


    const data = [
        { img: paris, p: langData.p1, h1: langData.episode, btn: langData.btn },
        { img: london, p: langData.p2, h1: langData.episode1, btn: langData.btn1 },
        { img: barcelona, p: langData.p3, h1: langData.episode2, btn: langData.btn2 },
        { img: potterdam, p: langData.p4, h1: langData.episode3, btn: langData.btn3 },
        { img: turin, p: langData.p5, h1: langData.episode4, btn: langData.btn4 },
        { img: hamburg, p: langData.p6, h1: langData.episode5, btn: langData.btn5 },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };





    return (
        <div className='LexusTour'>
            <div className="partner">
                <h1><span>{langData.part}</span> LEXUS X ATP TOUR</h1>
                <p>{langData.lex1}
                </p>
            </div>
            <img src={img} alt="..." />

            <div className="second-wrapper">
                <div className="head-text">
                    <h1>{langData.lex2}</h1>
                    <span></span>
                    <p>{langData.dive}</p>
                </div>
                <div className='btnns'>
                    <button onClick={handlePrev}><img src={right} alt="..." /></button>
                    <button onClick={handleNext}><img src={left} alt="..." /></button>
                </div>
                <div className='Slider' >
                    {data.map((item, index) => (
                        <div key={index} className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 30}dvw)` }}>
                            <div className="slide-text">
                                <p>{item.p}</p>
                                <h1>{item.h1}</h1>
                                <span></span>
                                <button>{item.btn}</button>
                            </div>
                            <div className="carousel-img">
                                <img src={item.img} alt="..." />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="third-wrapper">
                <div className="euro-card">
                    <h1>{langData.euro}</h1>
                    <p>{langData.sin}</p>
                    <p>{langData.sin1}{langData.a}</p>
                </div>
                <div className="calendar-card">
                    <h1>{langData.tour}</h1>
                    <img src={img1} alt="" />
                    <button> {langData.click}(JPG)</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LexusTour;
