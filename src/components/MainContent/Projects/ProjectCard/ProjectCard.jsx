import React from 'react'
import './ProjectCard.css'
import { FrostGlassBox } from '../../../FrostGlassBox/FrostGlassBox';
import {SecondaryButton} from '../../../Button/SecondaryButton/SecondaryButton';

export const ProjectCard = () => {
    return (
        <FrostGlassBox className="project-card">
            <h1>Project Name</h1>
            <p>On the other hand, we denounce with righteous indignation </p>
            <p>
                <span>What I have Learned: </span>
                blah blah blah
            </p>
            <div className="language-buttons-wrapper">
                <SecondaryButton>Html</SecondaryButton>
                <SecondaryButton>Java</SecondaryButton>
                <SecondaryButton>Javascript</SecondaryButton>
                <SecondaryButton>Css</SecondaryButton>
            </div>
        </FrostGlassBox>
    )
}
