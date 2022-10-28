import React, {useState, useEffect} from "react";
import logo from "../Shared/svg/logo.svg";
import { Button } from "../Shared/components";
import ReactLogo from "../Shared/components/Logo/ReactLogo.component";


const Header = ({ title }) => {

  const animationOn = {
    title  : "Animation On",
    status : true,
    useClass : "react-logo logo-with-animation "
  }

  const animationOff = {
    title  : "Animation Off",
    status : false,
    useClass : "react-logo"
  }

  const [infoHeader, setInfoHeader] = useState(animationOn)

  const handleClick = () =>{
    console.log (infoHeader)
    setInfoHeader(infoHeader.status===true ? animationOff : animationOn)
  }

  

  return (
    <header className="App-header">
      <ReactLogo logo={logo} className = {infoHeader.useClass} />
      <h3>{title}</h3>
      <Button title = {infoHeader.title} handleClick={handleClick}/>
    </header>
  );
};

export default Header;