import React from 'react'
import './SkillProgressBar.css'
import {FrostGlassBox} from '../../../FrostGlassBox/FrostGlassBox';

export const SkillProgressBar = (props) => {
  const {name, progress} = props;
  return (
    <li className='skill-progress-container'>
      <div className='skill-percentage-wrapper'>
        <h2>{name}</h2>
        <h3>{progress}%</h3>
      </div>
      <FrostGlassBox className='skill-progress-bar'>
        <div style={{width: `${progress}%`}} className='skill-progress'></div>
      </FrostGlassBox>
    </li>
  )
}
