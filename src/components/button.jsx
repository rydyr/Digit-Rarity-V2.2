import React from 'react';
import './button.css';

const MyButton = ({ onCalculate, isValid }) => {
return(
  <div>
    <button className="myButton" onClick={()=> isValid && onCalculate()} onTouchEnd={()=> isValid && onCalculate()} >Prove Your Rarity</button>
  </div>
);
}

export default MyButton;