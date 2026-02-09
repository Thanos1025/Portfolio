import React from 'react'
import './AboutMe.css';
import { SecondaryButton } from '../../Button/SecondaryButton/SecondaryButton';

export const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className='about-me-content'>
                <SecondaryButton>About me</SecondaryButton>
                <h1>Hello I am</h1>
                <h1>Ponyogi,</h1>
                <h1 style={{color: "var(--accent-primary"}}>Fullstack Developer</h1>
                <p>
                    {/* I am driven to achieve greater heights in life and create work that people around the world will remember. 
                    <br/> */}
                    I am always eager to learn, confident in my abilities, and resilient in the face of challenges.
                    <br/>
                    I thrive in collaborative environments and enjoy bringing positive energy to the workplace.
                    <br/>
                    {/* My goal is to build software that genuinely makes people's lives easier — because seeing a customer smile is what makes the work truly meaningful to me. */}
                </p>
                <div className='contact-link-buttons-wrapper'>
                    <button onClick={()=>window.open("https://github.com/Thanos1025", '_blank')}>GitHub</button>
                    <button onClick={()=>window.open("https://www.linkedin.com/in/ponyogi-m-6278b7375/", '_blank')}>LinkedIn</button>
                </div>
            </div>
            <div className="image-container">
                <div className='image-frame'>
                    <img src='ultimate.png'></img>
                </div>
            </div>
        </div>
    )
}
