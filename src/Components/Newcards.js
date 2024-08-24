import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCard } from './Redux/cardSlice';
import { useStoreState } from "../Components/Redux/selector";
import locale from "../localization/locale.json";
import './Newcards.css';
import Malibu from "../assets/Sedan/Chevrolet Malibu.jpeg";
import Fusion from "../assets/Sedan/Ford Fusion.jpeg";
import Honda from "../assets/Sedan/Honda Accord.jpeg";
import Sonata from "../assets/Sedan/Hyundai Sonata.jpeg";
import Optima from "../assets/Sedan/Kia Optima.jpeg";
import Mazda6 from "../assets/Sedan/Mazda6.jpeg";
import Altima from "../assets/Sedan/Nissan Altima.jpeg";
import Subaru from "../assets/Sedan/Subaru Legacy.jpeg";
import Toyota from "../assets/Sedan/Toyota Camry.jpeg";
import Volkswagen from "../assets/Sedan/Volkswagen Passat.jpeg";
import next from "../assets/next.png";

import Golf from "../assets/Hatchback/download (10).jpeg";
import Ford from "../assets/Hatchback/download.jpeg";
import Honda1 from "../assets/Hatchback/download (1).jpeg";
import Toyota1 from "../assets/Hatchback/download (2).jpeg";
import Mazda3 from "../assets/Hatchback/download (3).jpeg";
import Hyundai from "../assets/Hatchback/download (4).jpeg";
import KiaRio from "../assets/Hatchback/download (5).jpeg";
import Spark from "../assets/Hatchback/download (6).jpeg";
import Cooper from "../assets/Hatchback/download (7).jpeg";
import Subaru1 from "../assets/Hatchback/download (8).jpeg";

import Audi from "../assets/Coupe/Audi.jpeg";
import BMW from "../assets/Coupe/BMW.jpeg";
import Camaro from "../assets/Coupe/Camaro.jpeg";
import Hondacivic from "../assets/Coupe/Hondacivic.jpeg";
import Infiniti from "../assets/Coupe/Infiniti.jpeg";
import Lexus from "../assets/Coupe/Lexus.jpeg";
import Mercedez from "../assets/Coupe/Mercedez.jpeg";
import Mustang from "../assets/Coupe/Mustang.jpeg";
import Nissan from "../assets/Coupe/Nissan.jpeg";
import Toyota2 from "../assets/Coupe/Toyota.jpeg";


import Colorado from "../assets/pickup/Colorado.jpeg";
import Fordf from "../assets/pickup/Fordf-50.jpeg";
import Gladiator from "../assets/pickup/Gladiator.jpeg";
import Ram1500 from "../assets/pickup/Ram1500.jpeg";
import Ranger from "../assets/pickup/Ranger.jpeg";
import Ridgeline from "../assets/pickup/Ridgeline.jpeg";
import Sierra from "../assets/pickup/Sierra.jpeg";
import Titan from "../assets/pickup/Titan.jpeg";
import nimadir from "../assets/pickup/download.jpeg";
import tundra from "../assets/pickup/tundra.jpeg";


import AudiA8 from "../assets/luxury-car/AudiA8.jpeg";
import Bentley from "../assets/luxury-car/Bentley.jpeg";
import Genesis from "../assets/luxury-car/Genesis.jpeg";
import Jaguar from "../assets/luxury-car/Jaguar.jpeg";
import Panamera from "../assets/luxury-car/Panamera.jpeg";
import Rolls from "../assets/luxury-car/Rolls-Royce.jpeg";
import Tesla from "../assets/luxury-car/Tesla.jpeg";
import bmw7 from "../assets/luxury-car/bmw7.jpeg";
import cobalt from "../assets/luxury-car/cobalt.jpeg";
import lexusLS from "../assets/luxury-car/lexusLS.jpeg";
import mers from "../assets/luxury-car/mers-s-class.jpeg";



import Audi1 from "../assets/Electric vehicle/Audi e-tron.jpeg";
import BMW13 from "../assets/Electric vehicle/BMW i3.jpeg";
import Bolt from "../assets/Electric vehicle/Chevrolet Bolt EV.jpeg";
import Kona from "../assets/Electric vehicle/Hyundai Kona Electric.jpeg";
import Jaguar1 from "../assets/Electric vehicle/Jaguar I-PACE.jpeg";
import Soul from "../assets/Electric vehicle/Kia Soul EV.jpeg";
import Benz from "../assets/Electric vehicle/Mercedes-Benz EQC.jpeg";
import Taycan from "../assets/Electric vehicle/Porsche Taycan.jpeg";
import Tesla1 from "../assets/Electric vehicle/Tesla Model S.jpeg";
import nissanleaf from "../assets/Electric vehicle/nissanleaf.jpeg";


import Malibuhy from "../assets/hybrid/Chevrolet Malibu Hybrid.jpeg"
import Ford1 from "../assets/hybrid/Ford Fusion Hybrid.jpeg"
import Accord from "../assets/hybrid/Honda Accord Hybrid.jpeg"
import Honda2 from "../assets/hybrid/Honda cr-v hybrid.jpeg"
import Ioniq from "../assets/hybrid/Hyundai Ioniq Hybrid.jpeg"
import Optima1 from "../assets/hybrid/Kia Optima Hybrid.jpeg"
import Lexus1 from "../assets/hybrid/Lexus ES 300h.jpeg"
import Camry from "../assets/hybrid/Toyota Camry Hybrid.jpeg"
import RAV4 from "../assets/hybrid/Toyota RAV4 Hybrid.jpeg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';


function Newcards() {
    const activeCard = useSelector((state) => state.card.activeCard);
    const dispatch = useDispatch();

    const handleCardClick = (card) => {
        dispatch(setActiveCard(card));
    };


    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang]);
    const [showMenu, setShowMenu] = useState(false);



    const Hatchback = [
        { img: Golf, name: 'Volkswagen Golf', fuel: langData.fuel },
        { img: Ford, name: 'Ford Focus', fuel: langData.fuel },
        { img: Honda1, name: 'Honda Civic Hatchback', fuel: langData.fuel },
        { img: Toyota1, name: 'Toyota Yaris', fuel: langData.fuel },
        { img: Mazda3, name: 'Mazda3 Hatchback', fuel: langData.fuel },
        { img: Hyundai, name: 'Hyundai i30', fuel: langData.fuel },
        { img: KiaRio, name: 'Kia Rio Hatchback', fuel: langData.fuel },
        { img: Spark, name: 'Chevrolet Spark:', fuel: langData.fuel },
        { img: Cooper, name: 'Mini Cooper', fuel: langData.fuel },
        { img: Subaru1, name: 'Subaru Impreza Hatchback:', fuel: langData.fuel },
    ];

    const Sedan = [
        { img: Malibu, name: 'Chevrolet Malibu', fuel: langData.fuel },
        { img: Fusion, name: 'Ford Fusion', fuel: langData.fuel },
        { img: Honda, name: 'Honda Accord', fuel: langData.fuel },
        { img: Sonata, name: 'Hyundai Sonata', fuel: langData.fuel },
        { img: Optima, name: 'Kia Optima', fuel: langData.fuel },
        { img: Mazda6, name: 'Mazda6', fuel: langData.fuel },
        { img: Altima, name: 'Nissan Altima', fuel: langData.fuel },
        { img: Subaru, name: 'Subaru Legacy', fuel: langData.fuel },
        { img: Toyota, name: 'Toyota Camry', fuel: langData.fuel },
        { img: Volkswagen, name: 'Volkswagen Passat', fuel: langData.fuel },
    ];

    const Coupe = [
        { img: Audi, name: 'Audi A5 Coupe', fuel: langData.fuel },
        { img: BMW, name: 'BMW 4 Series Coupe', fuel: langData.fuel },
        { img: Camaro, name: 'Chevrolet Camaro', fuel: langData.fuel },
        { img: Hondacivic, name: 'Honda Civic Coupe', fuel: langData.fuel },
        { img: Infiniti, name: 'Infiniti Q60', fuel: langData.fuel },
        { img: Lexus, name: 'Lexus RC', fuel: langData.fuel },
        { img: Mercedez, name: 'Mercedes-Benz C-Class Coupe', fuel: langData.fuel },
        { img: Mustang, name: 'Ford Mustang', fuel: langData.fuel },
        { img: Nissan, name: 'Nissan 370Z', fuel: langData.fuel },
        { img: Toyota2, name: 'Toyota 86', fuel: langData.fuel },
    ]

    const Pickup = [
        { img: Colorado, name: 'Chevrolet Colorado', fuel: langData.fuel },
        { img: Fordf, name: 'Ford F-150', fuel: langData.fuel },
        { img: Gladiator, name: 'Jeep Gladiator', fuel: langData.fuel },
        { img: Ram1500, name: 'Ram 1500', fuel: langData.fuel },
        { img: Ranger, name: 'Ford Ranger', fuel: langData.fuel },
        { img: Ridgeline, name: 'Honda Ridgeline', fuel: langData.fuel },
        { img: Sierra, name: 'GMC Sierra 1500', fuel: langData.fuel },
        { img: Titan, name: 'Nissan Titan', fuel: langData.fuel },
        { img: nimadir, name: 'Chevrolet Silverado', fuel: langData.fuel },
        { img: tundra, name: 'Toyota Tundra', fuel: langData.fuel },
    ]

    const Luxury = [
        { img: AudiA8, name: 'Audi A8', fuel: langData.fuel },
        { img: Bentley, name: 'Bentley Flying Spur', fuel: langData.fuel },
        { img: Genesis, name: 'Genesis G90', fuel: langData.fuel },
        { img: Jaguar, name: 'Jaguar XJ', fuel: langData.fuel },
        { img: Panamera, name: 'Porsche Panamera', fuel: langData.fuel },
        { img: Rolls, name: 'Rolls-Royce Ghost', fuel: langData.fuel },
        { img: Tesla, name: 'Tesla Model S', fuel: langData.fuel },
        { img: bmw7, name: 'BMW 7 Series', fuel: langData.fuel },
        { img: cobalt, name: 'Chevrolet Cobalt', fuel: langData.fuel },
        { img: lexusLS, name: 'Lexus LS', fuel: langData.fuel },
        { img: mers, name: 'Mercedes-Benz S-Class', fuel: langData.fuel },
    ]

    const Electric = [
        { img: Audi1, name: 'Audi e-tron', fuel: langData.fuelh },
        { img: BMW13, name: 'BMW i3', fuel: langData.fuelh },
        { img: Bolt, name: 'Chevrolet Bolt EV', fuel: langData.fuelh },
        { img: Kona, name: 'Hyundai Kona Electric', fuel: langData.fuelh },
        { img: Jaguar1, name: 'Jaguar I-PACE', fuel: langData.fuelh },
        { img: Soul, name: 'Kia Soul EV', fuel: langData.fuelh },
        { img: Benz, name: 'Mercedes-Benz EQC', fuel: langData.fuelh },
        { img: Taycan, name: 'Porsche Taycan', fuel: langData.fuelh },
        { img: nissanleaf, name: 'Nissan Leaf', fuel: langData.fuelh },
        { img: Tesla1, name: 'Tesla Model S', fuel: langData.fuelh },
    ]


    const Hybrid = [
        { img: Malibuhy, name: 'Chevrolet Malibu Hybrid', fuel: langData.fuel },
        { img: Ford1, name: 'Ford Fusion Hybrid', fuel: langData.fuel },
        { img: Accord, name: 'Honda Accord Hybrid', fuel: langData.fuel },
        { img: Honda2, name: 'Honda cr-v hybrid', fuel: langData.fuel },
        { img: Ioniq, name: 'Hyundai Ioniq Hybrid', fuel: langData.fuel },
        { img: Optima1, name: 'Kia Optima Hybrid', fuel: langData.fuel },
        { img: Lexus1, name: 'Kia Optima Hybrid', fuel: langData.fuel },
        { img: Camry, name: 'Toyota Camry Hybrid', fuel: langData.fuel },
        { img: RAV4, name: 'Toyota RAV4 Hybrid', fuel: langData.fuel },
        { img: Honda2, name: 'Honda cr-v hybrid', fuel: langData.fuel },

    ]
    return (
        <div className='Newcards'>
            <button className="menu-iconn" onClick={() => setShowMenu(!showMenu)}>
                <FontAwesomeIcon icon={showMenu ? faTimes : faBars} className='icon' />
            </button>

            <div className={`left-card-mobile ${showMenu ? 'open' : ''}`}>
                <button
                    onClick={() => handleCardClick('sedan')}
                    style={{ color: activeCard === 'sedan' ? 'white' : 'grey' }}
                >
                    Sedan
                </button>
                <button
                    onClick={() => handleCardClick('hatchback')}
                    style={{ color: activeCard === 'hatchback' ? 'white' : 'grey' }}
                >
                    Hatchback
                </button>
                <button
                    onClick={() => handleCardClick('coupe')}
                    style={{ color: activeCard === 'coupe' ? 'white' : 'grey' }}
                >
                    Coupe
                </button>
                <button
                    onClick={() => handleCardClick('pickup-truck')}
                    style={{ color: activeCard === 'pickup-truck' ? 'white' : 'grey' }}
                >
                    Pickup Truck
                </button>
                <button
                    onClick={() => handleCardClick('luxury-car')}
                    style={{ color: activeCard === 'luxury-car' ? 'white' : 'grey' }}
                >
                    Luxury Car
                </button>
                <button
                    onClick={() => handleCardClick('electric-vehicle')}
                    style={{ color: activeCard === 'electric-vehicle' ? 'white' : 'grey' }}
                >
                    Electric Vehicle
                </button>
                <button
                    onClick={() => handleCardClick('hybrid-car')}
                    style={{ color: activeCard === 'hybrid-car' ? 'white' : 'grey' }}
                >
                    Hybrid Car
                </button>
            </div>


            <div className="left-card">
                <button
                    onClick={() => handleCardClick('sedan')}
                    style={{ color: activeCard === 'sedan' ? 'white' : 'grey' }}
                >
                    Sedan
                </button>
                <button
                    onClick={() => handleCardClick('hatchback')}
                    style={{ color: activeCard === 'hatchback' ? 'white' : 'grey' }}
                >
                    Hatchback
                </button>
                <button
                    onClick={() => handleCardClick('coupe')}
                    style={{ color: activeCard === 'coupe' ? 'white' : 'grey' }}
                >
                    Coupe
                </button>
                <button
                    onClick={() => handleCardClick('pickup-truck')}
                    style={{ color: activeCard === 'pickup-truck' ? 'white' : 'grey' }}
                >
                    Pickup Truck
                </button>
                <button
                    onClick={() => handleCardClick('luxury-car')}
                    style={{ color: activeCard === 'luxury-car' ? 'white' : 'grey' }}
                >
                    Luxury Car
                </button>
                <button
                    onClick={() => handleCardClick('electric-vehicle')}
                    style={{ color: activeCard === 'electric-vehicle' ? 'white' : 'grey' }}
                >
                    Electric Vehicle
                </button>
                <button
                    onClick={() => handleCardClick('hybrid-car')}
                    style={{ color: activeCard === 'hybrid-car' ? 'white' : 'grey' }}
                >
                    Hybrid Car
                </button>
            </div>
            <div className="right-card">

                {activeCard === 'sedan' && (
                    <div className="Sedan">
                        <div className="sedan-cart">
                            {Sedan.map((item, index) => (
                                <div key={index} className="sedans">
                                    <img src={item.img} alt={item.name} />
                                    <h2>{item.name}</h2>
                                    <span>{item.fuel}</span>
                                    <button>{langData.explore}<img src={next} alt="..." /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                
                {activeCard === 'hatchback' && (
                    <div className="Hatchback">
                        <div className="hatchback-card">
                            {Hatchback.map((item, index) => (
                                <div key={index} className="hatchbacks">
                                    <img src={item.img} alt={item.name} />
                                    <h2>{item.name}</h2>
                                    <span>{item.fuel}</span>
                                    <button>{langData.explore}<img src={next} alt="..." /></button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {activeCard === 'coupe' && <div className="Coupe">
                    <div className="coupe-card">
                        {Coupe.map((item, index) => (
                            <div key={index} className="coupes">
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                                <span>{item.fuel}</span>
                                <button>{langData.explore}<img src={next} alt="..." /></button>
                            </div>
                        ))}
                    </div>
                </div>}
                {activeCard === 'pickup-truck' && <div className="PickupTruck">
                    <div className="pickup-card">
                        {Pickup.map((item, index) => (
                            <div key={index} className="pickups">
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                                <span>{item.fuel}</span>
                                <button>{langData.explore}<img src={next} alt="..." /></button>
                            </div>
                        ))}
                    </div>
                </div>}
                {activeCard === 'luxury-car' && <div className="LuxuryCar">
                    <div className="luxury-card">
                        {Luxury.map((item, index) => (
                            <div key={index} className="luxuries">
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                                <span>{item.fuel}</span>
                                <button>{langData.explore}<img src={next} alt="..." /></button>
                            </div>
                        ))}
                    </div>
                </div>}
                {activeCard === 'electric-vehicle' && <div className="ElectricVehicle">
                    <div className="electric-card">
                        {Electric.map((item, index) => (
                            <div key={index} className="electrics">
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                                <span>{item.fuel}</span>
                                <button>{langData.explore}<img src={next} alt="..." /></button>
                            </div>
                        ))}
                    </div>
                </div>}
                {activeCard === 'hybrid-car' && <div className="HybridCar">
                    <div className="hybrid-card">
                        {Hybrid.map((item, index) => (
                            <div key={index} className="hybrids">
                                <img src={item.img} alt={item.name} />
                                <h2>{item.name}</h2>
                                <span>{item.fuel}</span>
                                <button>{langData.explore}<img src={next} alt="..." /></button>
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default Newcards;