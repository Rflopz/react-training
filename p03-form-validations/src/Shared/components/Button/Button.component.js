import React from 'react'
import "./Button.styles.css"

const Button = ({ title, onClick, disabled, ...props }) => {
  return (
    <button onClick={onClick} disabled={disabled} {...props}>{title}</button>  
  )
}

export default Button