import React from "react";
import logo from "../Shared/svg/logo.svg";
import { Button } from "../Shared/components";

const Header = ({ title }) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo logo-animation" alt="logo" />
      <h3>{title}</h3>
      <Button title="Animation on" />
    </header>
  );
};

export default Header;
