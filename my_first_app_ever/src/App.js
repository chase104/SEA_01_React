import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Player from './components/player';
import Board from './components/board';

import { useState } from 'react'

function App() {

  let players = ["X", "O", "Z"];
  
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target);
    console.log(e.target.value);
    // change my state with new value!
    setInputValue(e.target.value)
  }
  let playersJSX = players.map((string) => {
    return <Player playerName={string} key={string}/>
  })
  return (
    <div className="App">
      <Header />
      <div id="player-container">
        { playersJSX }
        {/* <Player playerName={"X"}  />
        <Player playerName={"O"}  />
        <Player playerName={"Z"}  /> */}
      </div>
      <input value={inputValue} onChange={handleChange}/>
      <Board />
    </div>
  );
}

export default App;
