import React, { useState } from 'react';
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

function LexusTour() {
    const data = [
        { img: paris, p: 'In the sixth episode of Lexus ATP Head2Head series ATP Tour players swap rackets for wickets. In London they try their hand at that most British of sports - cricket. Two England cricket professionals put them through their paces at the crease, testing their batting and fielding accuracy. Who will score the most runs? Watch to find out.', h1: 'EPISODE 1', btn: 'WATCH EPISODE 1' },
        { img: london, p: 'In the second episode watch as the ATP Tour players head to Paris to compete in the latest electrifying scavenger hunt.Their mission: locate as many items as possible within a tight 40-minute window.Watch the video to discover who claims the title of champion.', h1: 'EPISODE 2', btn: 'WATCH EPISODE 2' },
        { img: barcelona, p: 'Watch the showdown in Turin as ATP Tour players face off in the third installment of the Head2Head Scavenger Hunt. With the loser facing a forfeit, the pressure is well and truly on. Tune in to the video to witness who rises to the top.', h1: 'EPISODE 3', btn: 'WATCH EPISODE 3' },
        { img: potterdam, p: 'The fourth episode of the Lexus ATP Head2Head Exclusive Series sees our ATP Tour players face off in a cooking challenge.In this first episode of 2024, they head to Restaurant Fred in Rotterdam to meet a two Michelin starred chef, cooking a meal from scratch with a basket of mystery ingredients.Watch now to see who will win the Lexus Cook Off Challenge.', h1: 'EPISODE 4', btn: 'WATCH EPISODE 4' },
        { img: turin, p: 'We are back on the courts for the latest in the exclusive Lexus ATP Head2Head series, where former star of the NBA and EuroLeague joins ATP Tour players at one of Spain oldest basketball clubs.Watch the players really picking up the pace in this challenge, withjust 60 seconds to score as many points as they can But who will remain calm under pressure and make the most baskets', h1: 'EPISODE 5', btn: 'WATCH EPISODE 5' },
        { img: hamburg, p: 'Join the excitement as ATP Tour players embark on an electrifying scavenger hunt in Hamburg. From gripping racquets to artistic challenges, watch the video and discover who became the ultimate winner.', h1: 'EPISODE 6', btn: 'WATCH EPISODE 6' },
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
                <h1><span>PARTNERSHIP</span> LEXUS X ATP TOUR</h1>
                <p>In 2023, Lexus signed a multi-year partnership with the Association of Tennis Professionals (ATP) as Official Automotive Partner and Platinum Partner of the ATP Tour.
                    <br /><br />
                    Lexus and the ATP Tour both tell a story of innovation, performance and pursuit of perfection. Fans and customers always come first, and both brands operate with a focus on providing unforgettable experiences.
                </p>
            </div>
            <img src={img} alt="..." />

            <div className="second-wrapper">
                <div className="head-text">
                    <h1>LEXUS ATP HEAD2HEAD EXCLUSIVE SERIES</h1>
                    <span></span>
                    <p>Dive into an electrifying series that takes player challenges to a whole new level. Catch every moment with all episodes coming to YouTube.</p>
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
                    <h1>EUROPEAN TOURNAMENTS</h1>
                    <p>Since the partnership announcement in June 2023, Lexus has sponsored various exhilarating ATP Tournaments such as ATP 500 Cinch Championships and ATP 250 Rothesay International in Great Britain, ATP 500 Hamburg European Open in Germany, ATP 250 Generali Open in Austria, ATP 250 Astana Open in Kazakhstan, and others, providing strong brand presence at the venues as well as in media and online.</p>
                    <p>At the end of the 2023 season, Lexus sponsored the ATP 1000 Paris Rolex Masters and the Nitto ATP Finals in Turin in a thrilling climax of the tournament. In Turin, Lexus provided a fleet of 45 electrified models, <a href="...">including the new all-electric Lexus RZ 450e</a> and UX 300e together with hybrid and plug-in hybrid models.</p>
                </div>
                <div className="calendar-card">
                    <h1>2024 CALENDAR OF LEXUS-SPONSORED TOURNAMENTS</h1>
                    <img src={img1} alt="" />
                    <button>CLICK TO VIEW FULL CALENDAR (JPG)</button>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LexusTour;
