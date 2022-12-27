import './styles/App.css';
import React, { useEffect, useState } from "react";
import Scoreboard from "./components/Scoreboard.js"
import Card from "./components/Card.js"

const App = () => {
  const [pickedCard, setPickedCard] = useState([])
  const [card, setCard] = useState([1,2,3,4,5,6,7,8,9,10])
  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)

  const clickCard = (e) => {
    let card = e.target.innerText
    setScore(score + 1)
    setPickedCard([...pickedCard, card])
    isGameOver(card)
  }  

  const isGameOver = (card) => {
    if(isSameCard(card) === true) {
      isNewHighScore(score)
      setScore(0)
      setPickedCard([])
    }
  }

  const isSameCard = (card) => {
    if(pickedCard.includes(card)){
      return true
    } else {
      return false
    }
  }

  const isNewHighScore = (score) => {
    if(score > highScore) {
      setHighScore(score)
    } 
  }
  
  useEffect(() => {
    let array = card
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    
    setCard(array)
  })

  return (
    <div id="main">
      < Scoreboard score={score} highScore={highScore} />
      < Card card={card} clickCard={clickCard} />
    </div>
  );
}

export default App;
