import React from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className='Home'>
      <div className="First">
          <h2>SELECT A <br /> COUNTRY</h2>
          <p>Please select the relevant country to <br /> continue to your website.</p>
      </div>
      <h4>LEXUX EUROPE</h4>
      <div className="alll">
      <div className="Countries">
      <button class="flag-icon flag-icon-be"><NavLink to='/Belgium'>Belgium(Français)</NavLink></button>
      <button class="flag-icon flag-icon-at">Austria</button>
      <button class="flag-icon flag-icon-az">Azerbijan</button>
      <button class="flag-icon flag-icon-bg">Bulgaria</button>
      <button class="flag-icon flag-icon-hr">Croatia</button>
      <button class="flag-icon flag-icon-cz">CzechRepublic</button>
      </div>
      <div className="Countries1">
      <button class="flag-icon flag-icon-dk">Denmark</button>
      <button class="flag-icon flag-icon-ee">Estoina</button>
      <button class="flag-icon flag-icon-fi">Finland</button>
      <button class="flag-icon flag-icon-fr">France</button>
      <button class="flag-icon flag-icon-ge">Georgia</button>
      <button class="flag-icon flag-icon-de">Germany</button>
      </div>
      <div className="Countries2">
      <button class="flag-icon flag-icon-gr">Greece</button>
      <button class="flag-icon flag-icon-hu">Hungary</button>
      <button class="flag-icon flag-icon-is">Iceland</button>
      <button class="flag-icon flag-icon-ie">Ireland</button>
      <button class="flag-icon flag-icon-it">Italy</button>
      <button class="flag-icon flag-icon-lv">Latvia</button>
      </div>
        </div>
    </div>
    </>
  )
}

export default Home