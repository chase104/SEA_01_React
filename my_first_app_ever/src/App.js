import logo from './logo.svg';
import './App.css';
import Header from './components/header.js';
import Player from './components/player';
import Board from './components/board';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="player-container">
        <Player playerName={"X"} numberOfWins={3} />
        <Player playerName={"O"}  />
      </div>
      <Board />
    </div>
  );
}

export default App;
