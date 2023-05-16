import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Messages from './components/messages';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div className="dashboard">
            <Sidebar />
            <Messages />
        </div>
        <Footer />
      </header>
    </div>
  );
}

export default App;
