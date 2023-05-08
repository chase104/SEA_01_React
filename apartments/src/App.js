import logo from './logo.svg';
import './App.css';
import { databaseInfo } from './database';
import { useEffect, useState } from 'react';
import Header from './components/Header'
import Filter from './components/Filter';
import Display from './components/Display';
import ApartmentCard from './components/ApartmentCard';
import CardLoader from './components/CardLoader';

function App() {

  const [allApartments, setAllApartments] = useState([]);
  const [matchedApartments, setMatchedApartments] = useState([]);
  const [loading, setLoading] = useState(true);
  
  console.log(allApartments);
  console.log(matchedApartments);

  const loaders = [];
  for (let i=0; i<5; i++) {
    loaders.push(<CardLoader key={i}/>)
  }

  useEffect(() => {
    // get information from database
    setTimeout(() => {

      let apartmentsArray = databaseInfo;
      setAllApartments(apartmentsArray);
      setMatchedApartments(apartmentsArray);
      setLoading(false)

    }, 2000)
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <Header />
        <Filter 
          allApartments={allApartments} 
          setMatchedApartments={setMatchedApartments}  
        />
        {loading ? loaders : <Display apartmentsToDisplay={matchedApartments} />}
      </div>
    </div>
  );
}

export default App;
