import React from 'react'
import "./Logo.styles.css"
import logo from "../../svg/logo.svg"

const Logo = ({animated, ...props}) => {
    return (
        <img src={logo} className={"App-logo" + (animated ? " logo-animation": "")} alt="logo" />
    )
}

export default Logo