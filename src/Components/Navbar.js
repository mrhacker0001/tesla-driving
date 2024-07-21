import React, { useMemo } from 'react'
import "./Navbar.css"
import logo from "../assets/download.jpeg"
import search from "../assets/search (1).png"
import { NavLink } from 'react-router-dom'
import { useStoreState } from "../Components/Redux/selector";
import locale from "../localization/locale.json";
import { useDispatch } from "react-redux";
import { setLang } from "../Components/Redux/lang";

function Navbar() {

    const states = useStoreState();
    const langData = useMemo(() => locale[states.lang], [states.lang]);
    const dispatch = useDispatch();
    return (
        <div className='Navbar'>
            <div className="texts">
                <NavLink to='/'> <img src={logo} alt="..." /></NavLink>
                <NavLink to='/Newcards'> <button>{langData.car}</button></NavLink>
                <NavLink to='/Electrified'><button>{langData.elect} </button></NavLink>
                <NavLink to='/Business'><button>{langData.busines}</button></NavLink>
                <NavLink to='/Owners'><button>{langData.own}</button></NavLink>
                <NavLink to='/DiscoverLexus'><button>{langData.dis} </button></NavLink>
                <NavLink to='/LexusTour'><button>Lexus X ATP Tour</button></NavLink>
            </div>
            <div className="search-panel">
                <select
                className='language'
                    value={states.lang}
                    onChange={(e) => dispatch(setLang(e.target.value))}
                >
                    <option value="uz">UZ</option>
                    <option value="en">EN</option>
                </select>
                <img src={search} alt="..." />
                <input type="text" name='text' placeholder='Search' />
            </div>

        </div >
    )
}

export default Navbar