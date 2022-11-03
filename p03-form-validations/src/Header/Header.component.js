import React, { useState } from "react";
import { Button, Logo } from "../Shared/components";

const Header = ({ title }) => {
  const [rotateLogo, setRotateLogo] = useState(false);

  return (
    <header className="App-header">
      <Logo rotate={rotateLogo}></Logo>
      <h3>{title}</h3>
      <Button
        title={`Animation ${rotateLogo ? "on" : "off"}`}
        onClick={() => {
          setRotateLogo(!rotateLogo);
        }}
      />
    </header>
  );
};

export default Header;
