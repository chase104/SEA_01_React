import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import RandomNum from './components/RandomNum';
import RandomInspiration from './components/RandomInspiration';

function App() {

  const [currentApp, setCurrentApp] = useState("timer");



  return (
    <div className="App">
      <Header />
      <Navbar functionFromAppThatWillChangeState={setCurrentApp} />
      {currentApp === 'timer' ? <Timer /> : <></>}
      {currentApp === 'randomnum' ? <RandomNum /> : <></>}
      {currentApp === 'randominspiration' ? <RandomInspiration /> : <></>}
      
    </div>
  );
}

export default App;
