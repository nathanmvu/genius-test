import React from "react";
import "./Navbar.css"

function Navbar(props){
  return (
    <div>
      <nav className='navbar fixed-top'>
        <h4><a href='/'>Architecture Memory Test</a></h4>
        <h4 id='message' className='nav-item nav-link'>{props.text}</h4>
        <h4 className='nav-item nav-link'>Score: {props.score} | Highscore: {props.highScore}</h4>
      </nav>
    </div>
  );
};

export default Navbar;