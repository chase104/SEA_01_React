import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Home from './pages/Home';
import Footer from './components/footer';
import Person from './components/person';




function App() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <Person /> */}
        <Navbar />
        {/* <Home />
        <Footer /> */}
      </div>
    </div>
  );
}

export default App;
