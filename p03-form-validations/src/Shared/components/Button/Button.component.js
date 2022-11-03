import React from "react";
import "./Button.styles.css";

const Button = ({ title, ...props }) => {
  return <button {...props}>{title}</button>;
};

export default Button;
