import React, { useMemo } from 'react'
import './Owners.css'
import img from '../assets/owners/Screenshot 2024-06-27 at 22.23.37.png'
import img1 from '../assets/owners/Screenshot 2024-06-27 at 22.26.37.png'
import img2 from '../assets/owners/Screenshot 2024-06-27 at 22.30.32.png'
import img3 from '../assets/owners/Screenshot 2024-06-27 at 22.30.57.png'
import img4 from '../assets/owners/Screenshot 2024-06-27 at 22.31.24.png'
import img5 from '../assets/owners/Screenshot 2024-06-27 at 22.31.39.png'
import next from '../assets/right-arrow (2).png'
import img6 from "../assets/owners/Screenshot 2024-06-27 at 23.35.10.png"
import { useStoreState } from "../Components/Redux/selector";
import locale from "../localization/locale.json";
function Owners() {


    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang]);

    const data = [
        { img: img1, span: langData.discover, h2: langData.war },
        { img: img2, span: langData.discover, h2: langData.service1 },
    ]

    const data1 = [
        { img: img3, span: langData.discover, h2: langData.link },
        { img: img4, span: langData.discover, h2: langData.access },
        { img: img5, span: langData.discover, h2: langData.part1 },
    ]

    return (
        <div className='Owners'>
            <div className="top-cards">
                <h1><span>{langData.lokking}</span>{langData.owners}</h1>
                <p>{langData.find1}</p>
            </div>
            <img src={img} alt="" />

            <div className="owners">
                <h3>{langData.owners2}</h3>
                <h1>{langData.everything}</h1>
                <p>{langData.discover1}</p>

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
                <h2>{langData.owners3}</h2>
                <h1>{langData.mylexus}</h1>
                <p>{langData.wemake}</p>
                <div className="lexus-cart">
                    <div className="left">
                        <h4>{langData.mylexus}</h4>
                        <h1>{langData.benefits}</h1>
                        <span></span>
                        <p>{langData.service}</p>
                        <p>{langData.ownersmanuals}</p>
                        <p>{langData.journey}</p>
                        <p>{langData.configure}</p>
                        <button>{langData.signin} <img src={next} alt="" /></button>
                    </div>
                    <img src={img6} alt="" />

                </div>
            </div>

        </div>
    )
}

export default Owners