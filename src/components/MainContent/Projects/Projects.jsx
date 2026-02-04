import React from 'react'
import './Projects.css';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { SecondaryButton } from '../../Button/SecondaryButton/SecondaryButton';

export const Projects = () => {
  return (
    <div className='projects'>
      <div className='projects-content'>
        <SecondaryButton>Projects</SecondaryButton>
        <h1>Projects</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
      </div>
      <div className='project-cards-wrapper'>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
    </div>
  )
}
