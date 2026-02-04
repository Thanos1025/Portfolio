import React from 'react'
import './SkillCard.css'
import { SkillProgressBar } from '../SkillProgressBar/SkillProgressBar'

export const SkillCard = () => {
  return (
    <div className='skill-card'>
      <h1>Web Technologies</h1>
      <hr />
      <div className='skill-stats-wrapper'>
        <SkillProgressBar name="SkillName" progress={60}></SkillProgressBar>
        <SkillProgressBar name="SkillName" progress={60}></SkillProgressBar>
        <SkillProgressBar name="SkillName" progress={60}></SkillProgressBar>
        <SkillProgressBar name="SkillName" progress={60}></SkillProgressBar>
        <SkillProgressBar name="SkillName" progress={60}></SkillProgressBar>
      </div>
    </div>
  )
}
