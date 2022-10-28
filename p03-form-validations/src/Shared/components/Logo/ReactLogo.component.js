import React from 'react'
import "./Reactlogo.styles.css"

const ReactLogo = ({logo, className}) =>{
    return (
        <img src={logo} className={className} alt="logo" />
    )
}

export default ReactLogo




