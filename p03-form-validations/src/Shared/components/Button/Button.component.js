import React from 'react'
import "./Button.styles.css"

const Button = ({ title, handleClick, isDisabled, className } ) => {
  return (
    <button onClick={handleClick} className={className} disabled={isDisabled}>{title}</button>
  )
}

Button.defaultProps = {
  title: 'Write your Title Here',
  isDisabled: false,
  className : ""
}

export default Button