import React, { useState } from "react";
import { Button, Logo } from "../Shared/components";

const Header = ({ title }) => {
  const [animated, setAnimated] = useState(true)

  const toggleAnimation = () => {
    setAnimated(!animated)
  }

  return (
    <header className="App-header">
      <Logo logo animated={animated}/>
      <h3>{title}</h3>
      <Button title={"Animation " + (animated? "on": "off")} onClick={toggleAnimation}/>
    </header>
  );
};

export default Header;
