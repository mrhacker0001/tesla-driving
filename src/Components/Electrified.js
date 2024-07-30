import React, { useMemo } from 'react'
import "./Electrified.css"
import next from '../assets/right-arrow.png'
import nextw from '../assets/right-arrow (2).png'
import lexus from '../assets/2023-lexus-electrified-overview-rz-hero-alternate-1-1920x1080_Large-Landscape.webp'
import effecient from '../assets/energy-efficiency.png'
import convenience from '../assets/convenience.png'
import silence from '../assets/silence.png'
import Footer from "../Footer"


import img from '../assets/2023-electrified-overview-list-all-elec-1920x1080.webp'
import img1 from '../assets/2023-electrified-overview-list-plugin-hybrid-1920x1080.webp'
import img2 from '../assets/2023-electrified-overview-list-self-charging-hybrid-1920x1080.webp'
import img3 from '../assets/2023-electrified-overview-list-performance-hybrid-1920x1080.webp'

import img4 from '../assets/2022-dxp-lexus-retailer-next-steps-1920x1080_Small-Landscape.webp'
import img5 from '../assets/2023-electrified-battery-range-reference-1080x1080_Small-Landscape.webp'
import img6 from '../assets/2023-electrified-charging-reference-1080x1080_Small-Landscape.webp'
import { useNavigate } from 'react-router-dom'
import { useStoreState } from "../Components/Redux/selector";
import locale from "../localization/locale.json";

function Electrified() {

    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang]);

    const data = [
        { for: langData.for, fuel: langData.fuel1, btn: langData.learn, img: img },
        { for: langData.for1, fuel: langData.fuel2, btn: langData.learn, img: img1 },
        { for: langData.for2, fuel: langData.fuel3, btn: langData.learn, img: img2 },
        { for: langData.for3, fuel: langData.fuel4, btn: langData.learn, img: img3 },
    ]

    const data1 = [
        { img: img4, p: langData.p12, h2: langData.h5, btn: langData.see },
        { img: img5, p: langData.p13, h2: langData.h6, btn: langData.see },
        { img: img6, p: langData.p14, h2: langData.h7, btn: langData.see },
    ]

    const navigate = useNavigate()

    return (
        <div className='Electrified'>
            <div className="header">
                <div className="st-cart">
                    <span>{langData.intro}</span>
                    <h1>{langData.lex4}</h1>
                </div>

                <div className="nd-cart">
                    <p>{langData.enhance}</p>
                    <div className="btns">
                        <button>{langData.vehicle}<img src={next} alt="..." /></button>
                        <button onClick={() => navigate('/')}>{langData.find}<img src={nextw} alt="..." /></button>
                    </div>
                </div>
            </div>

            <div className="second-card">
                <img src={lexus} alt="..." />
            </div>

            <div className="third-card">
                <h1>{langData.future}</h1>
                <p>{langData.mission}</p>
                <div className="tripple-cards">
                    <div className="one">
                        <img src={effecient} alt="..." />
                        <h2>{langData.effic}</h2>
                        <span></span>
                        <p>{langData.along}</p>
                    </div>
                    <div className="one">
                        <img src={convenience} alt="..." />
                        <h2>{langData.con}</h2>
                        <span></span>
                        <p>{langData.driver}</p>
                    </div>
                    <div className="one">
                        <img src={silence} alt="..." />
                        <h2>{langData.quiet}</h2>
                        <span></span>
                        <p>{langData.peace}</p>
                    </div>
                </div>
                <button className='btn'>{langData.benefit}<img src={nextw} alt="" /></button>
            </div>

            <div className="fourth-card">
                <h1>{langData.exploree}</h1>
                <div className="info-cards">
                    {
                        data.map((item, index) => (
                            <div key={index} className="info">
                                <div className="left">
                                    <p>{item.for}</p>
                                    <h2>{item.fuel}</h2>
                                    <span></span>
                                    <button>{item.btn} <img src={next} alt="" /></button>
                                </div>
                                <img src={item.img} alt="..." />
                            </div>
                        ))
                    }

                </div>
            </div>

            <div className="fifth-cards">
                {
                    data1.map((item, index) => (
                        <div key={index} className="first-cart">
                            <img src={item.img} alt="..." />
                            <p>{item.p}</p>
                            <h2>{item.h2}</h2>
                            <span></span>
                            <button>{item.btn} <img src={next} alt="" /></button>
                        </div>
                    ))
                }
            </div>

            <div className="sixth-cards">
                <h1>{langData.exp}</h1>
                <div className="buttons">
                    <button onClick={() => navigate('/')}>{langData.find}<img src={nextw} alt="" /></button>
                    <button onClick={() => navigate('/')}>{langData.book}<img src={nextw} alt="" /></button>
                    <button onClick={() => navigate('/Newcards')}>{langData.choose}<img src={nextw} alt="" /></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Electrified