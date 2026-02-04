import React from 'react'
import './FrostGlassBox.css'

export const FrostGlassBox = (props) => {
    const { children, className } = props;
    return (
        <div className={className+" liquid-glass"}>
            {children}
        </div>
    )
}
