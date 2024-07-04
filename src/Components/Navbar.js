import React from 'react'
import "./Navbar.css"
import logo from "../assets/download.jpeg"
import search from "../assets/search (1).png"
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="texts">
                <NavLink to='/'> <img src={logo} alt="..." /></NavLink>
                <NavLink to='/Newcards'> <button>New Cards</button></NavLink>
                <NavLink to='/Electrified'><button>Electrified </button></NavLink>
                <NavLink to='/Business'><button>Business</button></NavLink>
                <NavLink to='/Owners'><button>Owners</button></NavLink>
                <NavLink to='/DiscoverLexus'><button>Discover Lexus</button></NavLink>
                <NavLink to='Lexus X ATP Tour'><button>Lexus X ATP Tour</button></NavLink>
            </div>
            <div className="search-panel">
                <img src={search} alt="..." />
                <input type="text" name='text' placeholder='Search' />
            </div>

        </div >
    )
}

export default Navbar