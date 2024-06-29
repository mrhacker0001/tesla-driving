import React from 'react'
import './Business.css'
import landing from '../assets/lexus-business-landing-hero-1920x1080_Large-Landscape.webp'
import img from '../assets/lexus-business-finance-and-insurance-hero-1920x1080_Large-Landscape.webp'
import img1 from '../assets/lexus-business-plus-hero-1920x1080_Large-Landscape.webp'
import img2 from '../assets/lexuxs.jpeg'
import img3 from '../assets/images.jpeg'
import { useNavigate } from 'react-router-dom'

function Business() {

    const navigate = useNavigate();

    const data = [
        { img: img1, span: 'DISCOVER MORE', h2: 'BUSINESS PLUS' },
        { img: img3, span: 'DISCOVER MORE', h2: 'BUSINESS CENTRES' },
        { img: img2, span: 'DISCOVER MORE', h2: 'FINANCE & INSURANCE' },
        { img: img, span: 'DISCOVER MORE', h2: 'HYBRID FOR BUSINESS' },
    ]

    return (
        <div className='Business'>
            <div className="top-cart">
                <h1><span>WELCOME TO</span>LEXUS BUSINESS</h1>
                <p>With a wide choice of Lexus models, including self-charging hybrid and all-electric vehicles, it has never been easier to choose your company car or reduce costs, minimise emissions and transform your fleet.</p>
            </div>
            <img src={landing} alt="" />

            <div className="middle-cards">
                {
                    data.map((item,index)=>(
                        <div onClick={() => navigate('/')} key={index} className="second-cart">
                            <img src={item.img} alt="" />
                            <div className="cart">
                                <span>{item.span}</span>
                                <h2>{item.h2}</h2>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Business