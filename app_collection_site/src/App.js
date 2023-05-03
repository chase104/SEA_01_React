import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import RandomNum from './components/RandomNum';
import RandomInspiration from './components/RandomInspiration';
import Hooks from './components/Hooks';

function App() {

  const [currentApp, setCurrentApp] = useState("hooks");



  return (
    <div className="App">
      <Header />
      <Navbar functionFromAppThatWillChangeState={setCurrentApp} />
      {currentApp === 'timer' ? <Timer /> : <></>}
      {currentApp === 'randomnum' ? <RandomNum /> : <></>}
      {currentApp === 'randominspiration' ? <RandomInspiration /> : <></>}
      {currentApp === 'hooks' ? <Hooks /> : <></>}
      
    </div>
  );
}

export default App;
