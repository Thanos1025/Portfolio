import React from 'react'
import './Assignments.css';
import { FrostGlassBox } from '../../FrostGlassBox/FrostGlassBox';

export const Assignments = () => {

  return (
    <div className='assignments'>
      <div className='assignments-language-buttons-wrapper'>
        <div className='language-button-wrapper selected-language-button'>
          <div className='language-button'>
            <FrostGlassBox className='language-button-glass'></FrostGlassBox>
          </div>
          <div className='language-button-inner-text'>Javascript</div>
        </div>
        <div className='language-button-wrapper'>
          <div className='language-button'>
            <FrostGlassBox className='language-button-glass'></FrostGlassBox>
          </div>
          <div className='language-button-inner-text'>Html</div>
        </div>
        <div className='language-button-wrapper'>
          <div className='language-button'>
            <FrostGlassBox className='language-button-glass'></FrostGlassBox>
          </div>
          <div className='language-button-inner-text'>Css</div>
        </div>
        <div className='language-button-wrapper'>
          <div className='language-button'>
            <FrostGlassBox className='language-button-glass'></FrostGlassBox>
          </div>
          <div className='language-button-inner-text'>Java</div>
        </div>
      </div>
      <ul className='assignments-list'>
        <FrostGlassBox className="assignment-button"><span>01</span>Helllo asssignment</FrostGlassBox>
        <FrostGlassBox className="assignment-button"><span>01</span>Helllo asssignment</FrostGlassBox>
        <FrostGlassBox className="assignment-button"><span>01</span>Helllo asssignment</FrostGlassBox>
        <FrostGlassBox className="assignment-button"><span>01</span>Helllo asssignment</FrostGlassBox>
        <FrostGlassBox className="assignment-button"><span>01</span>Helllo asssignment</FrostGlassBox>
        <FrostGlassBox className="assignment-button"><span>01</span>Helllo asssignment</FrostGlassBox>
      </ul>
    </div>
  )
}
