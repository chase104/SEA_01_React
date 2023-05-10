import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Nav from './components/nav';
import PageContent from './components/page_content';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Nav />
        <PageContent />
        <Footer />
      </header>
    </div>
  );
}

export default App;
