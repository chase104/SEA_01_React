import logo from './logo.svg';
import './App.css';
import { databaseInfo } from './database';
import { useEffect, useState } from 'react';
import Header from './components/Header'
import Filter from './components/Filter';
import Display from './components/Display';

function App() {

  const [allApartments, setAllApartments] = useState([]);

  useEffect(() => {
    // get information from database
    let apartmentsArray = databaseInfo;
    console.log(apartmentsArray);
    setAllApartments(apartmentsArray);
  }, []);

  console.log(allApartments);

  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Filter />
        <Display apartmentsToDisplay={allApartments} />
      </div>
    </div>
  );
}

export default App;
