import React, { useState } from 'react';
import "./menu.css";

function Menu() {

  //toggling menu vis
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  const slideBody = isVisible ? '0px' : '-200px';
  const slideButton = isVisible ? '200px' : '0px';
  const slideContainer = isVisible ? '300px' : '20px';
  //end of menu toggle
  
  return(
    <div className="menuContainer" style={{width: slideContainer}}>
      <div className="menuButton" onClick={toggleMenu} style={{left: slideButton}}>
        <div className="verticalLine"></div>
      </div>
      <div className="menuBody" style={{left: slideBody}}>  
        <h2 className= "menuTitle">Welcome Anon!</h2>
        <br></br>
        <br></br>
        <a className="menuItemDisabled">Login</a>
        <br></br>
        <p></p>
        <a className="menuItemDisabled">About</a>
        <br></br>
        <p></p>
        <a className="menuItem">Docs</a>
      </div>
    </div>
  )
}

export default Menu;