import '../styles/Card.css';
import React, { useState } from "react";

const Card = (props) => {
  return (
    <div id="card-board">
      {props.card.map((card, index) => (
        <div onClick={props.clickCard} className="card" key={index}>{card}</div>
      ))}
    </div>
  );
}

export default Card;
