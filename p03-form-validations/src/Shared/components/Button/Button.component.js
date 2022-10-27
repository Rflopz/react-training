import React from 'react'
import "./Button.styles.css"

const Button = ({ title, onclickButton, disabled, ...props }) => {

  return (
    <button onClick={onclickButton} disabled={disabled} {...props} >{title}</button>  
  )
}

export default Button