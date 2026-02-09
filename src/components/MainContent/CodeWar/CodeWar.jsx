import React from 'react'
import './CodeWar.css'
import { SecondaryButton } from '../../Button/SecondaryButton/SecondaryButton'
import { FrostGlassBox } from '../../FrostGlassBox/FrostGlassBox'

export const CodeWar = () => {
  return (
    <div className='codewar'>
      <div className='codewar-content'>
        <SecondaryButton>Codewar</SecondaryButton>
        <h1>Code War Journey</h1>
        <p>My competitive programming achievements and progress</p>
      </div>
      <div onClick={()=>window.open("https://www.codewars.com/users/Thanos1025/stats")} className='codewar-profile-container'>
        <img src="codewar.svg" alt="" />
        <div className='codewar-profile'>
          <h1>Thanos1025</h1>
          <p>My Progress in Coding</p>
        </div>
      </div>
      <div className='codewar-stat-buttons-wrapper'>
        <FrostGlassBox className="codewar-stat-button">
          <h1>6kyu</h1>
          <p>Current Rank</p>
        </FrostGlassBox>
        <FrostGlassBox className="codewar-stat-button">
          <h1>212</h1>
          <p>Honor Points</p>
        </FrostGlassBox>
        <FrostGlassBox className="codewar-stat-button">
          <h1>55+</h1>
          <p>Katas Completed</p>
        </FrostGlassBox>
      </div>
    </div>
  )
}
