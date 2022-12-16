
import React, { useState, useEffect } from 'react';
import './style.css';
import Die from './Die';
import { nanoid } from "nanoid"
import Confetti from 'react-confetti';

function App() {

  const [dice, setDice] = useState(allNewDice)
  const [tenzies, setTenzies] = useState(false)

  useEffect(()=>{
    const heldValue = dice.every(die=>die.isHeld)
    const firstValue = dice[0].value
    const allSameValues = dice.every(die=>die.value===firstValue)

    if(heldValue && allSameValues) {
      setTenzies(true)
    }
  },[dice])

  function generateNewDice(){
    return {
        value: Math.floor(Math.random()*6)+1, 
        isHeld: false,
        id: nanoid()
    }
  }


  function allNewDice() {
    let numArray = []
    for(let i=0; i < 10; i++){
      numArray.push(generateNewDice())
    }
    return numArray
  }

  const diceElements = dice.map(num => {
    return <Die key={num.id}                         
                value={num.value}
                isHeld={num.isHeld}
                holdDice={()=>
                  holdDice(num.id)
                } />
  })

  function rollDice() {
    if(!tenzies){
      setDice(oldDice => oldDice.map(die=>{
      return die.isHeld ? die : generateNewDice()
    }))}
    else {
      setTenzies(false)
      setDice(allNewDice())
    }
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(die=>{
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    }))
  }


  return (
    <main>
        {tenzies && <Confetti />}  
          <h1 className="title">Tenzies Game</h1>
          <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className='container'>
          {diceElements}
        </div>
        <button onClick={rollDice} className="roll-dice">{tenzies ? "New Game" : "Roll Dice"}</button>
    </main>
  );
}

export default App;
