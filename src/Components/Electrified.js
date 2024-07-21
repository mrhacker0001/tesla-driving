import React from 'react'
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

function Electrified() {

    const data = [
        { for: 'FOR CONTENTMENT', fuel: 'ALL-ELECTRIC', btn: 'LEARN MORE', img: img },
        { for: 'FOR CONVENIENCE', fuel: 'PLUG-IN HYBRID', btn: 'LEARN MORE', img: img1 },
        { for: 'FOR FREEDOM', fuel: 'SELF-CHARGING HYBRID', btn: 'LEARN MORE', img: img2 },
        { for: 'FOR EXHILARATION', fuel: 'PERFORMANCE HYBRID', btn: 'LEARN MORE', img: img3 },
    ]

    const data1 = [
        { img: img4, p: 'Forms', h2: 'FIND A RETAILER', btn: 'SEE MORE' },
        { img: img5, p: 'GO BEYOND', h2: 'SEE BATTERY RANGE', btn: 'SEE MORE' },
        { img: img6, p: 'SMART SOLUTIONS', h2: 'DISCOVER CHARGING', btn: 'SEE MORE' },
    ]

    const navigate = useNavigate()

    return (
        <div className='Electrified'>
            <div className="header">
                <div className="st-cart">
                    <span>INTRODUCING</span>
                    <h1>LEXUS ELECTRIFIED</h1>
                </div>

                <div className="nd-cart">
                    <p>Enhancing experiences both in and out of your vehicle, we’re proud to be pioneering and perfecting in electrification. Offering uncompromised performance and range choice that embodies personal luxury, discover Lexus Electrified.</p>
                    <div className="btns">
                        <button>BROWSE VEHICLES <img src={next} alt="..." /></button>
                        <button onClick={() => navigate('/')}>FIND A CENTRE <img src={nextw} alt="..." /></button>
                    </div>
                </div>
            </div>

            <div className="second-card">
                <img src={lexus} alt="..." />
            </div>

            <div className="third-card">
                <h1>THE FUTURE HAS ARRIVED</h1>
                <p>From a mission to bring tomorrow’s driving pleasure into today, Lexus Electrified was born. Designed to meet every driver’s needs and preferences, we’ve spent over 15 years creating an electrified car range that is cost and energy efficient, accessible and dynamic. All the while possessing the signature technological advances, next level safety, and luxury craft Lexus vehicles are known for. Welcome to your electrified future.</p>
                <div className="tripple-cards">
                    <div className="one">
                        <img src={effecient} alt="..." />
                        <h2>EFFICIENT</h2>
                        <span></span>
                        <p>Alongside reducing emissions, our electrified car range also significantly cuts vehicle running costs.</p>
                    </div>
                    <div className="one">
                        <img src={convenience} alt="..." />
                        <h2>CONVENIENT</h2>
                        <span></span>
                        <p>Choose from a diverse range of electrified cars to suit your lifestyle, from all-electric to hybrid models.</p>
                    </div>
                    <div className="one">
                        <img src={silence} alt="..." />
                        <h2>QUIET</h2>
                        <span></span>
                        <p>Drive with peace and quiet for company, without compromising on driving pleasure and performance.</p>
                    </div>
                </div>
                <button className='btn'>MORE BENEFITS <img src={nextw} alt="" /></button>
            </div>

            <div className="fourth-card">
                <h1>EXPLORE OUR ELECTRIFIED RANGE</h1>
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
                <h1>EXPERIENCE LEXUS</h1>
                <div className="buttons">
                    <button onClick={() => navigate('/')}>FIND A CENTRE <img src={nextw} alt="" /></button>
                    <button onClick={() => navigate('/')}>BOOK A TEST DRIVE<img src={nextw} alt="" /></button>
                    <button onClick={() => navigate('/Newcards')}>CHOOSE YOUR LEXUS<img src={nextw} alt="" /></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Electrified