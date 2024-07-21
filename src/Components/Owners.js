import React from 'react'
import './Owners.css'
import img from '../assets/owners/Screenshot 2024-06-27 at 22.23.37.png'
import img1 from '../assets/owners/Screenshot 2024-06-27 at 22.26.37.png'
import img2 from '../assets/owners/Screenshot 2024-06-27 at 22.30.32.png'
import img3 from '../assets/owners/Screenshot 2024-06-27 at 22.30.57.png'
import img4 from '../assets/owners/Screenshot 2024-06-27 at 22.31.24.png'
import img5 from '../assets/owners/Screenshot 2024-06-27 at 22.31.39.png'
import next from '../assets/right-arrow (2).png'
import img6 from "../assets/owners/Screenshot 2024-06-27 at 23.35.10.png"
import Footer from '../Footer'
function Owners() {

    const data = [
        { img: img1, span: 'DISCOVER MORE', h2: 'WARRANTY AND INSURANCE' },
        { img: img2, span: 'DISCOVER MORE', h2: 'SERVICE AND MAINTENANCE' },
    ]

    const data1 = [
        { img: img3, span: 'DISCOVER MORE', h2: 'LEXUS LINK AND MULTIMEDIA' },
        { img: img4, span: 'DISCOVER MORE', h2: 'ACCESSORIES' },
        { img: img5, span: 'DISCOVER MORE', h2: 'LEXUS GENUINE PARTS' },
    ]

    return (
        <div className='Owners'>
            <div className="top-cards">
                <h1><span>LOOKING AFTER YOU</span>OWNERS</h1>
                <p>Find out why the service Lexus offers its car owners through the vehicle’s life is considered industry-leading.</p>
            </div>
            <img src={img} alt="" />

            <div className="owners">
                <h3>OWNERS</h3>
                <h1>EVERYTHING YOU NEED TO DRIVE</h1>
                <p>Discover the tailored services designed to take care of your Lexus no matter its age or mileage.</p>

                <div className='owners-cards'>
                    {
                        data.map((item, index) => (
                            <div key={index} className="owner">
                                <img src={item.img} alt="" />
                                <div className="in-cart">
                                    <span>{item.span}</span>
                                    <h2>{item.h2}</h2>
                                </div>
                            </div>
                        ))
                    }
                    {
                        data1.map((item, index) => (
                            <div key={index} className="two-card">
                                <img src={item.img} alt="" />
                                <div className="in-cartt">
                                    <span>{item.span}</span>
                                    <h2>{item.h2}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="lexus-card">
                <h2>OWNERS</h2>
                <h1>MY LEXUS</h1>
                <p>We make owning a Lexus personal with a range of online of online services to help you maintain your car and enjoy every journey.</p>
                <div className="lexus-cart">
                    <div className="left">
                        <h4>MY LEXUS</h4>
                        <h1>THE BENEFITS OF MY LEXUS</h1>
                        <span></span>
                        <p>Service reminders: When your car is due a service My Lexus will notify you, so you can always stay on top of your car maintenance.</p>
                        <p>Owner's manuals: Enjoy immediate access to all the detailed information you need to get the most out of your car.</p>
                        <p>Journey planner: Easily map your next trip and send the details to your Lexus navigation system, wherever you are.</p>
                        <p>Configure and save: We know that perfection can't be rushed, so you can configure a car to your exact specifications and save it to your account, to view or amend later.</p>
                        <button>SIGN IN TO MY LEXUS <img src={next} alt="" /></button>
                    </div>
                    <img src={img6} alt="" />

                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Owners