import './App.css';
import Header from './components/header.js';
import Player from './components/player';
import Board from './components/board';
import { useState } from 'react'
import Counter from './components/counter';
import Cars from './components/array_state';
import Auth from './components/auth';
import Quote from './components/quote';
import SingleTodo from './components/morningExample.js';
import SimpleCounter from './components/example';

function App() {

  let players = ["X", "O", "Z"];
  document.title = "APP!"
  let favIconLink = document.querySelector('link[rel="icon"]')
  console.log(favIconLink);
  setTimeout(() => {
    favIconLink.href = "./icon2.ico"
  }, 3000)
  
  // const [inputValue, setInputValue] = useState("");

  // const handleChange = (e) => {
  //   console.log(e.target);
  //   console.log(e.target.value);
  //   // change my state with new value!
  //   setInputValue(e.target.value)
  // }
  // let playersJSX = players.map((string) => {
  //   return <Player playerName={string} key={string}/>
  // })

  return (
    <div className="App">
      {/* <Header />
      <div id="player-container">
        { playersJSX }
      </div>
      <input value={inputValue} onChange={handleChange}/>
      <Board /> */}
      {/* <Counter />
      <Cars />
      <Auth />
      <Quote /> */}
      <SimpleCounter />
    </div>
  );
}

export default App;
