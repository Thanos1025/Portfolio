import React from 'react'
import './SkillCard.css'
import { SkillProgressBar } from '../SkillProgressBar/SkillProgressBar'

export const SkillCard = (props) => {
  const {departmentName, skillStats} = props;
  return (
    <div className='skill-card'>
      <h1>{departmentName}</h1>
      <hr />
      <div className='skill-stats-wrapper'>
        {
          skillStats.map((skillStat)=>{
            return (<SkillProgressBar name={skillStat.name} progress={skillStat.progress}></SkillProgressBar>)
          })
        }
      </div>
    </div>
  )
}
