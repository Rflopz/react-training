import React from 'react';

import logo from '../../svg/logo.svg'
import "./Logo.styles.css";

const Logo = (props) => {

  return (
      <img src={logo} className={`App-logo  ${props.rotate ? "logo-animation" : ""}`}  alt="logo" />
  );
};

export default Logo;
