import React, { useContext, useState } from 'react'
import { Icon } from '../../Icon/Icon'
import { ElementContext } from '../../../App';

export const NavBarButton = (props) => {
    const { id, name, icon, scrollY, selectedButtonId, setSelectedButtonId } = props
    const clickHandler = () => {
        setSelectedButtonId(id);
    };

    return (
        <button onClick={() => clickHandler()} className={ (id==selectedButtonId ? "nav-bar-selected-button liquid-glass" : "nav-bar-button")}>
            <span>
                <Icon paths={icon} dimension={600} ></Icon>
            </span>
            <span>
                {name}
            </span>
        </button>
    )
}
