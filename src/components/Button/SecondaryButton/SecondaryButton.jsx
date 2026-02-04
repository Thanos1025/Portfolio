import React from 'react'
import './SecondaryButton.css';

export const SecondaryButton = (props) => {
  const {children} = props
  return (
    <button className='secondary-btn'>
      {children}
    </button>
  )
}
