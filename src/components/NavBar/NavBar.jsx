import React, { Fragment, useEffect, useRef, useState } from 'react'
import './NavBar.css'
import { Icon } from '../Icon/Icon';

import { FrostGlassBox } from '../FrostGlassBox/FrostGlassBox'
import { NavBarButton } from '../Button/NavBarButton/NavBarButton';

export const NavBar = (props) => {
  const{setSelectedButtonId, buttons, selectedButtonId} = props;

  return (
    <div className='nav-bar'>
      <FrostGlassBox className="nav-bar-wrapper">
        {
          buttons.map((button) => {
            return (
              <Fragment key={button.id}>
                <NavBarButton setSelectedButtonId={setSelectedButtonId} selectedButtonId={selectedButtonId} scrollY={button.scrollY} name={button.name} icon={button.icon} id={button.id} />
              </Fragment>
            )
          })
        }
      </FrostGlassBox>
    </div>
  )
}
