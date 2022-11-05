import React from 'react'
import "./Input.styles.css";

const Input = ({ label, onChange, ...props }) => {
  return (
    <div className="form-input">
      <label htmlFor={props.name}>{label}</label>
      <input id={props.name} onChange={onChange} {...props} />
    </div>
  )
}

export default Input