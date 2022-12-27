import '../styles/Card.css';
import React, { useState } from "react";

const Card = () => {
  const [card, setCard] = useState([1,2,3,4,5,6,7,8,9,10])

  return (
    <div id="card-board">
      {card.map((card, index) => (
        <div class="card" key={index}>{card}</div>
      ))}
    </div>
  );
}
export default Card;
