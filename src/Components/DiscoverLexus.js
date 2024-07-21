import React from 'react'
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



function DiscoverLexus() {

    const data = [
        { span: 'LIMITLESS INNOVATION', h1: 'INTUITIVE TECHNOLOGY', p: 'Guided by our engineering instincts and designed with the driver in mind, discover intuitive safety, connectivity, and entertainment technology.', btn: 'EXPLORE TECHNOLOGY', img: lexus2 },
        { span: 'REFINED DESIGN', h1: 'MASTERFUL CRAFT', p: 'Explore the visual harmony of the ancient Japanese art of Takumi and the distinguished, contemporary design features of every Lexus.', btn: 'SEE OUR CRAFT', img: lexus3 },
        { span: 'FEEL MORE', h1: 'EXPERIENCE AMAZING', p: 'Have you ever felt driving assurance and comfort, yet anticipation and exhilaration in one drive? It’s time to Experience Amazing with Lexus.', btn: 'FEEL THE AMAZING', img: lexus5 },
    ]

    const navigate = useNavigate();
    return (
        <div className='Discover'>
            <div className="discoverlexus">
                <h1><span>INTRODUCING</span>DISCOVER LEXUS</h1>
                <div className="discoverleft">
                    <p>The Lexus vision is built on perfecting driving pleasure through amazing experiences. From intuitive, cutting-edge Lexus Electrified technology to hand-crafted, pioneering design; we strive for personalised luxury.</p>
                    <span><button onClick={() => navigate('/')}>BOOK A TEST DRIVE <img src={nexts} alt="..." /></button> <button onClick={() => navigate('/')}>FIND A CENTRE <img src={nextw} alt="" /></button></span>
                </div>
            </div>
            <img src={lexus} alt="..." className='lexusimg' />
            <div className="storylexus">
                <h1>THE STORY OF LEXUS</h1>
                <p>The Lexus story is born from the ambition to amaze. In the beginning, a Lexus team was challenged to create a luxury sedan to surpass the world’s best premium carmakers. Thirty years on, there’s no limit to Lexus.
                    <br /><br />
                    From inspiring concept cars to innovative design details, every corner of the ongoing Lexus story is peppered with thoughtful consideration. Combining the delicate handcraft of Takumi with the Japanese culture of omotenashi, which embodies the ability to anticipate your needs; a human-centred focus is achieved.</p>
                <b>FROM OUR AMBITION TO AMAZE, CAME THE POSSIBILITY TO EXPERIENCE AMAZING WITH LEXUS.</b>
            </div>

            <div className="lbx-cart">
                <div className="sign">
                    <b>LBX NEWSLETTER</b>
                    <h1>BE THE FIRST TO HEAR LBX NEWS</h1>
                    <span></span>
                    <button onClick={() => navigate('/')}>SIGN UP NOW <img src={nexts} alt="..." /></button>
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