import React from "react";
import { useState } from "react";

import { Button, Logotipo } from "../Shared/components";

const Header = ({ title }) => {
  const [isMovingAndHideText, setisMovingAndHideText] = useState(true);

  const onclickButton=()=>{
    setisMovingAndHideText(!isMovingAndHideText);
  }

  return (
    <header className="App-header">
      
       <Logotipo removeAnimation={isMovingAndHideText}/>
       { isMovingAndHideText &&
        <h3>{title}</h3>
      }
  
      <Button title="Animation on"  onclickButton={onclickButton}/>
    </header>
  );
};

export default Header;
