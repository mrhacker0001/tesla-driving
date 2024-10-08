import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Newcards from './Newcards'
import Electrified from './Electrified'
import Business from './Business'
import Owners from './Owners'
import Home from './Home'
import Belgium from './Belgium'
import DiscoverLexus from './DiscoverLexus'
import LexusTour from './LexusTour'
import '../App.css'

function Main() {
    return (
        <div className='Main'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Newcards' element={<Newcards />} />
                <Route path='/Electrified' element={<Electrified />} />
                <Route path='/Business' element={<Business />} />
                <Route path='/Owners' element={<Owners />} />
                <Route path='/DiscoverLexus' element={<DiscoverLexus />} />
                <Route path='/LexusTour' element={<LexusTour />} />
                <Route path='/Belgium' element={<Belgium />} />
            </Routes>
        </div>
    )
}

export default Main