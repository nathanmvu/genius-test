import React from "react";
import "./Header.css"

// Passing props for image and function that determins if image was clicked before
function Header(props){
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Genius Test!</h1>
        <p class="lead">Click images to earn points but avoid clicking the same image twice!</p>
      </div>
    </div>
  );
};

export default Header;