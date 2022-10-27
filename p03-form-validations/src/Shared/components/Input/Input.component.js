import React, { useState } from 'react'
import "./Input.styles.css";


const Input = ({ label,ChangeValue, ...props }) => {



  return (
    <div className="form-input">
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} {...props} name={props.name} onChange={ChangeValue} autoComplete='off' />
    </div>
  )
}

export default Input