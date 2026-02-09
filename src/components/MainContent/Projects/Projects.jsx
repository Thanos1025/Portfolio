import React from 'react'
import './Projects.css';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { SecondaryButton } from '../../Button/SecondaryButton/SecondaryButton';

export const Projects = () => {
  const projects = [
    {
      name: "Zoho writer style editor replica",
      description: "A text editing app where format your styles of text ",
      learned: "Realtime editor working algorith and how to manipulate the text by creating as Abract Syntac Tree and render it to UI",
      languages: ["html/css", "javascript", "node-js", "mysql"],
      projectLink: "https://github.com/Thanos1025/Writer",
      previewImage: "writer.png"
    },
    {
      name: "Email System",
      description: "A console email application where you can send, recieve, draft your email inside my app. In future, I will try to expand it with SMDP server.",
      learned: "Through this project I have learned business logic of how to send, draft email and create subemails and how to apply fiter and many other.",
      languages: ["java","mysql"],
      projectLink: "https://github.com/Thanos1025/email_system",
      previewImage: "email_system.png"
    },
    {
      name: "ORM Tool",
      description: "A framework to querying database without writing query by annotation in the classes and read it by reflection.",
      learned: "I got a grap about what are reflection and how should we use it in real applications.",
      languages: ["java","mysql"],
      projectLink: "https://github.com/Thanos1025/ORMTool",
      previewImage: "orm_tool.png"
    },
    {
      name: "Ui Builder",
      description: "An image to code converter LLM where you give me an image as an image, we read it with an llm and convert it into code",
      learned: "How to work with local llm like llama, qwen and how to build an agentic flow",
      languages: ["react/css","java","mysql", "Combined Project-Priya" ],
      projectLink: "https://github.com/Thanos1025/ORMTool",
      previewImage: "uibuilder.png"
    },
    {
      name: "Versioned Stack",
      description: "A custom stack data structure where you go back to your previous timelien.",
      learned: "Internal Working of stack, hashmap and hashset",
      languages: ["java"],
      projectLink: "https://github.com/Thanos1025/CustomCollections",
      previewImage: "versioned_stack.png"
    }
  ]
  return (
    <div className='projects'>
      <div className='projects-content'>
        <SecondaryButton>Projects</SecondaryButton>
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
