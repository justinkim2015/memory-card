import React, { useState } from "react";
import '../styles/Scoreboard.css';

const Scoreboard = (props) => {
  return (
    <div id='scoreboard'>
      <p>Score: {props.score}</p>
      <p>High Score: {props.highScore}</p>
    </div>
  )
}

export default Scoreboard;