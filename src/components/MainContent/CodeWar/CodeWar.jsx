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
        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesenti</p>
      </div>
      <div className='codewar-profile-container'>
        <img src="djkj.jpg" alt="" />
        <div className='codewar-profile'>
          <h1>Hello wdc,fm d,dv</h1>
          <p>iufhgfjkdewlkejdfh ghfjkedjfhvf</p>
        </div>
      </div>
      <div className='codewar-stat-buttons-wrapper'>
        <FrostGlassBox className="codewar-stat-button">
          <h1>5kyu</h1>
          <p>Current Rank</p>
        </FrostGlassBox>
        <FrostGlassBox className="codewar-stat-button">
          <h1>360</h1>
          <p>Honor Points</p>
        </FrostGlassBox>
        <FrostGlassBox className="codewar-stat-button">
          <h1>45+</h1>
          <p>Katas Completed</p>
        </FrostGlassBox>
      </div>
    </div>
  )
}
