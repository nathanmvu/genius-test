import React from "react";
import "./Navbar.css"

// Passing props for image and function that determins if image was clicked before
function Navbar(props){
  return (
    <div>
      <nav className='navbar fixed-top'>
        <h4>Architecture Memory Test</h4>
        <h4 className='nav-item nav-link'>{props.text}</h4>
        <h4 className='nav-item nav-link'>Score: {props.score} | Highscore: {props.highScore}</h4>
      </nav>
    </div>
  );
};

export default Navbar;