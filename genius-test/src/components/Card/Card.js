import React from "react";
import "./Card.css"

// Passing props for image and function that determins if image was clicked before
function Card(props){
  return (
    <div className="row">
      <div className="col-md-2">
        <div className="card">
          <img src={props.image} alt={props.id} onClick={() => props.clickMe(props.id)}/>
        </div>
      </div>
    </div>
  );
};

export default Card;