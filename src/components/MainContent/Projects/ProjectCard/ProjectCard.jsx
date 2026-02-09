import React from 'react'
import './ProjectCard.css'
import { FrostGlassBox } from '../../../FrostGlassBox/FrostGlassBox';
import { SecondaryButton } from '../../../Button/SecondaryButton/SecondaryButton';

export const ProjectCard = (props) => {
    const { name, description, learned, languages, projectLink, previewImage } = props;
    return (
        <div onClick={() => window.open(projectLink, "_blank")}>
            <FrostGlassBox className="project-card">
                <div>
                    <h1>{name}</h1>
                    <p>{description}</p>
                    <p>
                        <span>What I have Learned: </span>
                        {learned}
                    </p>
                    <div className="language-buttons-wrapper">
                        {languages.map(language => {
                            return <SecondaryButton>{language}</SecondaryButton>
                        })}
                    </div>
                </div>
                <div className='image-wrapper'>
                    <img src={previewImage}/>
                </div>
            </FrostGlassBox>
        </div>
    )
}
