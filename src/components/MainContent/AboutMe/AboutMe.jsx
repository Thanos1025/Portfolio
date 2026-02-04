import React from 'react'
import './AboutMe.css';
import { SecondaryButton } from '../../Button/SecondaryButton/SecondaryButton';

export const AboutMe = () => {
    return (
        <div className='about-me'>
            <div className='about-me-content'>
                <SecondaryButton>About me</SecondaryButton>
                <h1>
                    <span>Helo I am</span>
                    <br />
                    Ponyogi, <span className='dev'>Developer</span>
                </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                <div className='contact-link-buttons-wrapper'>
                    <button>GitHub</button>
                    <button>Instagram</button>
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
