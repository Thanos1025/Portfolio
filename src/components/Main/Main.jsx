import React from 'react'
import { AboutMe } from '../MainContent/AboutMe/AboutMe'
import {Projects} from '../MainContent/Projects/Projects';
import {CodeWar} from '../MainContent/CodeWar/CodeWar';
import {Skills} from '../MainContent/Skills/Skills';
import {Assignments} from '../MainContent/Assignments/Assignments';
import {Footer} from '../MainContent/Footer/Footer';
import './Main.css'

export const  Main = () => {
  return (
    <div className='main'>
        <AboutMe></AboutMe>
        <Projects></Projects>
        <Skills></Skills>
        <Assignments></Assignments>
        <CodeWar></CodeWar>
        <Footer></Footer>
    </div>
  )
}
