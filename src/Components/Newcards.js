import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCard } from './Redux/cardSlice';
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


function Newcards() {
    const activeCard = useSelector((state) => state.card.activeCard);
    const dispatch = useDispatch();

    const handleCardClick = (card) => {
        dispatch(setActiveCard(card));
    };

    const Hatchback = [
        { img: Golf, name: 'Volkswagen Golf', fuel: 'petrol and hybrid' },
        { img: Ford, name: 'Ford Focus', fuel: 'petrol and hybrid' },
        { img: Honda1, name: 'Honda Civic Hatchback', fuel: 'petrol and hybrid' },
        { img: Toyota1, name: 'Toyota Yaris', fuel: 'petrol and hybrid' },
        { img: Mazda3, name: 'Mazda3 Hatchback', fuel: 'petrol and hybrid' },
        { img: Hyundai, name: 'Hyundai i30', fuel: 'petrol and hybrid' },
        { img: KiaRio, name: 'Kia Rio Hatchback', fuel: 'petrol and hybrid' },
        { img: Spark, name: 'Chevrolet Spark:', fuel: 'petrol and hybrid' },
        { img: Cooper, name: 'Mini Cooper', fuel: 'petrol and hybrid' },
        { img: Subaru1, name: 'Subaru Impreza Hatchback:', fuel: 'petrol and hybrid' },
    ];

    const Sedan = [
        { img: Malibu, name: 'Chevrolet Malibu', fuel: 'petrol and hybrid' },
        { img: Fusion, name: 'Ford Fusion', fuel: 'petrol and hybrid' },
        { img: Honda, name: 'Honda Accord', fuel: 'petrol and hybrid' },
        { img: Sonata, name: 'Hyundai Sonata', fuel: 'petrol and hybrid' },
        { img: Optima, name: 'Kia Optima', fuel: 'petrol and hybrid' },
        { img: Mazda6, name: 'Mazda6', fuel: 'petrol and hybrid' },
        { img: Altima, name: 'Nissan Altima', fuel: 'petrol and hybrid' },
        { img: Subaru, name: 'Subaru Legacy', fuel: 'petrol and hybrid' },
        { img: Toyota, name: 'Toyota Camry', fuel: 'petrol and hybrid' },
        { img: Volkswagen, name: 'Volkswagen Passat', fuel: 'petrol and hybrid' },
    ];

    const Coupe = [
        { img: Audi, name: 'Audi A5 Coupe', fuel: 'petrol and hybrid' },
        { img: BMW, name: 'BMW 4 Series Coupe', fuel: 'petrol and hybrid' },
        { img: Camaro, name: 'Chevrolet Camaro', fuel: 'petrol and hybrid' },
        { img: Hondacivic, name: 'Honda Civic Coupe', fuel: 'petrol and hybrid' },
        { img: Infiniti, name: 'Infiniti Q60', fuel: 'petrol and hybrid' },
        { img: Lexus, name: 'Lexus RC', fuel: 'petrol and hybrid' },
        { img: Mercedez, name: 'Mercedes-Benz C-Class Coupe', fuel: 'petrol and hybrid' },
        { img: Mustang, name: 'Ford Mustang', fuel: 'petrol and hybrid' },
        { img: Nissan, name: 'Nissan 370Z', fuel: 'petrol and hybrid' },
        { img: Toyota2, name: 'Toyota 86', fuel: 'petrol and hybrid' },
    ]

    const Pickup = [
        { img: Colorado, name: 'Chevrolet Colorado', fuel: 'petrol and hybrid' },
        { img: Fordf, name: 'Ford F-150', fuel: 'petrol and hybrid' },
        { img: Gladiator, name: 'Jeep Gladiator', fuel: 'petrol and hybrid' },
        { img: Ram1500, name: 'Ram 1500', fuel: 'petrol and hybrid' },
        { img: Ranger, name: 'Ford Ranger', fuel: 'petrol and hybrid' },
        { img: Ridgeline, name: 'Honda Ridgeline', fuel: 'petrol and hybrid' },
        { img: Sierra, name: 'GMC Sierra 1500', fuel: 'petrol and hybrid' },
        { img: Titan, name: 'Nissan Titan', fuel: 'petrol and hybrid' },
        { img: nimadir, name: 'Chevrolet Silverado', fuel: 'petrol and hybrid' },
        { img: tundra, name: 'Toyota Tundra', fuel: 'petrol and hybrid' },
    ]

    const Luxury = [
        { img: AudiA8, name: 'Audi A8', fuel: 'petrol and hybrid' },
        { img: Bentley, name: 'Bentley Flying Spur', fuel: 'petrol and hybrid' },
        { img: Genesis, name: 'Genesis G90', fuel: 'petrol and hybrid' },
        { img: Jaguar, name: 'Jaguar XJ', fuel: 'petrol and hybrid' },
        { img: Panamera, name: 'Porsche Panamera', fuel: 'petrol and hybrid' },
        { img: Rolls, name: 'Rolls-Royce Ghost', fuel: 'petrol and hybrid' },
        { img: Tesla, name: 'Tesla Model S', fuel: 'petrol and hybrid' },
        { img: bmw7, name: 'BMW 7 Series', fuel: 'petrol and hybrid' },
        { img: cobalt, name: 'Chevrolet Cobalt', fuel: 'petrol and hybrid' },
        { img: lexusLS, name: 'Lexus LS', fuel: 'petrol and hybrid' },
        { img: mers, name: 'Mercedes-Benz S-Class', fuel: 'petrol and hybrid' },
    ]

    const Electric = [
        { img: Audi1, name: 'Audi e-tron', fuel: 'hybrid' },
        { img: BMW13, name: 'BMW i3', fuel: 'hybrid' },
        { img: Bolt, name: 'Chevrolet Bolt EV', fuel: 'hybrid' },
        { img: Kona, name: 'Hyundai Kona Electric', fuel: 'hybrid' },
        { img: Jaguar1, name: 'Jaguar I-PACE', fuel: 'hybrid' },
        { img: Soul, name: 'Kia Soul EV', fuel: 'hybrid' },
        { img: Benz, name: 'Mercedes-Benz EQC', fuel: 'hybrid' },
        { img: Taycan, name: 'Porsche Taycan', fuel: 'hybrid' },
        { img: nissanleaf, name: 'Nissan Leaf', fuel: 'hybrid' },
        { img: Tesla1, name: 'Tesla Model S', fuel: 'hybrid' },
    ]


    const Hybrid = [
        { img: Malibuhy, name: 'Chevrolet Malibu Hybrid', fuel: 'petrol and hybrid' },
        { img: Ford1, name: 'Ford Fusion Hybrid', fuel: 'petrol and hybrid' },
        { img: Accord, name: 'Honda Accord Hybrid', fuel: 'petrol and hybrid' },
        { img: Honda2, name: 'Honda cr-v hybrid', fuel: 'petrol and hybrid' },
        { img: Ioniq, name: 'Hyundai Ioniq Hybrid', fuel: 'petrol and hybrid' },
        { img: Optima1, name: 'Kia Optima Hybrid', fuel: 'petrol and hybrid' },
        { img: Lexus1, name: 'Kia Optima Hybrid', fuel: 'petrol and hybrid' },
        { img: Camry, name: 'Toyota Camry Hybrid', fuel: 'petrol and hybrid' },
        { img: RAV4, name: 'Toyota RAV4 Hybrid', fuel: 'petrol and hybrid' },
        { img: Honda2, name: 'Honda cr-v hybrid', fuel: 'petrol and hybrid' },

    ]
    return (
        <div className='Newcards'>
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
                                    <button>Explore <img src={next} alt="..." /></button>
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
                                    <button>Explore <img src={next} alt="..." /></button>
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
                                <button>Explore <img src={next} alt="..." /></button>
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
                                <button>Explore <img src={next} alt="..." /></button>
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
                                <button>Explore <img src={next} alt="..." /></button>
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
                                <button>Explore <img src={next} alt="..." /></button>
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
                                <button>Explore <img src={next} alt="..." /></button>
                            </div>
                        ))}
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default Newcards;