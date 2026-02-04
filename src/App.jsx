import React, { useState } from 'react'
import './App.css';
import {Header} from './components/Header/Header'
import {Main} from "./components/Main/Main"

export const App = () => {
  return (
    <div className='whole-container'>
      {/* <img src="charizardx.jpg" className='app-bg' alt="Charizard" /> */}
      <Header></Header>
      <Main></Main>
      <div className='nav-bar'>
        
      </div>
    </div>
  )
}
