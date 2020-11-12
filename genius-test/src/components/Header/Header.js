import React from "react";
import "./Header.css"

// Passing props for image and function that determins if image was clicked before
function Header(){
  return (
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">Architecture Memory Test!</h1>
        <p class="lead">Click on buildings to earn points but avoid clicking the same building twice!</p>
      </div>
    </div>
  );
};

export default Header;