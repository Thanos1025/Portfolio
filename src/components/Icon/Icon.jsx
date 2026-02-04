import React from 'react'
import {xmlns} from '../IconPaths/IconPaths';
import './Icon.css'

export const Icon = (props) => {
    const {dimension, width, height, paths} = props;
  return (
    <svg xmlns={xmlns} fill='currentColor' viewBox={dimension?'0 0 '+dimension+" "+dimension:width?'0 0 '+width+" "+height:''} className="icon">
        {paths.map(d=><path d={d}></path>)}
    </svg>
  )
}
