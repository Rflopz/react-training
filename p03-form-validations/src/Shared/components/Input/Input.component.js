import React from "react";
import "./Input.styles.css";

const Input = ({ label, ...props }) => {
  const handleChange = (e) => {
    props.onChange(e.target.value, props.name);
  };

  return (
    <div className="form-input">
      <label htmlFor={props.name}>{label}</label>
      <input
        type={props.type}
        id={props.name}
        {...props}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
