import React, { useState } from 'react';
import "./menu.css";
import Documentation from './documentation.jsx';

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
  //toggle documentation
  const [isDocVis, setIsDocVis] = useState(false);

  const toggleDoc = () => {
    setIsDocVis(!isDocVis);
  };
  
  return(
    <div className="menuContainer" style={{width: slideContainer}}>
      <div className="menuButton" onClick={toggleMenu} style={{left: slideButton}}>
        <div className="verticalLine"></div>
      </div>
      <div className="menuBody" style={{left: slideBody}}> 
      {isDocVis && <Documentation onClose={toggleDoc} />} 
        <h2 className= "menuTitle">Welcome Anon!</h2>
        <br></br>
        <br></br>
        <a className="menuItemDisabled">Login</a>
        <br></br>
        <p></p>
        <a className="menuItemDisabled">About</a>
        <br></br>
        <p></p>
        <a className="menuItem" onClick={toggleDoc}>Docs</a>
      </div>
    </div>
  )
}

export default Menu;