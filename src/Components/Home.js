import React, { useMemo } from 'react'
import "./Home.css"
import { NavLink } from 'react-router-dom'
import { useStoreState } from "../Components/Redux/selector";
import locale from "../localization/locale.json";
import Feedback from './Feedback';


function Home() {

  const states = useStoreState();
  const langData = useMemo(() => locale[states.lang], [states.lang]);

  return (
    <>
      <div className='Home'>
        <div className="First">
          <h2>{langData.country}<br />{langData.select}</h2>
          <p>{langData.relevant} <br />{langData.please}</p>
        </div>
        <h4>{langData.lexux}</h4>
        <div className="alll">
          <div className="Countries">
            <button class="flag-icon flag-icon-be"><NavLink to='/Belgium'>{langData.belgium}</NavLink></button>
            <button class="flag-icon flag-icon-at">{langData.austria}</button>
            <button class="flag-icon flag-icon-az">{langData.azerbijan}</button>
            <button class="flag-icon flag-icon-bg">{langData.bulgaria}</button>
            <button class="flag-icon flag-icon-hr">{langData.croatia}</button>
            <button class="flag-icon flag-icon-cz">{langData.czechrepublic}</button>
          </div>
          <div className="Countries1">
            <button class="flag-icon flag-icon-dk">{langData.denmark}</button>
            <button class="flag-icon flag-icon-ee">{langData.estonia}</button>
            <button class="flag-icon flag-icon-fi">{langData.finland}</button>
            <button class="flag-icon flag-icon-fr">{langData.france}</button>
            <button class="flag-icon flag-icon-ge">{langData.georgia}</button>
            <button class="flag-icon flag-icon-de">{langData.germany}</button>
          </div>
          <div className="Countries2">
            <button class="flag-icon flag-icon-gr">{langData.greece}</button>
            <button class="flag-icon flag-icon-hu">{langData.hungary}</button>
            <button class="flag-icon flag-icon-is">{langData.iceland}</button>
            <button class="flag-icon flag-icon-ie">{langData.ireland}</button>
            <button class="flag-icon flag-icon-it">{langData.italy}</button>
            <button class="flag-icon flag-icon-lv">{langData.latvia}</button>
          </div>
        </div>
      </div>
      <Feedback />
    </>
  )
}

export default Home