import React, {useMemo} from 'react'
import './DiscoverLexus.css'
import nexts from '../assets/right-arrow.png'
import nextw from '../assets/right-arrow (2).png'
import lexus from '../assets/2023-discover-lexus-hero-1-1920x1080.webp'
import lexus1 from '../assets/2023-lexus-lbx-newsletter-be-the-first-to-hear-1-1440x1080.webp'
import lexus2 from '../assets/2024-discover-lexus-intuitive-technology-1920x1080-in-perpituity.webp'
import lexus3 from '../assets/2023-discover-hub-list-card-craft-1440x1080.webp'
import lexus5 from '../assets/2024-discover-lexus-experience-amazing-1440x1080-270926.webp'
import { useNavigate } from 'react-router'
import Footer from "../Footer"



import { useStoreState } from "../Components/Redux/selector";
import locale from "../localization/locale.json";



function DiscoverLexus() {

    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang]);

    const data = [
        { span: langData.span, h1: langData.h1, p: langData.p9, btn: langData.btn6, img: lexus2 },
        { span: langData.span1, h1: langData.h2, p: langData.p10, btn: langData.btn7, img: lexus3 },
        { span: langData.span2, h1: langData.h3, p: langData.p11, btn: langData.btn8, img: lexus5 },
    ]

    const navigate = useNavigate();
    return (
        <div className='Discover'>
            <div className="discoverlexus">
                <h1><span>{langData.intro}</span>{langData.lex3}</h1>
                <div className="discoverleft">
                    <p>{langData.p7}</p>
                    <span><button onClick={() => navigate('/')}>{langData.book}<img src={nexts} alt="..." /></button> <button onClick={() => navigate('/')}>{langData.find}<img src={nextw} alt="" /></button></span>
                </div>
            </div>
            <img src={lexus} alt="..." className='lexusimg' />
            <div className="storylexus">
                <h1>{langData.story}</h1>
                <p>{langData.p8}</p>
                <b>{langData.b}</b>
            </div>

            <div className="lbx-cart">
                <div className="sign">
                    <b>{langData.b1}</b>
                    <h1>{langData.first}</h1>
                    <span></span>
                    <button onClick={() => navigate('/')}>{langData.sign}<img src={nexts} alt="..." /></button>
                </div>
                <img src={lexus1} alt="..." />
            </div>

            <div className="tripple-cards">
                {
                    data.map((item, index) => (
                        <div key={index} className="LIMITLESS">

                            <div className="Guided">
                                <b>{item.span}</b>
                                <h1>{item.h1}</h1>
                                <span></span>
                                <p>{item.p}</p>
                                <button>{item.btn} <img src={nextw} alt="" /></button>
                            </div>
                            <img src={item.img} alt="" className='itemimg' />
                        </div>

                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default DiscoverLexus