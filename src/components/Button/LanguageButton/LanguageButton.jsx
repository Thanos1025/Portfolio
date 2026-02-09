import React from 'react'
import { FrostGlassBox } from '../../FrostGlassBox/FrostGlassBox';

export const LanguageButton = (props) => {
    const {name, id, selectedLanguageId, setSelectedLanguageId} = props;
    return (
        <div onClick={()=>setSelectedLanguageId(id)} className={'language-button-wrapper '+(selectedLanguageId==id?"selected-language-button":"")}>
            <div className='language-button'>
                <FrostGlassBox className='language-button-glass'></FrostGlassBox>
            </div>
            <div className='language-button-inner-text'>{name}</div>
        </div>
    )
}
