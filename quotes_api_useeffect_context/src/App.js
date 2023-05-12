import logo from './logo.svg';
import './App.css';
import Nav from './components/nav';
import Dashboard from './components/dashboard';
import FavoriteQuote from './components/favorite_quote';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Dashboard />
        <FavoriteQuote />
       {/* 
       nav
       home (quotes, quoteDetails)
       Footer (favorite quote)
       */}
      </header>
    </div>
  );
}

export default App;
