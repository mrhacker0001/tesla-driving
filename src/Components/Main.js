import React from 'react'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Newcards from './Newcards'
import Electrified from './Electrified'
import Business from './Business'
import Owners from './Owners'
import Home from './Home'
import Belgium from './Belgium'

function Main() {
    return (
        <div className='Main'>
            <Navbar />
            <Routes>
            <Route path='/' element={<Home />} />
                <Route path='/Newcards' element={<Newcards />} />
                <Route path='/Electrified' element={<Electrified />} />
                <Route path='/Business' element={<Business />} />
                <Route path='/Owners' element={<Owners />} />
                <Route path='/Belgium' element={<Belgium/>} />
            </Routes>
        </div>
    )
}

export default Main