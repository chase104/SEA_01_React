import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Timer from './components/Timer';
import RandomNum from './components/RandomNum';
import RandomInspiration from './components/RandomInspiration';
import Hooks from './components/Hooks';

// put whatever is exported into this variable
import DisplayMessage from './components/Display_Message';
import EmployeeDirectory from './components/EmployeeDirectory';

function App() {

  const [currentApp, setCurrentApp] = useState("directory");
  const [isDarkTheme, setIsDarkTheme] = useState(false)


  return (
    <div className="App">
      <Header />
      <Navbar functionFromAppThatWillChangeState={setCurrentApp} />
      {currentApp === 'timer' ? <Timer /> : <></>}
      {currentApp === 'randomnum' ? <RandomNum /> : <></>}
      {currentApp === 'randominspiration' ? <RandomInspiration /> : <></>}
      {currentApp === 'hooks' ? <Hooks /> : <></>}
      {currentApp === 'directory' ? <EmployeeDirectory/> : <></>}
      
    </div>
  );
}

export default App;
