import './styles/App.css';
import React, { useState } from "react";
import Scoreboard from "./components/Scoreboard.js"
import Card from "./components/Card.js"

const App = () => {
  return (
    <div id="main">
      < Scoreboard />
      < Card />
    </div>
  );
}

export default App;
