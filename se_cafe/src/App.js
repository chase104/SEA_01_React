import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import HomePage from './pages/homepage';
import ItemDetailsPage from './pages/pageTwo';
import { useContext, useEffect } from 'react';
import { categories, items } from './data';
import { PrimaryContext } from './contexts/PrimaryContext';

function App() {
  const { setCategories, setItems } = useContext(PrimaryContext);

  useEffect(() => {
    // get data
    setCategories(categories);
    setItems(items);
  }, [])
  return (
    <div className="App">
     {/* forever sidebar */}
     <Sidebar />
     <HomePage />
     {/* <ItemDetailsPage /> */}
     {/* switch between 2 pages */}

    </div>
  );
}

export default App;
