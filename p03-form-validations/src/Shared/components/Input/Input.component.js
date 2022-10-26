import React from 'react'
import "./Input.styles.css";

const Input = ({ label, ...props }) => {
  return (
    <div className="form-input">
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} {...props} />
    </div>
  )
}

export default Input