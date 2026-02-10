import React from 'react'
import './Projects.css';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { SecondaryButton } from '../../Button/SecondaryButton/SecondaryButton';

export const Projects = () => {
  const projects = [
    {
      name: "Zoho writer style editor replica",
      description: "A text editing app which format your styles of text ",
      learned: "Realtime editor working algorithm and manipulate the text by creating Abract Syntax Tree and render it to UI",
      languages: ["html/css", "javascript", "node-js", "mysql"],
      projectLink: "https://github.com/Thanos1025/Writer",
      previewImage: "writer.png"
    },
    {
      name: "Email System",
      description: "A console email application where you can send, recieve, draft your email inside my app.",
      learned: "Through this project I have learned business logic of how to send, draft email and create subemails and how to apply fiter and many other.",
      languages: ["java","mysql"],
      projectLink: "https://github.com/Thanos1025/email_system",
      previewImage: "email_system.png"
    },
    {
      name: "ORM Tool",
      description: "A framework to query database without writing query by using annotation and read it by reflection.",
      learned: "I got a grasp about what are reflections and how should we use it in real applications.",
      languages: ["java","mysql"],
      projectLink: "https://github.com/Thanos1025/ORMTool",
      previewImage: "orm_tool.png"
    },
    {
      name: "Ui Builder",
      description: "An image to code converter LLM where you give an image and read it with an llm and convert it into code",
      learned: "How to work with local llm like llama, qwen and how to build an agentic flow.",
      languages: ["react/css","java","mysql", "Combined Project-Priya" ],
      projectLink: "https://github.com/Thanos1025/ORMTool",
      previewImage: "uibuilder.png"
    },
    {
      name: "Versioned Stack",
      description: "A custom stack data structure which takes you to the your previous timeline.",
      learned: "Internal Working of Stack, HashMap and HashSet",
      languages: ["java"],
      projectLink: "https://github.com/Thanos1025/CustomCollections",
      previewImage: "versioned_stack.png"
    }
  ]
  return (
    <div className='projects'>
      <div className='projects-content'>
        <SecondaryButton>Arts</SecondaryButton>
        <h1>Projects</h1>
        <p>This is the museum of my projects, showcasing my finest craftsmanship.</p>
      </div>
      <div className='project-cards-wrapper'>
        {
          projects.map((project)=>{
            return (<ProjectCard name={project.name} description={project.description} learned={project.learned} languages={project.languages} projectLink={project.projectLink} previewImage={project.previewImage}></ProjectCard>)
          })
        }
      </div>
    </div>
  )
}
