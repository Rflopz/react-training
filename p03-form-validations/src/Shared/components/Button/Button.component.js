import React from 'react'
import "./Button.styles.css"

const Button = ({ title, handleClick, isDisabled } ) => {
  return (
    <button onClick={handleClick} >{title}</button>
    // <>
    //   {(!isDisabled &&  <button onClick={handleClick} >{title}</button>)}
    //   {/* {(isDisabled &&  <button onClick={handleClick} disabled={true}>{title}</button>)} */}
      
    // </>
  )
}

Button.defaultProps = {
  title: 'Write your Title Here',
  isDisabled: false
}

export default Button