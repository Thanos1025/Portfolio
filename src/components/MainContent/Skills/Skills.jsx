import React from 'react'
import './Skills.css'
import { SecondaryButton } from '../../Button/SecondaryButton/SecondaryButton';
import { SkillCard } from './SkillCard/SkillCard';

export const Skills = () => {
  return (
    <div className='skills'>
      <div className='skills-content'>
        <SecondaryButton>Expertise</SecondaryButton>
        <h1>Technical Skills</h1>
        <p>Technologia Technologia Technologia Technologia Technologia Technologia Technologia</p>
      </div>
      <div className='skillcards-wrapper'>
        <SkillCard></SkillCard>
        <SkillCard></SkillCard>
        <SkillCard></SkillCard>
      </div>
    </div>
  )
}
