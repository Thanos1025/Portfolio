import React from 'react'
import './Skills.css'
import { SecondaryButton } from '../../Button/SecondaryButton/SecondaryButton';
import { SkillCard } from './SkillCard/SkillCard';

export const Skills = () => {
  const skillCards = [
    {
      departmentName: "Frontend",
      skillStats: [
        {
          name: "Html",
          progress: 67
        },
        {
          name: "CSS",
          progress: 65
        },
        {
          name: "Javascript",
          progress: 68
        },
        {
          name: "React",
          progress: 72
        }
      ]
    },
    {
      departmentName: "Backend & Databases",
      skillStats: [
        {
          name: "Java",
          progress: 78
        },
        {
          name: "Node js",
          progress: 68
        },
        {
          name: "Mysql",
          progress: 63
        }
      ]
    },
    {
      departmentName: "Tools",
      skillStats: [
        {
          name: "Linux",
          progress: 72
        },
        {
          name: "Git",
          progress: 84
        },
        {
          name: "Catalyst",
          progress: 65
        },
        {
          name: "Ollama",
          progress: 53
        }
      ]
    }
  ]
  return (
    <div className='skills'>
      <div className='skills-content'>
        <SecondaryButton>Expertise</SecondaryButton>
        <h1>Technical Skills</h1>
        <p>Languages and Tools</p>
      </div>
      <div className='skillcards-wrapper'>
        {skillCards.map((skillCard)=>{
          return (<SkillCard departmentName={skillCard.departmentName} skillStats={skillCard.skillStats}></SkillCard>)
        })}
      </div>
    </div>
  )
}
