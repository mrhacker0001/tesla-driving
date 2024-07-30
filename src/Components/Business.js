import React, { useMemo } from 'react'
import './Business.css'
import landing from '../assets/lexus-business-landing-hero-1920x1080_Large-Landscape.webp'
import img from '../assets/lexus-business-finance-and-insurance-hero-1920x1080_Large-Landscape.webp'
import img1 from '../assets/lexus-business-plus-hero-1920x1080_Large-Landscape.webp'
import img2 from '../assets/lexuxs.jpeg'
import img3 from '../assets/images.jpeg'
import { useNavigate } from 'react-router-dom'
import Footer from "../Footer"

import { useStoreState } from "../Components/Redux/selector";
import locale from "../localization/locale.json";


function Business() {

    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang]);

    const navigate = useNavigate();

    const data = [
        { img: img1, span: langData.discover, h2: langData.plus },
        { img: img3, span: langData.discover, h2: langData.centre },
        { img: img2, span: langData.discover, h2: langData.finance },
        { img: img, span: langData.discover, h2: langData.business },
    ]

    return (
        <div className='Business'>
            <div className="top-cart">
                <h1><span>{langData.wel}</span>{langData.busin}</h1>
                <p>{langData.with}</p>
            </div>
            <img src={landing} alt="" />

            <div className="middle-cards">
                {
                    data.map((item, index) => (
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
            <Footer />
        </div>
    )
}

export default Business